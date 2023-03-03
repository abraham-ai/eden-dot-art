import styled from 'styled-components'

const CreationStyles = styled.article`
  padding: 0 0 20px 0;
  margin-top: 60px;
  // background: pink;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  /*** CREATION ***/
  .creation {
    display: flex;
    // background: blue;
  }
  @media (max-width: 1400px) {
    .creation {
      display: flex;
      flex-direction: column;
    }
  }
  /*** CR-POST ***/
  .cr-post {
    width: 100%;
    // flex-flow: unset;
    flex-direction: column;
  }
  @media (max-width: 930px) {
    .cr-post {
      min-width: unset;
      flex-flow: wrap;
    }
  }
  /*** CR-CARD ***/
  .cr-card {
    display: flex;
    justify-content: center;
    flex: 1 1 auto !important;
    // min-width: 100%;
    // min-width: 1200px;
    min-height: 198px;
    /* min-height: 450px; */
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    margin: 20px;
    max-height: 700px;
    /* border: 1px solid #dbdbdb; */
    // transition: 300ms;
    // background: turquoise;
  }
  // .cr-card:hover {
  //   transform: translateY(-4px);
  //   box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important;
  //   cursor: pointer;
  // }
  .cr-card .ant-card-body {
    padding: 0;
    display: flex;
  }
  /*** CR-MAIN LINK ***/
  .cr-main-link {
    width: 100%;
    height: 100%;
    position: absolute;
    background: yellow;
    z-index: 0;
    left: 0;
    top: 0;
  }
  .cr-main-row {
    display: flex;
  }
  /*** CR-IMG WRAPPER MAIN***/
  .cr-img-wrapper.main {
    /* height: 0; */
    // min-width: 100%;
    /* padding-bottom: 100%; */
    /* min-height: 240px; */
    position: relative;
    z-index: 70;
  }
  .cr-img-wrapper > span {
    display: block;
    top: 0;
    width: 100%;
    position: absolute;
    height: 100%;
  }
  /*** CR-IMG WRAPPER BACKGROUND ***/
  .cr-img-wrapper.background {
    display: flex;
    justify-content: center;
    position: absolute;
    height: 120%;
    width: 120%;
    min-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    filter: blur(1.5rem);
    z-index: 0;
    background: black;
  }
  .cr-img-wrapper.background img {
    width: 100%;
    opacity: 0.3;
    margin: 0;
    padding: 0;
  }
  /*** CR-IMAGE ***/
  .cr-image {
    z-index: 10;
    width: 100%;
    background: yellow;
    border: 4px solid black;
  }

  // .ant-image:hover {
  //   transition: ease-in-out;
  // }
  // .ant-image:hover {
  //   /* background-color: rgba(0, 0, 0, 0.03) !important; */
  //   background-color: #005effa8 !important;
  //   /* box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important; */
  // }
  // .ant-image-mask:hover {
  //   opacity: 0.25;
  // }
  .cr-status {
    display: flex;
    flex: 1;
  }
  /*** CR-MAIN ***/
  .cr-main {
    z-index: 10;
    width: 100%;
    padding: 0 0 0 20px;
    margin-right: 10px;
  }
  @media (max-width: 930px) {
    .cr-main {
      display: flex;
      flex: 1;
      flex-direction: column;
      width: 100%;
      min-width: unset;
      max-width: unset;
      margin: 0 20px;
      padding: 0;
    }
  }
  /*** CR-MAIN-HEADER ***/
  .cr-main-header {
    // background: lime;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1400px) {
    .cr-main-header {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  /*** CR-TEXT ***/
  .cr-text {
    font-size: 1.65em;
    text-align: start;
    line-height: 1.2em;
    padding: 24px 16px;
    min-height: 105px;
    font-weight: 600;
    color: #14133a;
  }
  /*** CR-INFO ***/
  .cr-info {
    /* padding: 10px; */
    flex: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  /** CR-CREATOR **/
  .cr-creator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4em;
    flex: 1;
  }
  @media (max-width: 930px) {
    .cr-creator {
      flex: 1;
      align-items: center;
      justify-content: flex-start;
    }
  }
  /*** CR-CREATOR PROFILE ***/
  .cr-creator-profile {
    margin: 0 10px 0 0;
    // background: red;
  }
  /*** CR-CREATOR-NAME WRAPPER ***/
  .cr-creator-name-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  /*** CR-CREATOR-NAME ***/
  .cr-creator-name {
    font-size: 1rem;
    font-weight: 600;
  }
  @media (max-width: 930px) {
    .cr-creator-name {
    }
  }
  /*** CR-BUTTONS ***/
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
  /*** CR-SOCIALS ***/
  .cr-socials {
    max-width: 40px;
    min-width: 40px;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex: 0;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    margin: 0 20px;
    z-index: 70;
  }
  .cr-socials .cr-social {
    text-align: center;
    align-items: center;
    margin-bottom: 20px;
  }
  /*** CR-SOCIAL BUTTON **/
  .cr-social .btn {
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  /*** CR-SOCIAL ICON **/
  .cr-social .icon {
    color: white;
    min-height: 32px;
    min-width: 32px;
    filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.4));
  }
  /*** CR-SOCIAL TEXT **/
  .cr-social .text {
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-shadow: 1px 1px 2px black;
  }
  /*** CR-PROPERTIES WRAPPER ***/
  .cr-properties-wrapper {
    margin-top: 10px;
  }
  @media (max-width: 930px) {
    .cr-properties-wrapper {
      display: flex;
      // background: orange;
      flex-direction: column;
      width: 100%;
    }
  }
  @media only screen and (max-width: 930px) {
    flex-direction: column;
  }
  /*** CR-PROPERTY ***/
  .cr-property {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    // background: cyan;
  }
  @media only screen and (max-width: 930px) {
    .cr-property {
      width: 100%;
    }
  }
  /*** CR-PROPERTY TYPE ***/
  .cr-property-type {
    display: flex;
    align-items: center;
  }
  .cr-property .icon {
    font-size: 1.2rem;
  }
  .cr-property .ant-typography {
    font-size: 1rem;
    margin-left: 5px;
  }
  /*** CR-PARENT ***/
  button.cr-parent.ant-btn-link.ant-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px 10px 10px 10px;
    // background: red;
  }
  .cr-parent .text {
    font-size: 1rem;
  }
  .cr-parent .icon {
    margin-right: 5px;
    font-size: 1rem;
  }
  /*** CR-PARENT CREATION ***/
  button.cr-parent.ant-btn-link.ant-btn img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }
  /*** CR-RELATED ***/
  .cr-related {
    // background: orange;
  }
  .cr-related h3 {
    margin: 0;
  }
  /*** CR-RELATED SEARCH MORE ***/
  .cr-search-more {
    // background: pink;
    display: flex;
    align-items: center;
  }
  .cr-search-more .search-icon {
    font-size: 1.2rem;
    transform: rotate(40deg);
    margin-left: 5px;
    // background: blue;
  }
  /*** CR-RELATED CREATIONS ***/
  .cr-related-creations {
    display: grid;
    grid: auto-flow / 200px 200px;
    grid-gap: 20px;
    flex: 1;
    margin-top: 20px;
    // flex-direction: column;
    // margin-top: 10px;
    // background: orange;
    overflow: hidden;
  }
  @media (max-width: 930px) {
    .cr-related-creations {
      grid: auto-flow / 1fr 1fr;
    }
  }
  /*** CR-RELATED CREATION ***/
  .cr-related-creation {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 0 15px 0;
    // background: yellow;
  }
  .cr-related-creation:hover {
    cursor: pointer;
  }
  /*** CR-RELATED CREATION IMG ***/
  .cr-related-creation-img {
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 200px;
  }
  @media (max-width: 930px) {
    .cr-related-creation-img {
      max-width: unset;
    }
  }
  .cr-related-creation-img img {
    border-radius: 5px;
    width: 100%;
    margin-right: 10px;
  }
  /*** CREATIONS MINI **/
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
  /*** CR-CARD MINI CR-BUTTON ***/
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

  @media only screen and (max-width: 560px) {
    padding-top: 10px;
    border: none;
    margin-bottom: 15px;
    flex: 1;
    max-width: unset;

    .cr-text {
      padding: 16px 16px 0 16px;
      font-size: 18px;
      font-weight: 600;
    }
    .cr-buttons {
      height: 54px;
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

export default CreationStyles
