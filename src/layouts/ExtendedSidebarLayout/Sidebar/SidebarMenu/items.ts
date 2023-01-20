import type { ReactNode } from 'react'

// INFO ICONS
import InfoIcon from '@mui/icons-material/Info'
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone'
import { MdHomeFilled } from 'react-icons/md'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import QuizIcon from '@mui/icons-material/Quiz'

// CREATE ICONS
import CreateIcon from '@/components/Icons/CreateIcon'

// SOCIAL
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'

// SORT ICONS
import PersonIcon from '@mui/icons-material/Person'
import { AiFillApi } from 'react-icons/ai'

// PRICNG ICONS
import { RiPlantFill } from 'react-icons/ri'
import PaidIcon from '@mui/icons-material/Paid'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CreditCardIcon from '@mui/icons-material/CreditCard'
// import { BorderBottomOutlined } from '@ant-design/icons';
// ROUTES
import { ROUTES } from '@/const/routes'

export interface MenuItem {
  link?: string
  icon?: ReactNode
  badge?: string
  badgeTooltip?: string

  items?: MenuItem[]
  name: string
}

export interface MenuItems {
  items: MenuItem[]
  heading: string
}

const menuItems: MenuItems[] = [
  {
    heading: 'EDEN.DEV',
    items: [
      {
        name: 'About',
        link: ROUTES.EDEN_DEV.HOME,
        icon: InfoIcon,
      },
      {
        name: 'Dev Garden',
        link: ROUTES.EDEN_DEV.DEV_GARDEN,
        icon: RiPlantFill,
      },
      {
        name: 'Ideas',
        link: ROUTES.EDEN_DEV.IDEAS,
        icon: TipsAndUpdatesIcon,
      },
      {
        name: 'FAQ',
        link: ROUTES.EDEN_DEV.FAQ,
        icon: QuizIcon,
      },
      {
        name: 'Dev Pricing',
        link: ROUTES.EDEN_DEV.PRICING,
        icon: PaidIcon,
      },
      {
        name: 'API Docs',
        link: ROUTES.EDEN_DEV.API_DOCS,
        icon: AiFillApi,
      },
    ],
  },
  {
    heading: 'EDEN.ART',
    items: [
      {
        name: 'Home',
        link: ROUTES.EDEN_ART.HOME,
        icon: MdHomeFilled,
      },
      {
        name: 'Pricing',
        link: ROUTES.EDEN_ART.PRICING,
        icon: AttachMoneyIcon,
      },
      {
        name: 'Creations',
        link: ROUTES.EDEN_ART.CREATIONS,
        icon: ConnectWithoutContactIcon,
      },
    ],
  },
  {
    heading: 'Wallet',
    items: [
      {
        name: 'Create',
        link: ROUTES.WALLET.CREATE,
        icon: CreateIcon,
      },
      {
        name: 'My Creations',
        link: ROUTES.WALLET.MYCREATIONS,
        icon: PersonIcon,
      },
      {
        name: 'Credits',
        link: ROUTES.WALLET.CREDITS,
        icon: CreditCardIcon,
      },
    ],
  },
  {
    heading: 'Test',
    items: [
      {
        name: 'Home',
        link: ROUTES.TEST.HOME,
        icon: AccountTreeTwoToneIcon,
      },
    ],
  },
]

export default menuItems
