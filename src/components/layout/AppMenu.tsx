import AppSubMenu from './AppSubMenu';
import { bciDashboard, bciJobs, bciReports, bciSettings } from 'assets/svg/icons';

const AppMenu = () => {
  const model = [
    {
      items: [
        {
          label: 'Dashboard',
          icon: bciDashboard,
          to: '/',
        },
        {
          label: 'Job Post',
          icon: bciJobs,
          to: '/jobs',
        },
        {
          label: 'Reports',
          icon: bciReports,
          to: '/reports',
        },
        {
          label: 'Settings',
          icon: bciSettings,
          to: '/settings',
        },
      ],
    },
  ];

  return <AppSubMenu model={model} />;
};

export default AppMenu;
