import styled from 'styled-components'

const HeaderStyles = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  right: 0;
  left: 0;
  background: white;
  z-index: 100;
  box-shadow: 0px 1px 1px #0000001f;
  backdrop-filter: blur(3px);

  > div:first-child {
    width: 100%;
    height: 100%;
    // background: lime;
  }

  /*** NAV HEADER ***/
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    height: 60;
  }

  /*** NAV RIGHT WRAPPER ***/
  .nav-right-wrapper {
    display: flex;
    height: 100%;
    min-height: 100%;
    align-items: center;
    // background: magenta;
  }

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
  .menu-item {
    display: flex;
  }
`

export { HeaderStyles }
