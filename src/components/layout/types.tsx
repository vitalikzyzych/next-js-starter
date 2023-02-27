import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export interface IMenuItem {
  label?: string;
  icon?: IconLookup;
  to?: string;
  url?: string;
  className?: string;
  disabled?: boolean;
  visible?: boolean;
  target?: string;
  items?: Array<IMenuItem>;
}

export interface ILayoutConfig {
  menuTheme: string;
  menuMode: string;
  colorScheme: string;
  inputStyle: string;
  theme: string;
  ripple: boolean;
  scale: number;
}

export interface ILayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  overlaySubmenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
  resetMenu: boolean;
}

export interface ILayoutContext {
  layoutConfig: ILayoutConfig;
  layoutState: ILayoutState;
  setLayoutState: (ILayoutState) => ILayoutState;
  setLayoutConfig: (ILayoutConfig) => ILayoutConfig;
  setBreadcrumbs: (any) => any;
  isOverlay: () => boolean;
  isDesktop: () => boolean;
  isSlim: () => boolean;
  isHorizontal: () => boolean;
}

export interface IMenuContext {
  activeMenu: string;
  setActiveMenu: (string) => string;
}
