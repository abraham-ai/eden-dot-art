import styled from 'styled-components'

const IndexStyles = styled.section`
  overflow: auto;
  background-color: white;
  flex: 1;
  overflow-x: hidden;

  ::-moz-selection {
    /* Code for Firefox */
    color: red;
    background: yellow;
  }

  ::selection {
    color: red;
    background: yellow;
  }
`

export default IndexStyles
