import styled from 'styled-components'

const CreationCardModalStyles = styled.section`
  .cr-modal-outer-wrapper {
    height: 100%;
    width: 100%;
  }
  /*** CLOSE-ICON-WRAPPER ***/
  .close-icon-wrapper {
    position: fixed;
    top: 10px;
    right: 10px;
    color: black;
  }
  /*** CR-MODAL WRAPPER ***/
  .cr-modal-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  /*** CR-MODAL INNER-WRAPPER ***/
  .cr-modal-inner-wrapper {
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  /*** CR-CARD WRAPPER ***/
  .cr-card-image {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
	/*** CR-CARD CONTENT-WRAPPER ***/
	.cr-card-content-wrapper {
		display: flex;
    align-items: flex-start;
	}
	/*** CR-CARD CONTENT-INNER ***/
	.cr-card-content-inner {
		display: flex; 
		flex-direction: column;
	}
	/*** CR-CARD POPOVER-WRAPPER ***/
	.cr-card-popover-wrapper {
		display: flex; 
		align-items: flex-start;
	}
  /*** CR-CARD ***/
  .cr-card {
    height: auto;
    position: relative;
    minheight: 512px;
    minwidth: 512px;
  }
	/*** CR CREATOR WRAPPER ***/
	.cr-creator-wrapper {
		display: flex; 
		align-items: center;
	}
	/*** CR BLOCKIE ***/
	.cr-blockie {
		border-radius: 50%;
		overflow: 'hidden;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
	/*** CR ADDRESS ***/
	.cr-address {
		font-weight: 600;
		font-size: .8rem;
		color: white;
	}
	/*** CR PROMPT ***/
	.cr-prompt {
		padding-top: 20px;
		color: '#111;
		font-weight: 600,
		font-size: 1.2rem;
	}
`

export default CreationCardModalStyles
