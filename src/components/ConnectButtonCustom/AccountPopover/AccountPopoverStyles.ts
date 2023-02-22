import styled from 'styled-components'

const AccountPopoverStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  padding: 10px;

  .account-button-wrapper {
    overflow: hidden;
    border-radius: 50%;
    height: 48px;
    width: 48px;
  }
  button.account-button-main {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5px;
  }
  button.account-button-main:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1px;
  }
  .profile-name {
    font-weight: 600;
    font-size: 1.2rem;
  }
  .wallet-wrapper {
    display: flex;
    flex: 1;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 12px;
  }
  .etherscan-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .etherscan-link {
    height: 20px;
    border-radius: 5px;
    margin-left: 5px;
  }
  .etherscan-address {
    padding: 10px;
    color: black;
    height: 10px;
    width: auto;
    display: flex;
    align-items: center;
    border-radius: 5px;
    font-size: 0.8rem;
    font-family: courier;
    margin-left: 30px;
    background: rgba(0, 0, 0, 0.05);
  }
  .connect-button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 35px;
    margin-top: 5px;
    margin-left: 5px;
  }
  .chain-icon-wrapper {
    width: 30px;
    height: 30px;
    border-radius: 999;
    overflow: hidden;
    margin-right: 10px;
  }
  .chain-icon {
    width: 30px;
    height: 30px;
  }
  .theme-settings-wrapper {
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    align-items: center;
  }
  .theme-toggle {
    color: #8c7cf0;
    font-weight: 600;
    margin-right: 40;
  }
  .account-settings-wrapper {
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
  }
  .masonry-count-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .masonry-text-count {
    padding-right: 20px;
    color: #8c7cf0;
    font-weight: 600;
    margin-left: 10px;
  }
  .masonry-count-slider {
    margin-right: 20px;
    margin-left: 10px;
    display: flex;
    flex: 1;
    align-items: center;
  }
  .connect-button {
    display: flex;
    justify-content: flex-start;
  }
`

export { AccountPopoverStyles }
