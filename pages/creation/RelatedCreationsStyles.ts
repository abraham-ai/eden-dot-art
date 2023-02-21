import styled from 'styled-components'

const RelatedCreationsStyles = styled.section`
  margin-top: 20px;
  z-index: 10;
  // min-width: 544px;
  max-width: 544px;
  padding: 0 20px;
  // margin-right: 10px;

  @media (max-width: 930px) {
    max-width: unset;
  }

  /*** CR-RELATED HEADER ***/
  .cr-related-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 930px) {
    .cr-related-header {
      flex-flow: unset;
    }
  }

  @media (max-width: 930px) {
    margin: 20px 20px 0 20px;
    padding: 0;
    // background: lime;
  }
`

export { RelatedCreationsStyles }
