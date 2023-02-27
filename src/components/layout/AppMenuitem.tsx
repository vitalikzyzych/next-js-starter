import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Ripple } from 'primereact/ripple';
import { classNames } from 'primereact/utils';
import { useContext, useEffect } from 'react';
import { LayoutContext } from '../context/layoutcontext';
import { MenuContext } from '../context/menucontext';
import { ILayoutContext, IMenuContext } from './types';

const AppMenuitem = (props) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext) as IMenuContext;
  const { isSlim, isHorizontal, isDesktop, setLayoutState, layoutState, layoutConfig } = useContext(
    LayoutContext,
  ) as ILayoutContext;
  const router = useRouter();
  const item = props.item;
  const key = props.parentKey ? props.parentKey + '-' + props.index : String(props.index);
  const isActiveRoute = item.to && router.pathname === item.to;
  const active = activeMenu === key || !!(activeMenu && activeMenu.startsWith(key + '-'));

  useEffect(() => {
    if (layoutState.resetMenu) {
      setActiveMenu('');
      setLayoutState((prevLayoutState) => ({ ...prevLayoutState, resetMenu: false }));
    }
  }, [layoutState]);

  useEffect(() => {
    if (!(isSlim() || isHorizontal()) && isActiveRoute) {
      setActiveMenu(key);
    }

    const onRouteChange = (url) => {
      if (!(isSlim() || isHorizontal()) && item.to && item.to === url) {
        setActiveMenu(key);
      }
    };

    router.events.on('routeChangeComplete', onRouteChange);
    return () => {
      router.events.off('routeChangeComplete', onRouteChange);
    };
  }, [router, layoutConfig]);

  const itemClick = (event) => {
    // avoid processing disabled items
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    // navigate with hover
    if ((props.root && isSlim()) || isHorizontal()) {
      setLayoutState((prevLayoutState) => ({
        ...prevLayoutState,
        menuHoverActive: !prevLayoutState.menuHoverActive,
      }));
    }

    // execute command
    if (item.command) {
      item.command({ originalEvent: event, item: item });
    }

    // toggle active state
    if (item.items) {
      setActiveMenu(active ? props.parentKey : key);

      if (props.root && !active && (isSlim() || isHorizontal())) {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlaySubmenuActive: true }));
      }
    } else {
      if (!isDesktop()) {
        setLayoutState((prevLayoutState) => ({
          ...prevLayoutState,
          staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive,
        }));
      }

      if (isSlim() || isHorizontal()) {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, menuHoverActive: false }));
      }

      setActiveMenu(key);
    }
  };

  const onMouseEnter = () => {
    // activate item on hover
    if (props.root && (isSlim() || isHorizontal()) && isDesktop()) {
      if (!active && layoutState.menuHoverActive) {
        setActiveMenu(key);
      }
    }
  };

  const subMenu =
    item.items && item.visible !== false ? (
      <ul>
        {item.items.map((child, i) => {
          return (
            <AppMenuitem
              item={child}
              index={i}
              className={child.badgeClass}
              parentKey={key}
              key={child.label}
            />
          );
        })}
      </ul>
    ) : null;

  return (
    <li className={classNames({ 'layout-root-menuitem': props.root, 'active-menuitem': active })}>
      {props.root && item.visible !== false && (
        <div className="layout-menuitem-root-text">{item.label}</div>
      )}
      {(!item.to || item.items) && item.visible !== false ? (
        <>
          <a
            href={item.url}
            onClick={(e) => itemClick(e)}
            className={classNames(item.class, 'p-ripple tooltip-target')}
            target={item.target}
            data-pr-tooltip={item.label}
            data-pr-disabled={!(isSlim() && props.root && !layoutState.menuHoverActive)}
            tabIndex={0}
            onMouseEnter={onMouseEnter}
          >
            {item.icon && (
              <FontAwesomeIcon
                className="layout-menuitem-icon"
                size="lg"
                icon={item.icon as IconLookup}
                color="var(--logo-color)"
              />
            )}
            <span className="layout-menuitem-text">{item.label}</span>
            {item.items && <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>}
            <Ripple />
          </a>
        </>
      ) : null}
      {item.to && !item.items && item.visible !== false ? (
        <>
          {/* @see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7 */}
          <Link href={item.to} replace={item.replaceUrl} legacyBehavior>
            <a
              onClick={(e) => itemClick(e)}
              className={classNames(item.class, 'p-ripple ', { 'active-route': isActiveRoute })}
              tabIndex={0}
              onMouseEnter={onMouseEnter}
            >
              {item.icon && (
                <FontAwesomeIcon
                  className="layout-menuitem-icon"
                  size="lg"
                  icon={item.icon}
                  color="var(--logo-color)"
                />
              )}
              <span className="layout-menuitem-text">{item.label}</span>
              {item.items && <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>}
              <Ripple />
            </a>
          </Link>
        </>
      ) : null}
      {subMenu}
    </li>
  );
};

export default AppMenuitem;
