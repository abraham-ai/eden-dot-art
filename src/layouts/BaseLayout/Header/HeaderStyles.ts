// STYLES
import styled from 'styled-components'

const HeaderWrapperStyles = styled.section`
  position: fixed;
  width: 100%;
  height: 60px;
  padding-left: 10px;
  right: 0;
  z-index: 6;
  display: flex;
  padding-top: 10px 0;
  background-color: white;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  justify-content: space-between;
  // backdrop-filter: blur(3px);

  .header-wrapper-inner {
    padding: 0 20px;
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
  @media (max-width: 930px) {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    flex: 1;
    top: 0;
    z-index: 200;
  }
  .header-connect-wrapper {
    display: flex;
    align-items: center;
  }
  /*** CREATE BUTTON ***/
  #create-button {
    display: flex;
    align-items: center;
    height: 45px;
    margin-left: 15px;
    padding: 10px 20px;
    color: white;
    background: #8c7cf0;
    border-radius: 30px;
  }
  /*** NAV LINK ***/
  .nav-link-wrapper {
    padding: 0 10px;
  }
  .nav-link-wrapper:hover {
    color: white;
  }
  .nav-link-text:hover {
    cursor: pointer;
    color: white;
  }
  .nav-link.active a {
    font-weight: 600;
    color: black;
    margin: 20px;
    text-decoration: unset;
    padding-bottom: 3px;
    border-bottom: 3px solid black;
  }
  .nav-link a {
    font-weight: 600;
    color: gray;
    margin: 20px;
    text-decoration: unset;
    padding-bottom: 3px;
  }
  @media (min-width: 1200px) {
    left: 0;
    width: auto;
    display: flex;
    padding: 0 20px;
  }
  /*** MENU ITEM ***/
  .menu-item {
    display: flex;
  }
`

export { HeaderWrapperStyles }
