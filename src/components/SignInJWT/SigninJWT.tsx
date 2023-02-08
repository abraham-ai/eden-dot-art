import React, { useCallback, useState, forwardRef } from 'react'

// WEB3
import { useSignMessage, useAccount } from 'wagmi'

// HTTP
import axios from 'axios'

// SERVER
const serverUrl = process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY

// AUTH
import jwtDecode from 'jwt-decode'
// import jwt_decode, { JwtPayload } from 'jwt-decode'

// COMPONENTS
import AppLogo from '@/components/AppLogo/AppLogo'

// MUI
import { Button, Typography, Modal, Snackbar } from 'antd'

// STYLES
import styled from 'styled-components'

// ICONS
// import AddModeratorIcon
// import FingerprintIcon

// STYLES
const BoxModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  maxHeight: '90%',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ModalStyles = styled.section`
  padding: 20px;
  .ant-form-horizontal .ant-form-item-control {
    max-width: unset;
  }
  .ant-progress-circle .ant-progress-inner {
    margin-right: 18px;
  }
`

export default function SignInJWT() {
  // HOOKS
  const [isClicked, setIsClicked] = useState(false)
  const [localAuth, setLocalAuth] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const handleAuthOpen = () => setIsAuthOpen(true)
  const handleAuthClose = () => setIsAuthOpen(false)

  const { address, isConnected } = useAccount()

  // APP LOGOUT
  const logoutLocalStorage = () => localStorage.removeItem('token')
  const logoutApp = useCallback(() => logoutLocalStorage(), [])

  // JWT MESSAGE
  const [appMessage] = useState(
    `I am ${address} and I would like to create with Eden`,
  )

  // WAGMI HOOK
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: appMessage,
  })

  const signature = data

  let localToken = ''

  if (typeof window !== 'undefined') {
    localStorage.getItem('token') === null
      ? null
      : (localToken = localStorage.getItem('token'))
  }

  interface AuthTokenType {
    address: string
  }

  const verifyToken = useCallback(
    response => {
      const responseToken = response.data.token
      if (isWeb3AuthSigning && !isWeb3AuthSuccess) {
        if (responseToken === localToken) {
          // console.log('VERIFY-TOKEN: Auth Tokens match!')

          if (authToken === '') {
            context.setToken(responseToken)
          } else if (authToken === localToken) {
            context.setIsWeb3AuthSigning(false)
            context.setIsWeb3AuthSuccess(true)
            setIsClicked(false)
          }
        } else if (authToken === '' && localToken === null) {
          // console.log('token empty, set new token!')
          if (responseToken === null || responseToken === '') {
            localStorage.removeItem('token')
          }
          batch(() => {
            context.setIsWeb3AuthSigning(false)
            context.setToken(responseToken)
          })
          return 'token empty, set response token'
        }
      } else if (isWeb3AuthSigning && isWeb3AuthSuccess) {
        // console.log('Sign-In Success!')
      }
    },
    [isWeb3AuthSigning, isWeb3AuthSuccess, localToken, authToken],
  )

  function handleAuthJWTClick() {
    // console.log('HANDLE-AUTH-JWT-CLICK')
    setIsClicked(true)
    context.setIsWeb3AuthSigning(true)
    signMessage()
    // handleAuthJWT(isClicked)
  }

  const checkError = useCallback(
    error => {
      if (
        (error.response && error.response.status === 401) ||
        (error.response && error.code === 4001)
      ) {
        // console.log('Error in isAuthed!')
        // console.log(error)
        logoutApp()
      } else {
        // console.log(error)
      }
    },
    [logoutApp],
  )

  const handleLocalAuth = useCallback(async () => {
    try {
      // console.log('🔒 try handle JWT sign-in | LOCAL AUTH')
      // decode JWT token
      // console.log(`USE-AUTH-JWT: ${address}`)

      if (authToken !== '') {
        const decodedToken = jwtDecode<AuthTokenType>(authToken)
        // const decodedToken = jwt_decode<JwtPayload>(authToken || '') || null
        // console.log({ decodedToken })

        // console.log(`AUTH-TOKEN: ${authToken}`)

        if (decodedToken.address !== address && appAddress) {
          throw new Error('Connected address and signer missmatch')
        } else {
          await axios
            .post(`${serverUrl}/is_auth`, {
              token: authToken,
              address: address,
            })
            .then(response => {
              // console.log(response)
              // address
              verifyToken(response)
              setIsClicked(false)
            })
            .catch(error => checkError(error))
        }
      }
    } catch (error) {
      // sendError(error.message)
      // console.log(error.message)
      logoutApp()
    }
  }, [address, appAddress, authToken, logoutApp, checkError, verifyToken])

  const handleAuthJWT = useCallback(async () => {
    // console.log('🔒 handle sign-in')
    // console.log(`%c USE-AUTH-CONTEX: ${compContext}`, 'background: #222; color: #bada55');

    // check if user signed in browser previously
    const localToken = localStorage.getItem('token')

    if (
      isWeb3WalletConnected &&
      isWeb3AuthSigning &&
      address &&
      !isWeb3AuthSuccess
    ) {
      // console.log('HANDLE-AUTH-JWT: INSIDE FUNCTION')
      if (isClicked) {
        // console.log('HANDLE-AUTH-JWT: IS-CLICKED!')
        if (localAuth) {
          // console.log('HANDLE-AUTH-JWT: LOCAL-AUTH!')
          if (localToken !== null && localToken === authToken) {
            // console.log('HANDLE-AUTH-JWT: LOCAL EQUALS AUTH!')
            // console.log({ localToken, authToken })

            handleLocalAuth()
          } else if (localToken !== null && authToken === '') {
            context.setToken(localToken)
          } else if (localToken === null && authToken === '') {
            handleLocalAuth()
          }
        }
      } else if (!isClicked) {
        // console.log('HANDLE-AUTH-JWT: NOT IS-CLICKED')
      }
    }
  }, [address, isClicked, localAuth, handleLocalAuth])

  const handleAuthToken = useCallback(
    async (signature, authToken) => {
      if (signature !== '' && authToken === '') {
        const { data } = await axios.post(`${serverUrl}/sign_in`, {
          signature,
          message: appMessage,
          address,
        })

        // console.log({ data })
        const authToken = data.authToken
        context.setToken(authToken)
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', authToken)
        }
        // console.log({ authToken, address })
        verifyToken(authToken)
        // address
      }
    },
    [address, appMessage, verifyToken],
  )

  // NOTIFICATION
  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway' && event) {
      return
    }

    setSnackOpen(false)
  }

  const sendNotification = (type, data) => {
    return (
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        {data}
      </Snackbar>
    )
  }

  return (
    <>
      <Button
        id="auth-button"
        variant="contained"
        onClick={handleAuthOpen}
        size="medium"
        endIcon={<div>{'test'}</div>}
      >
        Authenticate
      </Button>
      <ModalStyles key="modal-styles">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={isAuthOpen}
          onClose={handleAuthClose}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div sx={{ paddingBottom: 30 }}>
                <AppLogo logo={'eden'} size={'large'} />
              </div>

              {!isWeb3AuthSuccess ? (
                <Typography variant={'h4'} sx={{ color: 'black' }}>
                  Sign-in to create with Eden Collage.
                </Typography>
              ) : (
                { handleAuthClose }
              )}

              <Button
                disabled={isLoading}
                variant={'contained'}
                onClick={() => handleAuthJWTClick()}
                sx={{ mt: 5, mb: 2 }}
              >
                <Typography variant="button">Sign message</Typography>
              </Button>

              {/* USER AUTH DATA */}
              <Box sx={{ maxWidth: '400px' }}>
                {isSuccess &&
                  sendNotification(
                    'success',
                    <>
                      Signature:
                      <div style={{ wordBreak: 'break-all' }}>{data}</div>
                    </>,
                  )}

                {isError &&
                  sendNotification(
                    'error',
                    <>
                      <Typography variant="body1">
                        Error signing message
                      </Typography>
                    </>,
                  )}

                {isWeb3AuthSuccess &&
                  sendNotification(
                    'info',
                    <>
                      <Typography
                        variant="body1"
                        sx={{
                          wordBreak: 'break-word',
                          color: 'black',
                          fontWeight: 600,
                        }}
                      >
                        Auth Token: {authToken}
                      </Typography>
                    </>,
                  )}
              </Box>
            </div>
          </div>
        </Modal>
      </ModalStyles>
    </>
  )
}
