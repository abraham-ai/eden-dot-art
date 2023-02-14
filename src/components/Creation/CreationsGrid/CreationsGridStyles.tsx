// STYLES
import styled from 'styled-components'

const CreationsGridStyles = styled.section`
  width: 100vw;
  padding: 0 10px;
  .cr-grid-masonry-wrapper {
    width: 100%;
    min-height: 393px;
    margin-top: 20px;
  }
  .cr-grid-masonry {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .cr-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .cr-grid-masonry_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`

export default CreationsGridStyles
