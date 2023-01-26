import React from 'react';

// NEXT 
import Link from 'next/link'

// CSS
import styled from 'styled-components';

// UI
import { Layout, Menu, Button } from 'antd';
import type { MenuProps } from 'antd';
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Item = Menu.Item;

// COMPONENTS
// import { AccountButton } from '../../../components';
// import { Logo, CreateButton } from '../../../components/abraham';
import Logo from '@/components/Logo/Logo'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions';

// ICONS
// import FlashOnIcon from '@mui/icons-material/FlashOn';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import BorderAllIcon from '@mui/icons-material/BorderAll';
// import PersonIcon from '@mui/icons-material/Person';
// import FlareIcon from '@mui/icons-material/Flare';
import { FiUsers } from 'react-icons/fi';
import LogoutIcon from '@mui/icons-material/Logout';
// import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {
  // HomeFilled,
  // WalletOutlined,
  UserOutlined,
  HomeOutlined,
  PlusOutlined
} from '@ant-design/icons';

// import { HiSparkles, HiOutlineSparkles } from 'react-icons/hi';
// import { AiFillFire, AiOutlineFire } from 'react-icons/ai';
// import { RiUser3Fill } from 'react-icons/ri';
// import { MdAccountBalance } from 'react-icons/md';
// import { FaChurch } from 'react-icons/fa';
// import { BiChurch } from 'react-icons/bi';
// import { SiGraphql } from 'react-icons/si';
// import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  height: 100vh;
  width: 70px;
  min-width: 70px;
  display: flex;
  flex-direction: column;
  z-index: 100;

  /* border-right: 1px solid lightgray; */

  #nav-inner-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1 !important;
    width: 70px !important;
    min-width: 70px !important;
    max-width: 70px !important;
    padding-top: 10px;
    border-left: 1px solid lightgray;
  }
  .ant-menu-item .nav-link-text {
    display: none;
  }
  .ant-col {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  /*** MENU ITEM **/
  .ant-menu-item,
  .ant-menu-item > button {
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: left;
    height: 44px !important;
  }
  .ant-menu-item > a {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .ant-menu-item button {
    font-size: 16px;
    font-weight: 600;
  }
  /*** CREATE BUTTON ***/
  .ant-menu-item.create-button {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  .ant-layout-sider-children {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .account-menu-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .create-button-wrapper {
    margin: 10px;
  }
  .create-button-wrapper > div {
    display: flex;
    justify-content: center;
  }
  /*** LOGO ***/
  .logo-wrapper,
  .logo-wrapper > #logo {
    /* padding-left: 12px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*** LINK WRAPPER ***/
  .link-wrapper {
    display: flex;
  }
  @media and (max-width: 930px) {
    .link-wrapper {
      display: flex;
    }
  }
  /*** ICON WRAPPER ***/
  .icon-wrapper {
    width: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-content: center;
  }
  @media and (max-width: 930px) {
    .icon-wrapper {
      margin-right: 20px;
    }
  }
  /*** MENU ITEM ***/
  .ant-menu-item .anticon {
    font-size: 20px;
    margin: 0;
  }
  /*** FOLLOW US ***/
  .follow-us-wrapper {
    /* background: yellow; */
    display: flex;
    flex: 1;
    align-items: center;
  }
  .bottom-nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .jwt-auth-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    flex: 1;
    padding: 0 10px 10px 10px;
  }
  .jwt-auth-wrapper button {
    margin-top: 10px;
  }
  .account-menu-wrapper {
    position: fixed;
    top: 30px;
    right: 30px;
  }

  button.logout-button {
    height: 44px;
    min-height: 44px !important;
    max-height: 44px !important;
    width: 44px;
    min-width: 44px !important;
    max-width: 44px !important;
    background: #8C7CF0;
  }
  @media (min-width: 20em) {
    width: 70px;
    min-width: 70px !important;
    background: white;
    right: 0;

    #nav-inner-wrapper {
      width: 70px !important;
      min-width: 70px !important;
      max-width: 70px !important;
    }
    .ant-menu-item .nav-link-text {
      display: none;
    }
  }
  @media (min-width: 40em) {
    .ant-menu-item .nav-link-text {
      display: block;
    }
    .ant-menu-item > a {
      display: flex;
      width: 100%;
      justify-content: flex-start;
    }
    .icon-wrapper {
      max-width: 50px;
    }
  }
  @media (min-width: 60em) {
    /* background-color: pink; */
    width: 200px !important;
    min-width: 200px !important;
    min-width: 200px !important;
    #nav-inner-wrapper {
      width: 200px !important;
      min-width: 200px !important;
      max-width: 200px !important;
    }
    .ant-menu-item .nav-link-text {
      display: block;
    }
    button.logout-button {
      width: 100%;
      min-width: 100% !important;
      max-width: 100% !important;
    }
  }
`;

export default function NavSide() {
  const { width } = useWindowDimensions();

  // const token = useSelector(state => state.token.value);
  // console.log(`%c ${token}`, 'background: #222; color: #bada55');

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const deviceWidthDesktop = 960;
  const logoutButtonShape = width > deviceWidthDesktop ? 'round' : 'circle';
  const isLogoutBlock = width > deviceWidthDesktop ? true : false;

  // console.log({ logoutButtonShape });

  return (
    <>
      {width < 560 ? null : (
        <NavStyles className="nav-wrapper">
          <Sider id="nav-inner-wrapper">
            {/* <div className="logo-wrapper">
              <Logo />
            </div> */}

            <Menu selectedKeys={[location.pathname]} mode="vertical">

              {/* { web3Modal.cachedProvider && typeof token !== 'undefined' ? */}
                <Item key='/profile'>
                  <Link href='/profile'>
                    <div className='link-wrapper'>
                      <span className='icon-wrapper'>
                        <UserOutlined size={20}/>
                      </span>  
                      { width > 959 ? <span className='nav-link-text'>Profile</span> : null }
                    </div>
                  </Link>
                </Item> 
                {/* : null 
              } */}

              {/* {web3Modal.cachedProvider ? ( */}
                <Item key='/garden'>
                  <Link href='/garden'>
                    <div className='link-wrapper'>
                      <span className='icon-wrapper'>
                        <HomeOutlined size={25} />
                      </span>
                      {width > 959 ? <span className='nav-link-text'>For You</span> : null}
                    </div>
                  </Link>
                </Item>
              {/* ) : null} */}


              {/* { web3Modal.cachedProvider ? 
              <Item key='/wallet'>
                <Link to='/wallet'>
                  <span className='icon-wrapper'>
                    <WalletOutlined />
                  </span>
                  <span className='nav-link-text'>Wallet</span>
                </Link>
              </Item> : null } */}

              {/* when clicking, route to /create */}
              {/* <div className="create-button-wrapper">
                <CreateButton isDisabled={token === '' ? true : false} />
              </div> */}

              <Item key='/following'>
                <Link href='/following'>
                  <div className='link-wrapper'>
                    <span className='icon-wrapper'>
                      <FiUsers />
                    </span>
                    {width > 959 ? <span className='nav-link-text'>Following</span> : null}
                  </div>
                </Link>
              </Item>

              {/* {true ? (
                <>
                  <Item key="/debug">
                    <Link to="/debug">
                      <span className="icon-wrapper">
                        <BugOutlined />
                      </span>
                      {width > 959 ? <span className="nav-link-text">Debug</span> : null}
                    </Link>
                  </Item>
                  <Item key="/subgraph">
                    <Link to="/subgraph">
                      <span className="icon-wrapper">
                        <SiGraphql />
                      </span>
                      {width > 959 ? <span className="nav-link-text">Subgraph</span> : null}
                    </Link>
                  </Item>
                </>
              ) : null} */}

              {/* <Item key="/scripture">
                <Link to="/scripture">
                  <span className="icon-wrapper">
                    <HistoryEduIcon size={20} />
                  </span>
                  {width > 959 ? <span className="nav-link-text">Scripture</span> : null}
                </Link>
              </Item>

              <Item key="/creations">
                <Link to="/creations">
                  <span className="icon-wrapper">
                    <FlareIcon size={20} />
                  </span>
                  {width > 959 ? <span className="nav-link-text">Creations</span> : null}
                </Link>
              </Item> */}

              <Item key='/log-out' className='logout-button'>
                <Button
                  className='create-button'
                  onClick={() => handleLogout()}
                  type='primary'
                  shape={logoutButtonShape}
                  block={isLogoutBlock}
                >
                  <span className='icon-wrapper'>
                    <PlusOutlined style={{ fontSize: 20}} />
                  </span>
                  {width > 959 ? <span className='nav-link-text'>Create</span> : null}
                </Button>
              </Item>
            </Menu>

            {/* <div className='bottom-nav-wrapper'>
              <div className="account-menu-wrapper">
                <AccountButton
                  userSigner={userSigner}
                  address={address}
                  localProvider={localProvider}
                  mainnetProvider={mainnetProvider}
                  price={price}
                  gasPrice={gasPrice}
                  web3Modal={web3Modal}
                  loadWeb3Modal={loadWeb3Modal}
                  logoutOfWeb3Modal={logoutOfWeb3Modal}
                  blockExplorer={blockExplorer}
                  NETWORKCHECK={NETWORKCHECK}
                  localChainId={localChainId}
                  selectedChainId={selectedChainId}
                  targetNetwork={targetNetwork}
                />
              </div>
            </div> */}
          </Sider>
        </NavStyles>
      )}
    </>
  );
}