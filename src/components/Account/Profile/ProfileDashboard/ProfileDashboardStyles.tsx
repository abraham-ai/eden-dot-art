import styled from 'styled-components'

const ProfileDashboardStyles = styled.section`
  width: 100%;
  .menu {
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
  }
  .menu-item {
    font-size: 20px;
    background: cyan;
  }
  .menu-label {
    display: flex;
  }
  .ant-menu-submenu-title {
    display: flex;
    align-items: center;
  }
  /*** MENU BUTTON ***/
  .menu-button:first-child {
    margin-left: 0;
  }
  .menu-button {
    margin-right: 10px;
  }
  .menu-button.ant-btn-primary {
    background: rgba(0, 0, 0, 0.06);
    color: black;
  }
  .menu-label div,
  .menu-label span {
    font-weight: 600;
    height: 20px;
    display: flex;
    align-items: center;
  }
  .menu-label div {
    margin-right: 10px;
  }
  .menu-label span {
    background: lightgray;
    border-radius: 10px;
    padding: 10px 12px;
  }
`

export { ProfileDashboardStyles }
