import React, { useCallback, useEffect, useState } from 'react'

// REDUX
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { batch } from 'react-redux'
import { setAddress } from '@/redux/slices/addressSlice'
import { setToken } from '@/redux/slices/tokenSlice'
import {
  setIsWeb3AuthSuccess,
  setIsWeb3AuthSigning,
  setIsWeb3WalletConnected,
} from '@/redux/slices/authSlice'

// WEB3
import { useSignMessage, useAccount } from 'wagmi'

// HTTP
import axios from 'axios'

const serverUrl = process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY
// const serverUrl = 'https://app.dev.aws.abraham.fun'

// console.log('SERVER-URL')
// console.log({ serverUrl })

// AUTH
// import jwtDecode, { JwtPayload } from 'jwt-decode'

// MUI
import { Backdrop, Button, Box, Typography, Modal, styled } from '@mui/material'

export default function CreateSignInJWT({ isOpen, onClose }) {
  // retrieve current state of redux store
  const dispatch = useAppDispatch()

  const authToken = useAppSelector(state => state.token.value)
  // const appAddress = useAppSelector(state => state.address.value)
  const { address } = useAccount() //  isConnected
  const { isWeb3AuthSuccess, isWeb3AuthSigning } = useAppSelector(
    state => state.auth,
  ) //  isWeb3WalletConnected
  const token = useAppSelector(state => state.token.value)

  const [appMessage] = useState(
    `I am ${address} and I would like to create with Eden`,
  )

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: appMessage,
  })

  const signature = data

  const handleAuthJWT = useCallback(() => {
    async isClicked => {
      if (isClicked) {
        const { data } = await axios.post(`${serverUrl}/sign_in`, {
          signature,
          message: appMessage,
          address,
        })

        const authToken = data
        dispatch(setToken(authToken))
      }
    }
  }, [address, appMessage, signature, dispatch])

  // useEffect(() => {
  //   setIsClicked(true)
  //   handleAuthJWT(isClicked)
  // }, [data, isSuccess, isClicked, handleAuthJWT])

  function handleAuthJWTClick() {
    // console.log('HANDLE-AUTH-JWT-CLICK')
    // const isClicked = true
    dispatch(setIsWeb3AuthSigning(true))
    handleAuthJWT() // isClicked
    signMessage()
  }

  const BoxModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    maxHeight: '90%',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const ModalStyles = styled('section')(
    () => `
    padding: 20px;
    .ant-form-horizontal .ant-form-item-control {
      max-width: unset;
    }
    .ant-progress-circle .ant-progress-inner {
      margin-right: 18px;
    }
  `,
  )

  // DEBUG
  // console.log(`%c USE-AUTH-CONTEX: ${compContext}`, 'background: #222; color: #bada55');
  let localToken = ''

  if (typeof window !== 'undefined') {
    localToken = localStorage.getItem('token')
    // console.log({
    //   authToken,
    //   localToken,
    //   isWeb3AuthSigning,
    //   isWeb3AuthSuccess,
    //   isWeb3WalletConnected,
    //   address,
    // })
  }

  const logoutLocalStorage = () => {
    // console.log('logoutLocalStorage')
    localStorage.removeItem('token')
  }

  const logoutApp = useCallback(() => {
    logoutLocalStorage()
    // logoutOfWeb3Modal()
  }, [])

  const handleAuthToken = useCallback(
    async (signature, authToken) => {
      if (signature && authToken === '') {
        const { data } = await axios.post(`${serverUrl}/sign_in`, {
          signature,
          message: appMessage,
          address,
        })

        if (data) {
          set
        }
      }
    },
    [address, appMessage],
  )

  useEffect(() => {
    // console.log({ token })
    // console.log({ authToken })
    if (typeof signature !== undefined && !authToken) {
      handleAuthToken(signature, authToken)
    }

    typeof authToken === 'number' && typeof signature !== undefined
      ? dispatch(setToken(authToken))
      : null
  }, [signature, token, authToken, dispatch, handleAuthToken])

  const verifyToken = useCallback(
    (response, address) => {
      // console.log('🆔 🔍 Verify Token!!')
      const responseToken = response.data.token
      // console.log({ responseToken })
      // console.log({
      //   authToken,
      //   localToken,
      //   isWeb3AuthSigning,
      //   isWeb3AuthSuccess,
      //   isWeb3WalletConnected,
      //   address,
      // })
      // console.log(`tokens match ? ${responseToken === authToken}`)

      if (isWeb3AuthSigning && !isWeb3AuthSuccess) {
        if (responseToken === authToken) {
          batch(() => {
            dispatch(setIsWeb3AuthSuccess(true))
            dispatch(setIsWeb3AuthSigning(false))
          })
          if (isWeb3AuthSigning) {
            // && isWeb3AuthSuccess
            // console.log('Sign-In Success!')
            // sendSignSuccess()
          }
          return 'Auth Tokens match'
        } else if (authToken === '' && isWeb3AuthSigning === true) {
          // console.log('token empty, set new token!')
          localStorage.setItem('token', responseToken)
          batch(() => {
            dispatch(setIsWeb3AuthSigning(false))
            dispatch(setIsWeb3AuthSuccess(true))
            dispatch(setToken(responseToken))
            dispatch(setAddress(address))
          })
          // notify user of sign-in
          if (isWeb3AuthSigning) {
            // && isWeb3AuthSuccess
            // console.log('Sign-In Success!')
            // sendSignSuccess()
          }
          return 'token empty, set response token'
        }
      }
    },
    [dispatch, isWeb3AuthSigning, isWeb3AuthSuccess, authToken],
  )

  return (
    <ModalStyles key="modal-styles">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={BoxModalStyle}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Button disabled={isLoading} onClick={() => handleAuthJWTClick()}>
              <Typography variant="button">Sign message</Typography>
            </Button>
            {isSuccess && (
              <Typography variant="body1">Signature: {data}</Typography>
            )}
            {isError && (
              <Typography variant="body1">Error signing message</Typography>
            )}
            {isWeb3AuthSuccess && (
              <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
                Auth Token: {authToken}
              </Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </ModalStyles>
  )
}
