import { useRouter } from 'next/router';
import PrimeReact from 'primereact/api';
import {
  useEventListener,
  useMountEffect,
  useResizeListener,
  useUnmountEffect,
} from 'primereact/hooks';
import { classNames, DomHandler } from 'primereact/utils';
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import AppSidebar from './AppSidebar';
import { LayoutContext } from '../context/layoutcontext';

import { ILayoutContext } from './types';

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = (props) => {
  console.log(LayoutContext);
  const { layoutConfig, layoutState, setLayoutState, isSlim, isHorizontal, isDesktop } = useContext(
    LayoutContext,
  ) as ILayoutContext;
  const topbarRef = useRef(null);
  const mainRef = useRef(null);

  const sidebarRef = useRef(null);
  const router = useRouter();
  const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = useEventListener({
    type: 'click',
    listener: (event) => {
      const isOutsideClicked = !(
        sidebarRef.current.isSameNode(event.target) ||
        sidebarRef.current.contains(event.target) ||
        topbarRef.current.menubutton.isSameNode(event.target) ||
        topbarRef.current.menubutton.contains(event.target)
      );

      if (isOutsideClicked) {
        hideMenu();
      }
    },
  });

  const [bindDocumentResizeListener, unbindDocumentResizeListener] = useResizeListener({
    listener: () => {
      if (isDesktop() && !DomHandler.isTouchDevice()) {
        hideMenu();
      }
    },
  });

  const hideMenu = useCallback(() => {
    setLayoutState((prevLayoutState) => ({
      ...prevLayoutState,
      overlayMenuActive: false,
      overlaySubmenuActive: false,
      staticMenuMobileActive: true,
      menuHoverActive: false,
      resetMenu: (isSlim() || isHorizontal()) && isDesktop(),
    }));
  }, [isSlim, isHorizontal, isDesktop, setLayoutState]);

  const blockBodyScroll = () => {
    DomHandler.addClass(mainRef.current, 'blocked-scroll');
  };

  const unblockBodyScroll = () => {
    DomHandler.removeClass(mainRef.current, 'blocked-scroll');
  };

  useMountEffect(() => {
    PrimeReact.ripple = true;
  });

  useEffect(() => {
    if (
      layoutState?.overlayMenuActive ||
      layoutState?.staticMenuMobileActive ||
      layoutState?.overlaySubmenuActive
    ) {
      bindMenuOutsideClickListener();
    }

    if (layoutState?.staticMenuMobileActive) {
      blockBodyScroll();
      (isSlim() || isHorizontal()) && bindDocumentResizeListener();
    }

    return () => {
      unbindMenuOutsideClickListener();
      unbindDocumentResizeListener();
      unblockBodyScroll();
    };
  }, [
    layoutState?.overlayMenuActive,
    layoutState?.staticMenuMobileActive,
    layoutState?.overlaySubmenuActive,
  ]);

  useEffect(() => {
    const onRouteChange = () => {
      hideMenu();
    };

    router.events.on('routeChangeComplete', onRouteChange);
    return () => {
      router.events.off('routeChangeComplete', onRouteChange);
    };
  }, [router, hideMenu]);

  useUnmountEffect(() => {
    unbindMenuOutsideClickListener();
  });

  const containerClass = classNames({
    'layout-light': layoutConfig?.colorScheme === 'light',
    'layout-dim': layoutConfig?.colorScheme === 'dim',
    'layout-dark': layoutConfig?.colorScheme === 'dark',
    'layout-colorscheme-menu': layoutConfig?.menuTheme === 'colorScheme',
    'layout-primarycolor-menu': layoutConfig?.menuTheme === 'primaryColor',
    'layout-transparent-menu': layoutConfig?.menuTheme === 'transparent',
    'layout-overlay': layoutConfig?.menuMode === 'overlay',
    'layout-static': layoutConfig?.menuMode === 'static',
    'layout-slim': layoutConfig?.menuMode === 'slim',
    'layout-horizontal': layoutConfig?.menuMode === 'horizontal',
    'layout-static-inactive':
      layoutState?.staticMenuDesktopInactive && layoutConfig?.menuMode === 'static',
    'layout-overlay-active': layoutState?.overlayMenuActive,
    'layout-mobile-active': layoutState?.staticMenuMobileActive,
    'p-input-filled': layoutConfig?.inputStyle === 'filled',
    'p-ripple-disabled': !layoutConfig?.ripple,
  });

  return (
    <>
      <div ref={mainRef} className={classNames('layout-container', containerClass)}>
        <div ref={sidebarRef} className="layout-sidebar pt-3">
          <AppSidebar />
        </div>
        <div className="layout-content-wrapper">
          {/* <AppTopbar ref={topbarRef} /> */}
          <div className="layout-content">{props.children}</div>
        </div>
        {/* <AppProfileSidebar /> */}
        {/* <AppConfig /> */}
        <div className="layout-mask"></div>
      </div>
    </>
  );
};

export default Layout;
