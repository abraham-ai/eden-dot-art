import styled from 'styled-components'

const CreationCardFeedStyles = styled.section`
  position: relative;
  width: 100%;
  background: blue;
  padding-right: 70px;

  #cr-card-wrapper {
    box-shadow: unset !important;
    background: unset;
    border-radius: 10px;
  }
  .cr-card {
    position: relative;
    background: lime;
    width: 100%;
  }
  .cr-card-creator-wrapper {
    display: flex;
    alignitems: center;
    justifycontent: space-between;
    background: blue;
  }
	.cr-card-creator {
		display: 'flex; 
		align-items: center; 
		margin-top: 10px;
	}
	.cr-blockies {
		border-radius: '50%;
		overflow: 'hidden;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
  #creation-card:hover {
    transform: unset;
    cursor: zoom-in;
  }
  #creation-card:hover .creation-content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  #creation-card:hover .creation-actions {
    position: absolute;
    bottom: 0;
    width: 100%;
    // background: #111633;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
  }
  #creation-card {
    // background: yellow;
  }
  .creation-content {
    position: absolute;
    height: 100%;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    display: none;
    margin: 0;
    padding: 0;
  }
  .creation-actions {
    display: none;
  }
  .creation-header {
    display: inline-block;
    margin: 8px;
    padding: 8px;
  }
  .creation-header > div {
    flex: 0;
    float: left;
  }
  .creation-header:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 25px;
    margin: 8px;
    padding: 8px;
    cursor: pointer;
    // backdrop-filter: blur(16px);
  }
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
`

export default CreationCardFeedStyles
