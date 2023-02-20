// STYLES
import styled from 'styled-components'

const CreationSocialsExtraStyles = styled.span`
  background: pink;
  border-radius: 25px;

  .cr-social {
    height: 40px;
    background: yellow;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .cr-social:first-child {
    margin-top: 0;
  }
  .cr-social .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export { CreationSocialsExtraStyles }
