// STYLES
import styled from 'styled-components'

const CreationCardStyles = styled.section`
  // max-width: 345px;
  position: relative;
  box-shadow: unset !important;
  background: unset;
  border-radius: 10px;
  overflow: hidden;

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
    // background: yellow;
  }
  /*** CREATION-ACTIONS LEFT ***/
  .cr-action-left {
    position: absolute;
    z-index: 10;
    left: 0;
    flex-direction: row;
    flex: 1;
    padding: 10px;
    justifyContent: space-between;
  }
  /*** CR-SOCIAL PRAISE & BURN ***/
  .cr-social.praise, .cr-social.burn {
    margin: 10px;
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
    flex-direction: 'column;
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
    borderRadius: 15px;
    margin: 10px,
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
    flex-Direction: column;
  }
  /*** CR-PROMPT-COMMAND ***/
  .cr-prompt-command {
    fontWeight: bold;
    color: #8C7CF0;
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
  .close-icon-wrapper:hover {
    cursor: pointer;
    z-index: 50;
  }
`
export default CreationCardStyles
