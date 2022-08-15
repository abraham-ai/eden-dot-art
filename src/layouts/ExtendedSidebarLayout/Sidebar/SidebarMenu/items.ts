import type { ReactNode } from 'react';

import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import { ROUTES } from '@/const/routes';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Test',
    items: [
      {
        name: 'Home',
        link: ROUTES.TEST.HOME,
        icon: AccountTreeTwoToneIcon
      }
    ]
  },
  {
    heading: 'Wallet',
    items: [
      {
        name: 'Store',
        link: ROUTES.WALLET.STORE,
        icon: AccountTreeTwoToneIcon
      },
      {
        name: 'Use',
        link: ROUTES.WALLET.USE,
        icon: AccountTreeTwoToneIcon
      },
      {
        name: 'Creations',
        link: '/creations',
        icon: AccountTreeTwoToneIcon
      }
    ]
  }
];

export default menuItems;
