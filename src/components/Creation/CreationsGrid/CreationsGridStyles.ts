import styled from 'styled-components'

export const CreationsGridStyles = styled.section`
  width: auto;
  /* background: lime; */
  padding: 0 10px;

  .cr-grid-wrapper {
    background: lime;
  }
  .cr-grid-masonry-wrapper {
    width: 100%;
    min-height: 393px;
    margin-top: 20px;
    background: lime;
  }
  .cr-grid-masonry {
    display: flex;
    gap: 10px;
    /* margin-left: -30px; gutter size offset */
    width: 100%;
  }
  .cr-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
  .cr-grid-masonry_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`
