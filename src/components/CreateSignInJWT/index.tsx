import React, { useCallback, useEffect, useState } from 'react'

// REDUX
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { batch } from 'react-redux'
import { setAddress } from '@/redux/slices/addressSlice'
import { setToken } from '@/redux/slices/tokenSlice'
import {
  setIsWeb3AuthSuccess,
  setIsWeb3AuthSigning,
} from '@/redux/slices/authSlice'

// WEB3
import { useSignMessage, useAccount } from 'wagmi'

// HTTP
import axios from 'axios'

const serverUrl = process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY
// const serverUrl = 'https://app.dev.aws.abraham.fun'

// AUTH
import jwtDecode from 'jwt-decode'
// , { JwtPayload }

// MUI
import { Backdrop, Button, Box, Typography, Modal, styled } from '@mui/material'

export default function CreateSignInJWT({ isOpen, onClose }) {
  // retrieve current state of redux store
  const dispatch = useAppDispatch()

  const authToken = useAppSelector(state => state.token.value)
  // const appAddress = useAppSelector(state => state.address.value)
  const { address } = useAccount() //  isConnected
  const { isWeb3AuthSuccess, isWeb3AuthSigning, isWeb3WalletConnected } =
    useAppSelector(state => state.auth)
  // const tokenAmount = useAppSelector(state => state.token.value)

  const [appMessage] = useState(
    `I am ${address} and I would like to create with Eden`,
  )

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: appMessage,
  })

  const signature = data

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

  // STYLES
  const BoxModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'white',
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

  const logoutLocalStorage = () => {
    // console.log('logoutLocalStorage')
    localStorage.removeItem('token')
  }

  const logoutApp = useCallback(() => {
    logoutLocalStorage()
    // logoutOfWeb3Modal()
  }, [])

  const checkError = useCallback(
    error => {
      if (
        (error.response && error.response.status === 401) ||
        (error.response && error.code === 4001)
      ) {
        // console.log('Error in isAuthed!')
        // console.log(error)
        logoutApp()
      }

      // else {
      //   console.log(error)
      // }
    },
    [logoutApp],
  )

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

  interface AuthTokenType {
    address: string
  }

  const handleAuthToken = useCallback(
    async (signature, authToken) => {
      if (signature && authToken === '') {
        const { data } = await axios.post(`${serverUrl}/sign_in`, {
          signature,
          message: appMessage,
          address,
        })

        try {
          // decode JWT token
          const decodedToken = jwtDecode<AuthTokenType>(data.authToken)
          // console.log(decodedToken?.address)
          // console.log({ address })

          if (decodedToken.address !== address) {
            throw new Error('Connected address and signer missmatch')
          }

          localStorage.setItem('token', data.authToken)

          if (data.authToken) {
            await axios
              .post(`${serverUrl}/is_auth`, {
                token: data.authToken,
                address: address,
              })
              .then(response => {
                // console.log(response)
                verifyToken(response, address)
              })
              .catch(error => checkError(error))
          }
        } catch (error) {
          // console.log(error.message)
        }
      }
    },
    [address, appMessage, checkError, verifyToken],
  )

  const handleAuthJWT = useCallback(
    async isClicked => {
      // console.log(
      //   `%c 🔒 HANDLE-AUTH-JWT`,
      //   'background: #222; color: #bada55',
      // )

      // check if user signed in browser previously
      const localToken = localStorage.getItem('token')

      // DEBUG
      // console.log({
      //   authToken,
      //   localToken,
      //   isClicked,
      //   isWeb3AuthSigning,
      //   isWeb3AuthSuccess,
      //   isWeb3WalletConnected,
      //   signature,
      //   address,
      // })

      if (
        isWeb3WalletConnected &&
        isWeb3AuthSigning &&
        signature &&
        address &&
        !isWeb3AuthSuccess
      ) {
        if (localToken !== null && authToken === '') {
          // console.log({ localToken })

          try {
            // console.log('🔒 try handle JWT sign-in')
            // decode JWT token
            const decodedToken = jwtDecode<AuthTokenType>(localToken)
            // console.log({ decodedToken })
            if (decodedToken.address !== address) {
              throw new Error('Connected address and signer missmatch')
            }

            // console.log(`USE-AUTH-JWT: ${address}`)

            await axios
              .post(`${serverUrl}/is_auth`, {
                token: localToken,
                address: address,
              })
              .then(response => {
                // console.log(response)
                verifyToken(response, address)
              })
              .catch(error => checkError(error))
          } catch (error) {
            // console.log(error.message)
            // sendError(error.message)
          }
        } else if (
          authToken === '' &&
          localToken === null &&
          isClicked === true
        ) {
          handleAuthToken(signature, authToken)
        }
      } else if (
        isWeb3WalletConnected &&
        isWeb3AuthSigning &&
        address &&
        !isWeb3AuthSuccess
      ) {
        if (localToken !== null && authToken === '') {
          // console.log({ localToken })

          try {
            // console.log('🔒 try handle JWT sign-in')
            // decode JWT token
            const decodedToken = jwtDecode<AuthTokenType>(localToken)
            // console.log({ decodedToken })
            if (decodedToken.address !== address) {
              throw new Error('Connected address and signer missmatch')
            }

            // console.log(`USE-AUTH-JWT: ${address}`)

            await axios
              .post(`${serverUrl}/is_auth`, {
                token: localToken,
                address: address,
              })
              .then(response => {
                // console.log(response)
                verifyToken(response, address)
              })
              .catch(error => checkError(error))
          } catch (error) {
            // console.log(error.message)
            // sendError(error.message)
          }
        }
      }
    },
    [
      address,
      authToken,
      checkError,
      isWeb3AuthSigning,
      isWeb3AuthSuccess,
      isWeb3WalletConnected,
      signature,
      handleAuthToken,
      verifyToken,
    ],
  )

  const handleAuthJWTClick = useCallback(() => {
    // console.log('HANDLE-AUTH-JWT-CLICK')
    const isClicked = true
    dispatch(setIsWeb3AuthSigning(true))
    handleAuthJWT(isClicked)
    signMessage()
  }, [dispatch, handleAuthJWT, signMessage])

  useEffect(() => {
    // console.log(
    //   `%c USE-AUTH-JWT USE-EFFECT`,
    //   'background: #222; color: #bada55',
    // )

    // console.log({
    //   localToken,
    //   authToken,
    //   isWeb3AuthSigning,
    //   isWeb3AuthSuccess,
    //   isWeb3WalletConnected,
    //   signature,
    //   address,
    // })

    if (isWeb3WalletConnected && typeof signature !== 'undefined') {
      if (isWeb3AuthSigning === true) {
        if (isWeb3AuthSuccess === false) {
          if (localToken === null && authToken === '') {
            // console.log(`%c 🔒 SIGN-IN`, 'background: #222; color: #bada55')
            handleAuthJWTClick()
            // dispatch(setIsWeb3AuthSigning(false));
          } else if (
            localToken !== null &&
            authToken === '' // && compContext === 'App'
          ) {
            // console.log(
            //   '🔒 isWeb3Auth True with localToken, handleAuthJWT',
            //   'background: #222; color: #bada55',
            // )
            // console.log(
            //   `%c 🔒 LOCAL-TOKEN: ${localToken}`,
            //   'background: #222; color: #bada55',
            // )
            const isClicked = false
            handleAuthJWT(isClicked)
          } else if (authToken === localToken) {
            // console.log('🔒 setIsSigning False')
            dispatch(setIsWeb3AuthSigning(false))
          }
        }
      } else if (isWeb3AuthSigning === false) {
        if (
          localToken === null &&
          authToken === '' &&
          isWeb3AuthSuccess === false // isWeb3AuthSuccess === undefined)
        ) {
          // console.log(
          //   `%c 🔒 PLEASE CLICK SIGN-IN`,
          //   'background: #222; color: #bada55',
          // )
        }
        if (localToken !== null && authToken === '') {
          // console.log(
          //   '🔒 setIsSigning true with localToken',
          //   'background: #222; color: #bada55',
          // )
          dispatch(setIsWeb3AuthSigning(true))
        }
      }
    } else {
      // console.log(`%c 🔒 CLICK SIGN-IN`, 'background: #222; color: #bada55')
      // console.log({ localToken, authToken })

      if (localToken !== null && authToken === '') {
        if (isWeb3AuthSigning === false) {
          // console.log(
          //   '🔒 setIsSigning true with localToken',
          //   'background: #222; color: #bada55',
          // )
          dispatch(setIsWeb3AuthSigning(true))
        } else if (isWeb3AuthSigning === true) {
          if (isWeb3AuthSuccess === false) {
            if (
              localToken !== null &&
              authToken === '' // && compContext === 'App'
            ) {
              // console.log(
              //   '🔒 isWeb3Auth True with localToken, handleAuthJWT',
              //   'background: #222; color: #bada55',
              // )
              // console.log(
              //   `%c 🔒 LOCAL-TOKEN: ${localToken}`,
              //   'background: #222; color: #bada55',
              // )
              const isClicked = false
              handleAuthJWT(isClicked)
            } else if (authToken === localToken) {
              // console.log('🔒 setIsSigning False')
              dispatch(setIsWeb3AuthSigning(false))
            }
          }
        }
      }
    }
  }, [
    isWeb3WalletConnected,
    isWeb3AuthSigning,
    address,
    authToken,
    dispatch,
    handleAuthJWT,
    handleAuthJWTClick,
    isWeb3AuthSuccess,
    localToken,
    signature,
  ])

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
              <Typography
                variant="body1"
                sx={{ wordBreak: 'break-word', color: 'black' }}
              >
                Auth Token: {authToken}
              </Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </ModalStyles>
  )
}
