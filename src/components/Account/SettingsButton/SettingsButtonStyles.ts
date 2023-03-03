import styled from 'styled-components'

const boxShadowRegular =
  '0px 0px 2px rgba(0, 0, 0, 0.15), 0px 4px 7px rgba(0, 0, 0, 0.05), 0px 12px 40px rgba(0, 0, 0, 0.1);'
const smallTranslate = 'translate3d(0px, -1px, 0px)'

const SettingsButtonStyles = styled.section`
  // CONNECT
  .connect-button-wrapper {
    display: flex;
    align-items: center;
  }
  .connect-button {
    height: 48px;
    border-radius: 30px;
    background-color: black;
    font-weight: 600;
    font-size: 1rem;
    padding: 0 20px;
  }
  .connect-button:hover {
    cursor: pointer;
    box-shadow: ${boxShadowRegular};
    transform: ${smallTranslate};
  }
  .connect-button > * {
    color: white;
  }
  .profile-button-main {
    background-color: white;
  }
  // ACCOUNT
  .main-account-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    min-width: 48px;
    max-height: 48px;
    max-width: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05),
      0px 8px 40px rgba(0, 0, 0, 0.04);
    background: white;
    overflow: hidden;
  }
  .main-account-button:hover {
    background: white;
    min-height: 48px;
    min-width: 48px;
    max-height: 48px;
    max-width: 48px;
  }
  .account-profile-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 36px;
    min-width: 36px;
    max-height: 36px;
    max-width: 36px;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;
  }
  .account-profile-wrapper:hover {
    border: 5px solid rgb(112, 99, 192);
  }
  .account-button-wrapper {
    border-radius: 50%;
    overflow: hidden;
    margin: 25px 0 0 10px;
  }
  // ETHERSCAN LINK
  .etherscan-link {
    height: 10px;
    text-decoration: none;
    background-color: lightgray;
    border-radius: 10px;
  }
  .etherscan-link:hover {
    background: gray;
  }
`

export default SettingsButtonStyles
