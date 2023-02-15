// STYLES
import styled from 'styled-components'

const CreationSocialStyles = styled.nav`
  display: flex;
  flex: 1;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    align-items: center;
    font-size: 1.5em;
  }
  li {
    list-style: none;
    display: flex;
    padding: 0 10px;
    align-items: center;
    font-size: 18px;
  }
  li a {
    color: #14133a;
  }
  li:first-child {
    padding: 0 20px 0 0;
    margin: 0;
  }
  .social-icon-count {
    font-size: 14px;
  }
  .cr-burn,
  .cr-praise,
  .cr-share {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 50%;
    max-width: 35px;
  }
  .cr-burn .social-icon,
  .cr-praise .social-icon,
  .cr-share .social-icon {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: none;
    max-width: 20px;
    max-height: 20px;
    min-height: 20px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
  }
  .cr-share .ant-typography {
    margin: 0 !important;
  }
  .cr-share .ant-typography-copy {
    display: flex !important;
    align-items: center;
    color: rgba(0, 0, 0, 0.85);
  }
  .cr-share .ant-typography-copy:hover {
    color: rgb(82, 196, 26);
  }
  .ant-tooltip-open.ant-typography-copy-success:focus {
    color: rgb(82, 196, 26);
  }
  .ant-typography-copy.ant-typography-copy-success {
    color: rgb(82, 196, 26);
  }
  .cr-share .social-icon {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: black !important;
  }
  .cr-burn,
  .cr-praise {
    /* margin-right: 6px; */
  }
  .cr-burn:focus,
  .cr-praise:focus {
    color: unset;
  }
  .cr-burn .social-icon:hover,
  .cr-praise .social-icon:hover,
  .cr-share .social-icon:hover {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: none;
    min-width: 30px;
    min-height: 30px;
  }
  .cr-burn.disabled .social-icon:hover,
  .cr-praise.disabled .social-icon:hover {
    cursor: not-allowed;
  }
  .cr-burn .social-icon:hover {
    background: #fececb;
    color: rgb(249, 4, 128);
  }
  .cr-burn.is-active .social-icon {
    color: rgb(249, 4, 128);
    border-color: rgb(249, 4, 128);
  }
  .cr-burn.is-active ~ .social-icon-count {
    color: rgb(249, 4, 128);
  }
  .cr-praise .social-icon:hover {
    background: #f0dbff;
  }
  .cr-praise.is-active .social-icon {
    color: rgb(121, 75, 196);
    border-color: rgb(121, 75, 196);
  }
  .cr-praise.is-active ~ .social-icon-count {
    color: rgb(121, 75, 196);
  }
  .cr-share:hover .social-icon {
    background: #d9fcc3;
  }
  .cr-share:focus {
  }
  .ant-btn.disabled:hover {
    color: unset;
    border-color: unset;
  }
  .cr-burn.disabled .social-icon:hover,
  .cr-praise.disabled .social-icon:hover {
    background: none;
    color: unset;
  }
  .social-buttons-wrapper {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 0 0 0 40px;
  }
  .single-button-wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 50px;
  }
  .single-button-wrapper.share {
    justify-content: flex-end;
    width: 40px;
  }
  .cr-burn svg,
  .cr-praise svg,
  .cr-share svg {
    min-width: 20px !important;
    min-height: 20px !important;
    max-height: 22px;
    max-width: 22px;
    transform: translate(1px);
  }
  .cr-praise svg {
    height: 20px;
  }
  @media only screen and (max-width: 718px) {
    .cr-burn,
    .cr-praise,
    .cr-share {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      border: none;
      height: 40px;
      width: 40px;
      max-width: 40px;
      max-height: 40px;
      border-radius: 0;
      font-size: 2em;
      overflow: hidden;
      text-align: center;
      border-radius: 50% !important;
      min-height: 35px;
      min-width: 35px;
    }
    .cr-burn .social-icon:hover,
    .cr-praise .social-icon:hover,
    .cr-share .social-icon:hover {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      border: none;
      max-width: 45px;
      max-height: 45px;
    }
    .cr-burn span,
    .cr-praise span,
    .cr-share span {
      padding: 0;
      font-size: 24px;
    }
    .social-buttons-wrapper > span {
      display: flex;
      flex: 2;
      justify-content: flex-end;
      padding-right: 16px;
    }
  }
`

export { CreationSocialStyles }
