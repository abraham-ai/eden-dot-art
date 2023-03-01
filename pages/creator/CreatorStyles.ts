import styled from 'styled-components'

const CreatorStyles = styled.div`
  padding: 0;
  z-index: 10;
  width: 100%;
  background: #fafafa;
  /*** BANNER ****/
  .creator-banner {
    max-height: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    width: 100%;
    z-index: 50;
    background: lime;
    display: flex;
    justify-content: center;
    align-items: center;
    background: light-gray;
  }
  /*** HEADER ***/
  .creator-banner img {
    width: 100%;
  }
  .creator-header {
    display: flex;
    align-items: flex-start;
    background-color: white;
  }
  .profile-name {
    font-weight: bold;
    margin-top: 0;
  }
  .profile-avatar-wrapper {
    border-radius: 50%;
    overflow: hidden;
    min-width: 120px;
    min-height: 120px;
    height: 120px;
    width: 120px;
    background: lime;
    border: 10px solid white;
    display: flex;
    justify-content: center;
  }
  /*** PROFILE ACTIONS ***/
  .profile-actions {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .follow-button.ant-btn-primary {
    background: #8c7cf0;
  }
  /*** CREATOR BODY ***/
  .creator-body {
    display: flex;
  }
  .creator-profile-info {
    min-width: 300px;
  }
  .creator-profile {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 75;
  }
  .creator-grid {
    display: block;
  }
  .creator-dashboard-wrapper {
    display: flex;
    justify-content: flex-start;
    background-color: white;
  }
  .creator-grid-wrapper {
    width: 100%;
  }
  @media (min-width: 40em) {
    .creator-grid {
      display: flex;
      padding: 24px;
      margin-top: 0;
    }
  }
  @media (min-width: 60em) {
    .creator-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 80em) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    width: 100%;
    max-width: 2200px;
    .ant-col.ant-col-8 {
      overflow: hidden;
      min-height: 100%;
      display: flex;
      flex: 1;
      /* padding: 0 16px !important; */
      padding: 0 !important;
      max-width: unset !important;
    }
  }
`

export default CreatorStyles
