import React, { useState } from 'react';

// ROUTING
import { useLocation, NavLink } from 'react-router-dom';

// CSS
import styled from 'styled-components';

// COMPONENTS
import { FollowUs } from '../../../components/abraham/';

// HOOKS
import { useWindowDimensions } from '../../../hooks';

// UI
import { Drawer, Button, Typography } from 'antd';
const { Text } = Typography;

// ICONS
import { MenuOutlined } from '@ant-design/icons';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const NavDrawerStyles = styled.aside`
  order: 2;
  button {
    width: 54px;
    height: 54px;
  }
  @media (min-width: 20em) {
  }
  @media (min-width: 40em) {
    padding: 0 0 0 10px;
    width: auto;
    height: auto;
  }
  .anticon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function NavDrawer() {
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();
  const { width } = useWindowDimensions();

  function toggleDrawer() {
    setIsVisible(!isVisible);
  }

  const menuSize = width < 560 ? '24px' : 'inherit';

  return (
    <>
      {width > 959 ? null : (
        <NavDrawerStyles id="nav-drawer">
          <Button
            type="default"
            icon={<MenuOutlined style={{ fontSize: menuSize }} />}
            onClick={() => toggleDrawer()}
          />
          <Drawer title="Community" placement="right" onClose={() => setIsVisible(false)} visible={isVisible}>
            <NavLink to="/scripture" key="/scripture" icon={<HistoryEduIcon />}>
              <Text>Scripture</Text>
            </NavLink>
            <FollowUs />
          </Drawer>
        </NavDrawerStyles>
      )}
    </>
  );
}