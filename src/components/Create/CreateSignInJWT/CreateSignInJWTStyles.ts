import styled from 'styled-components'

const CreateSignInJWTStyles = styled.section`
  .create-sign-in-jwt-modal {
    width: 480px;
    background: white;
    border: 2px solid #000;
    border-radius: 25px;
    padding: 0;
    overflow: hidden;
  }
  .sign-in-modal-inner-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
  .sign-in-header-text {
    color: rgb(0 80 30);
  }
  .sign-in-message {
    padding-top: 30px;
    color: rgb(0 80 30);
    text-align: center;
    font-size: 1rem;
  }
  .sign-in-message-cntd {
    padding-top: 10;
    padding-bottom: 30px;
    color: rgb(0 80 30);
    text-align: center;
    font-weight: normal;
  }
  .sign-in-auth-token-wrapper {
    display: flex;
    flex-direction: column;
  }
  .sign-in-signature-wrapper {
    background: red;
  }
  .sign-in-auth-token-header {
    font-weight: 600;
  }
  .sign-in-auth-token,
  .sign-in-signature {
    word-break: break-word;
    color: black;
  }
`

export { CreateSignInJWTStyles }
