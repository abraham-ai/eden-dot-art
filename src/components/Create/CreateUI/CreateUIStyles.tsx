import styled from 'styled-components'

const CreateUIStyles = styled.section`
  height: 500px;
  width: 100%;

  /*** CREATE MODAL ***/
  .create-modal {
    background: rgba(0, 0, 0, 0.65);
    min-width: 80%;
    height: 80%;
    top: 100px;
  }
  /*** CREATE MODAL FORM WRAPPER ***/
  .create-modal-form-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 97%;
    height: 97%;
    max-width: 97%;
    max-height: 97%;
    background: white;
    padding: 0px;
    border-radius: 20px;
  }
  /*** FORM OUTER WRAPPER ***/
  .form-wrapper {
    display: flex;
    flex: 1;
    height: 100%;
  }
  /*** FORM INNER WRAPPER ***/
  .form-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: scroll;
  }
  /*** FORM INNER WRAPPER ***/
  .form-inner-wrapper {
    display: flex;
  }
  .filter-select > div {
    display: flex;
    align-items: center;
  }
  label {
    color: #536471;
    font-size: 1.2rem;
    margin-top: 18px;
  }
  .divider {
    border: 1px solid lightgray;
    margin-bottom: 10px;
    margin-top: -2px;
  }
  .create-icon {
    color: #8c7cf0;
    font-size: 1.3rem;
    margin: 0 8px 0 0;
  }
  /*** CLOSE ICON WRAPPER ***/
  .close-icon-wrapper {
    position: fixed;
    top: 10px;
    right: 10px;
    color: black;
  }
  .close-icon-wrapper:hover {
    cursor: pointer;
    z-index: 50;
  }
  .close-icon {
    color: white;
  }
  .close-icon:hover {
    cursor: pointer;
  }
  .x-button-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .x-button {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    min-width: 50px;
  }
  /*** ACCOUNT WRAPPER ***/
  .account-wrapper {
    border-radius: 50%;
    overflow: hidden;
    min-height: 48px;
    min-width: 48px;
    max-height: 48px;
    max-width: 48px;
    margin: 25px 0 0 10px;
  }
  /*** FORM TABS WRAPPER ***/
  .form-tabs-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  #create-text-area {
    min-height: 100px;
    border: none;
    color: black;
    font-size: 1.2rem;
    margin-top: 30px;
    font-weight: 500;
  }
`

export default CreateUIStyles
