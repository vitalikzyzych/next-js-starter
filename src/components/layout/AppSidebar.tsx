import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppMenu from './AppMenu';
import { MenuProvider } from '../context/menucontext';

import { bciLogo } from 'assets/svg/icons';

const AppSidebar = () => {
  return (
    <>
      {/* @see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7 */}
      <Link href="/" legacyBehavior>
        <FontAwesomeIcon
          className="layout-menuitem-icon"
          icon={bciLogo}
          size="2x"
          color="var(--logo-color)"
        />
      </Link>

      <div className="layout-menu-container">
        <MenuProvider>
          <AppMenu />
        </MenuProvider>
      </div>
    </>
  );
};

export default AppSidebar;
