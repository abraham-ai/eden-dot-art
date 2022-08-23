import type { ReactNode } from 'react';

// ICONS
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import { MdHomeFilled } from 'react-icons/md';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// ROUTES
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
    heading: 'EDEN.DEV',
    items: [
      {
        name: 'Home',
        link: ROUTES.EDEN_DEV.HOME,
        icon: MdHomeFilled
      },
      {
        name: 'Pricing',
        link: ROUTES.EDEN_DEV.PRICING,
        icon: AttachMoneyIcon
      }
    ]
  },
  {
    heading: 'EDEN.ART',
    items: [
      {
        name: 'Home',
        link: ROUTES.EDEN_DEV.HOME,
        icon: MdHomeFilled
      },
      {
        name: 'Pricing',
        link: ROUTES.EDEN_DEV.PRICING,
        icon: AttachMoneyIcon
      },
      {
        name: 'Create',
        link: ROUTES.EDEN_DEV.PRICING,
        icon: AttachMoneyIcon
      },
      {
        name: 'My Creations',
        link: ROUTES.EDEN_DEV.PRICING,
        icon: AttachMoneyIcon
      }
    ]
  },
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
