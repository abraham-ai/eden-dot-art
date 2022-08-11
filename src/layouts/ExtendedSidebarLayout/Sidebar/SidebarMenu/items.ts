import type { ReactNode } from 'react';

import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';

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
        name: 'Test',
        link: '/test',
        icon: AccountTreeTwoToneIcon
      }
    ]
  }
];

export default menuItems;
