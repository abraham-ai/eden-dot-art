import { useContext } from 'react';

// EDEN COMPONENTS
import Scrollbar from '@/components/Scrollbar/Scrollbar';

// CONTEXT
// import { SidebarContext } from 'src/contexts/SidebarContext';

import { Drawer, Divider } from '@mui/material';

// STYLED
import styled from 'styled-components'


// SIDE COMPONENTS
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';
// import { LogoEden } from '../../../components';

// width: ${theme.sidebar.width};
// min-width: ${theme.sidebar.width};
// color: ${theme.colors.alpha.trueWhite[70]};

const SidebarWrapper = styled.section`
    position: relative;
    z-index: 7;
    height: 100%;
    padding-bottom: 61px;
`

function Sidebar() {
  // const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  // const closeSidebar = () => toggleSidebar();


  return (
    <>
      <SidebarWrapper
        // styled={{
        //   display: {
        //     xs: 'none',
        //     lg: 'inline-block'
        //   },
        //   position: 'fixed',
        //   left: 0,
        //   top: 0,
        //   background:
        //     theme.palette.mode === 'dark'
        //       ? alpha(lighten(theme.header.background, 0.1), 0.5)
        //       : darken(theme.colors.alpha.black[100], 0.5),
        //   boxShadow:
        //     theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
        // }}
      >
        <Scrollbar>
          <div>
            <div style={{ width: 52 }}>
              {/* <LogoEden /> */}
            </div>
          </div>
          <Divider
            // style={{
            //   my: theme.spacing(3),
            //   mx: theme.spacing(2),
            //   background: theme.colors.alpha.trueWhite[10]
            // }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          // sx={{
          //   background: theme.colors.alpha.trueWhite[10]
          // }}
        />
        <SidebarFooter />
      </SidebarWrapper>
      <Drawer
        // sx={{
        //   boxShadow: `${theme.sidebar.boxShadow}`
        // }}
        // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        // open={sidebarToggle}
        // onClose={closeSidebar}
        // variant="temporary"
        // elevation={9}
      >
        {/* sx={{
          background:
            theme.palette.mode === 'dark'
              ? theme.colors.alpha.white[100]
              : darken(theme.colors.alpha.black[100], 0.5)
        }} */}

        <SidebarWrapper>
          <Scrollbar>
            <div>
              <div>
                {/* <Logo /> */}
              </div>
            </div>
            {/* style={{
              my: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10]
            }} */}
            <Divider />
            <SidebarMenu />
          </Scrollbar>
          <SidebarFooter />
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
