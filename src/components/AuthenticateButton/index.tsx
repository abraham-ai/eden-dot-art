// , useEffect, useCallback

// STYLES
// import './modalStyles.css'

// MUI
// import {
// Backdrop,
// Box,
// Button,
// Modal,
// Typography,
// Select,
// SelectChangeEvent,
// TextField,
// styled,
// useTheme,
// styled,
// } from '@mui/material'

// REDUX
import { useAppSelector } from '@/hooks/hooks'
// useAppDispatch

// WALLET
// import { useAccount, useSigner } from 'wagmi'

// import {
//   setIsRunningTrue,
//   setIsRunningFalse,
//   setIsLoader,
//   setIsCreationRunningTrue,
// } from '../../../redux/slices/creationsSlice'

// UI
// import { message, notification, Form, Progress, Input, Space } from 'antd'
// const { TextArea } = Input

// COMPONENTS
import CreateUI from '@/components/CreateUI'
import CreateSignInJWT from '@/components/CreateSignInJWT'
// import AppLogo from '@/components/AppLogo'

// import {
//   SignInJWT,
//   Tokens,
//   SimpleBlockie,
//   UploadMediaBar,
//   Logo,
// } from '../../abraham'

// HOOKS
// import useWindowDimensions from '@/hooks/useWindowDimensions'

// ICONS
// import { HiChip } from 'react-icons/hi'
// import { IoMdResize } from 'react-icons/io'
// import AddIcon from '@mui/icons-material/Add'

// const CreateButtonStyles = styled('section')(
//   () => `
//   button.ant-btn-circle.ant-btn-lg {
//     font-size: 16px;
//     font-weight: 600;
//     min-width: 50px;
//     min-height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   button.ant-btn.ant-btn-round.ant-btn-lg {
//     font-size: 16px;
//     font-weight: 600;
//     min-width: 50px;
//     min-height: 50px;
//     display: flex;
//     align-items: center;
//   }
//   button.ant-btn > span {
//     font-size: 16px;
//     font-weight: 600;
//   }
//   #create-button-large .create-button-text {
//     padding-left: 10px;
//   }
//   .token-wrapper .ant-badge {
//     margin: 0 15px 0 0;
//   }
//   @media only screen and (max-width: 718px) {
//     /* order: 2;
//     margin: 0 8px; */
//   }
// `,
// )

// const ModalStyles = styled('section')(
//   () => `
//   padding: 20px;
//   .ant-form-horizontal .ant-form-item-control {
//     max-width: unset;
//   }
//   .ant-progress-circle .ant-progress-inner {
//     margin-right: 18px;
//   }
//   ::placeholder {
//     color: #536471 !important;
//     opacity: 1;
//   }

//   /* CREATE MODAL */
//   .create-modal .ant-modal-content {
//     width: 100%;
//     border-radius: 30px;
//     overflow: hidden;
//     padding: 40px 0 0 0;
//   }
//   #create-form {
//     width: 100%;
//     border: none;
//     padding: 0 0 0 20px;
//   }
//   .create-modal .form-wrapper {
//     display: flex;
//     flex-direction: row;
//     flex: 1;
//     width: 100%;
//   }
//   .create-modal .form-inner-wrapper {
//     display: flex;
//     flex-direction: column;
//     flex: 1;
//     width: 100%;
//   }
//   .create-modal button.ant-modal-close {
//     right: unset;
//     left: 0;
//   }
//   #create-form_prompt {
//     font-size: 1.5em;
//     border: none;
//     box-shadow: none;
//     width: 100%;
//     padding: 20px 0 0 0;
//   }

//   /* SELECTOR */
//   #create-form
//     .ant-select-single.ant-select-show-arrow
//     .ant-select-selection-placeholder {
//     color: rgb(24, 144, 255);
//     font-weight: 600;
//   }
//   #create-form .ant-select-selector {
//     border-radius: 30px;
//   }

//   /* FOOTER */
//   .create-modal .ant-modal-footer {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .create-modal.sign-in .ant-modal-footer {
//     justify-content: center;
//     align-items: center;
//   }
//   .create-modal .ant-modal-footer {
//     justify-content: flex-end;
//     flex: 1;
//   }
//   .create-modal .footer-wrapper {
//     display: flex;
//     align-items: center;
//     flex: 1;
//   }
//   .create-modal .footer-wrapper.sign-in {
//     justify-content: center;
//   }
//   .create-modal .footer-wrapper.create-button {
//     justify-content: flex-end;
//   }

//   /* BUTTONS */
//   .create-modal button.sign-in-button,
//   .create-modal button.create-button {
//     width: 100px;
//     height: 50px;
//     display: flex;
//     /* border-radius: 50% !important; */
//     margin: 0;
//     padding: 0;
//     align-items: center;
//     justify-content: center;
//     border-width: 1px;
//     font-weight: 600;
//   }
//   .create-modal button.create-button span {
//     font-weight: 600;
//   }

//   /* TEXT-AREA */
//   .create-modal .ant-form-item textarea.ant-input.create-text-area {
//     width: 100%;
//     border: none;
//     height: 150px;
//   }
//   .create-modal .ant-form-item-control {
//     width: 100%;
//     max-width: unset;
//   }

//   /* SIGN-IN WRAPPER */
//   .sign-in-wrapper {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 100%;
//   }
//   .sign-in-wrapper .header {
//     display: flex;
//     justify-content: center;
//   }
//   .sign-in-wrapper .header h3 {
//     font-size: 24px;
//     font-weight: 600;
//   }
//   .sign-in-wrapper .logo-wrapper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .sign-in-wrapper .logo-wrapper #logo {
//     width: unset;
//     height: 200px;
//   }
//   .sign-in-wrapper .message {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 30px 0;
//   }
//   .sign-in-wrapper .message p {
//     font-size: 18px;
//   }
//   .sign-in-wrapper .footer {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `,
// )

// const axios = require('axios')
// const serverUrl = window?.appConfig?.ABRAHAM_GATEWAY

export default function AuthenticateButton({ isOpen = true, onClose }) {
  const { isWeb3AuthSuccess } = useAppSelector(state => state.auth)

  return isWeb3AuthSuccess ? (
    <CreateUI isOpen={isOpen} onClose={onClose} />
  ) : (
    <CreateSignInJWT isOpen={isOpen} onClose={onClose} />
  )
}
