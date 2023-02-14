import styled from 'styled-components'

const CreationCardVideoStyles = styled.article`
  /*** CR-CARD ***/
  .cr-card {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto !important;
    min-width: 100%;
    min-height: 198px;
    position: relative;
    transition: 300ms;
    border-radius: 16px;
    overflow: hidden;
  }
  .cr-card .ant-card-body {
    padding: 0;
  }
  /*** CR-CARD HOVER ***/
  .cr-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important;
    cursor: pointer;
  }
  /*** CR VIDEO ***/
  .cr-video {
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
  .cr-video video {
    width: 100%;
    height: 100%;
  }
  /*** CR ICONS ***/
  .cr-icon {
    fontsize: 1.5rem;
  }

  .cr-main-link {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
  }
  .ant-image-preview-operations > li:nth-child(4) {
    display: none !important;
  }
  .ant-image-preview-operations > li:nth-child(5) {
    display: none !important;
  }
  .cr-main-row {
    display: flex;
  }
  .cr-img-wrapper {
    /* height: 0; */
    min-width: 100%;
    height: 256px;
    /* padding-bottom: 100%; */
    /* min-height: 240px; */
    position: relative;
  }
  .cr-img-wrapper > span {
    display: block;
    top: 0;
    width: 100%;
    position: absolute;
    height: 100%;
  }
  .cr-img-wrapper.hover .overlay-wrapper {
    /* background: #0000002d; */
    background-color: #00112d6b !important;
    /* #005effa8 */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .cr-img-wrapper .overlay-wrapper {
    position: absolute;
    top: 0;
    z-index: 90;
    display: none;
  }
  .overlay-buttons {
    display: none;
    flex: 0;
    justify-content: flex-end;
    align-items: center;
    padding: 15px;
    position: absolute;
    bottom: 0;
    z-index: 95;
    width: 100%;
  }
  .cr-img-wrapper.hover .overlay-buttons {
    display: flex;
  }
  .overlay-buttons .ant-btn.children {
    margin: 0 10px 0 0;
  }
  .overlay-buttons .buynow,
  .overlay-buttons .recreate {
  }
  .ant-image {
    z-index: 10;
    width: 100%;
  }
  .ant-image:hover {
    transition: ease-in-out;
  }
  .ant-image:hover {
    /* background-color: rgba(0, 0, 0, 0.03) !important; */
    background-color: #005effa8 !important;
    /* box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important; */
  }
  .ant-image-mask:hover {
    opacity: 0.25;
  }
  .cr-status {
    display: flex;
    flex: 1;
  }
  .cr-text {
    font-size: 1.65em;
    text-align: start;
    line-height: 1.2em;
    padding: 24px 16px;
    min-height: 105px;
    font-weight: 600;
    color: #14133a;
  }
  .cr-info {
    /* padding: 10px; */
    flex: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  .cr-creator {
    font-size: 1.4em;
    display: flex;
    flex: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .cr-img-wrapper .overlay-wrapper .cr-status .cr-text .ant-typography {
    color: white !important;
    font-size: 18px;
    line-height: 1;
  }
  .cr-buttons {
    display: flex;
    flex: 1;
    /* padding-bottom: 25px; */
    font-size: 1.2em;
  }
  .cr-card.regular .cr-buttons > div {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
  .cr-stats {
    display: flex;
  }
  .cr-icon {
    display: flex;
    align-items: flex-start;
    font-size: 2em;
  }
  .cr-eth-url {
    font-size: 0.8em;
  }
  .cr-separator {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
  .cr-time-ago {
    display: flex;
    flex: 0;
    min-width: 50px;
    color: white;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    padding: 15px 15px 0 15px;
  }
  .ant-skeleton-element {
    display: inline-block;
    min-width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
  }
  .ant-skeleton-image {
    width: 100%;
    height: 100%;
    /* animation: skeleton-loading 1s linear infinite alternate; */
  }
  .social-buttons-wrapper {
    display: flex;
    flex: 0;
    padding-left: 25px;
    justify-content: flex-end;
  }
  #creations.mini {
    grid-template-columns: repeat(7, 1fr);
  }
  .cr-card.mini {
    max-width: 150px;
    min-height: 200px;
    min-width: unset;
  }
  #creations.mini .cr-buttons {
    flex-direction: column;
  }
  #creations.mini .cr-buttons > div {
    display: flex;
    flex-direction: column;
  }
  #creations.mini .cr-card.mini .cr-text {
    font-size: 14px;
    min-height: 95px;
    line-height: 1em;
  }
  #creations.mini .cr-eth-url > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  #creations.mini .cr-eth-url .ant-typography {
    padding: 8px 0 0 0;
  }
  .current-stat {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 0 0 10px;
  }
  .social-icon {
    display: flex;
    align-items: center;
  }
  .creation-current-stat .count {
    font-weight: 600;
  }
  .creation-current-stat .social-icon.praise svg {
    color: rgb(121, 75, 196);
    border-color: rgb(121, 75, 196);
  }
  .creation-current-stat .social-icon.burn svg {
    color: rgb(249, 4, 128);
    border-color: rgb(249, 4, 128);
  }
  /*** CR REACT-PLAYER WRAPPER ***/
  .cr-react-player-wrapper {
    position: relative;
  }
  /*** CR-PROMPT WRAPPER ***/
  .cr-prompt-wrapper {
    border-radius: 15px;
    margin: 10px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
  }
  /*** CR-PROMPT INNER-WRAPPER ***/
  .cr-prompt-inner-wrapper {
    overflow-y: auto;
    max-height: 150px;
  }
  /*** CR-PROMPT ***/
  .cr-prompt {
    padding: 20px;
    color: white;
  }
  /*** CR-SHARE ***/
  .cr-share {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
    border-radius: 50%;
    width: auto;
    margin-right: 10px;
  }
  /*** CR-ACTIONS ***/
  .cr-actions-inner {
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
    border-radius: 25px;
    width: auto;
    padding: 0;
    margin-right: 10px;
  }
  /*** CR-CARD ACTIONS WRAPPER ***/
  .cr-action-buttons {
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
    border-radius: 25px;
    width: auto;
  }
  @media only screen and (max-width: 560px) {
    /* border-bottom: 1px solid #eff3f4; */
    /* background: white; */
    padding-top: 10px;
    border: none;
    margin-bottom: 15px;
    flex: 1;
    max-width: unset;
    :hover {
      transform: unset;
      box-shadow: unset !important;
      cursor: pointer;
    }
    .cr-text {
      padding: 16px 16px 0 16px;
      font-size: 18px;
      font-weight: 600;
    }
    .cr-buttons {
      height: 54px;
      /* background: yellow; */
    }
    .social-buttons-wrapper {
      height: 54px;
      align-items: center;
      justify-content: flex-start;
      padding-left: 16px;
    }
    .social-buttons-wrapper > span {
      display: flex;
      flex: 2;
      justify-content: flex-end;
      padding-right: 16px;
    }
  }
`

export default CreationCardVideoStyles
