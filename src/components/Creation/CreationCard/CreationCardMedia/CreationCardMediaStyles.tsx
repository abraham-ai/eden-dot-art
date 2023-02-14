import styled from 'styled-components'

const CreationCardMediaStyles = styled.section`
  .cr-card {
    display: flex;
    max-width: 350px;
  }
  .cr-card-inner {
    display: flex;
    flex-direction: column;
  }
  .cr-card-content {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }
  .cr-card-actions-wrapper {
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  .cr-card-media {
    width: 100px;
    max-height: 100px;
  }
`

export default CreationCardMediaStyles
