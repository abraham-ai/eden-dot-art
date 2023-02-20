// STYLES
import styled from 'styled-components'

const CreationCardStyles = styled.section`
  // max-width: 345px;
  position: relative;
  box-shadow: unset !important;
  background: unset;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;

  /*** CREATION-CARD ***/
  #creation-card {
  }
  #creation-card:hover {
    transform: unset;
    cursor: pointer;
    // cursor: zoom-in;
  }
  #creation-card:hover .creation-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    // padding-right: 50px;
    width: 100%;
    // background: yellow;
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
    height: 100%;
  }
  .cr-link {
    height: 100%;
  }
  .cr-image-wrapper {
    position: relative;
    height: 100%;
  }
  .cr-image-wrapper img {
    width: 100%;
    height: 100%;
  }
  /*** CREATION-ACTIONS LEFT ***/
  .cr-action-left {
    position: absolute;
    z-index: 10;
    left: 0;
    flex-direction: row;
    flex: 1;
    padding: 10px;
    justify-content: space-between;
  }
  /*** CR-SOCIAL PRAISE & BURN ***/
  .cr-social.praise,
  .cr-social.burn {
    color: grey;
    filter: grayscale(100%);
    margin: 10px;
  }
  .cr-social.praise:hover,
  .cr-social.burn:hover {
    filter: unset;
  }
  /*** CR-SOCIAL REMIX ***/
  .cr-social.remix {
    margin-bottom: 10px;
  }
  /*** CR-SOCIAL BOOKMARK ***/
  .cr-social.bookmark {
    margin-bottom: 10px;
  }
  /*** CREATION-ACTIONS RIGHT ***/
  .cr-action-right {
    display: flex;
    width: auto;
    flex-direction: column;
    margin: 10px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 20;
  }
  /*** CREATION CONTENT ***/
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
  /*** CR-CONTENT MAIN ***/
  .cr-content-main-wrapper {
    border-radius: 15px;
    margin: 10px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
    padding: 20px;
    z-index: 10;
    position: absolute;
    bottom: 0;
  }
  /*** CR-CONTENT MAIN ***/
  .cr-content-main {
    overflow-y: auto;
    max-height: 150px;
    display: flex;
    flex-direction: column;
  }
  /*** CR DATE ***/
  .cr-date {
    color: white;
  }
  /*** CR-PROMPT-COMMAND ***/
  .cr-prompt-command {
    font-weight: bold;
    color: #8c7cf0;
    font-family: courier;
  }
  /*** CR-PROMPT ***/
  .cr-prompt {
    color: white;
  }
  /*** CR-SOCIAL WRAPPER ***/
  .cr-social-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  /*** CREATION ACTIONS ***/
  .creation-actions {
    display: none;
  }
  /*** CREATION HEADER ***/
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
  /*** CR METADATA ***/
  .cr-metadata {
    display: flex;
    flex-direction: column;
    display: none;
  }
  .close-icon-wrapper:hover {
    cursor: pointer;
    z-index: 50;
  }
`

export { CreationCardStyles }
