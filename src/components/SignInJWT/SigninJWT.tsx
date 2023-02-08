import React, { useCallback, useState, forwardRef } from 'react'

// WEB3
import { useSignMessage, useAccount } from 'wagmi'

// HTTP
import axios from 'axios'

// SERVER
const serverUrl = process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY
// const serverUrl = 'https://app.dev.aws.abraham.fun'
// console.log('SERVER-URL')
// console.log({ serverUrl })

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
// import AddModeratorIcon from '@mui/icons-material/AddModerator'
import FingerprintIcon from '@mui/icons-material/Fingerprint'

// STYLES
const BoxModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '90%',
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

// MUI TYPE
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

// export interface Snackbar extends SnackbarOrigin {
//   open: boolean
// }

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

  // console.log({ address })
  // console.log({ appAddress })
  // console.log({ appMessage })

  // WAGMI HOOK
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: appMessage,
  })

  const signature = data

  let localToken = ''

  if (typeof window !== 'undefined') {
    // console.log(`IS TOKEN NULL: ${localStorage.getItem('token') === null}`)
    // console.log(`LOCAL STORAGE TOKEN: ${localStorage.getItem('token')}`)
    // console.log(`LOCAL TOKEN: ${localToken}`)
    localStorage.getItem('token') === null
      ? null
      : (localToken = localStorage.getItem('token'))

    // DEBUG
    // console.log({
    //   authToken,
    //   localToken,
    //   isClicked,
    //   localAuth,
    //   isWeb3AuthSigning,
    //   isWeb3AuthSuccess,
    //   isWeb3WalletConnected,
    //   address,
    //   appAddress,
    // })
  }

  interface AuthTokenType {
    address: string
  }

  const verifyToken = useCallback(
    response => {
      // address
      // console.log('🆔 🔍 Verify Token!!')
      // console.log(response)
      const responseToken = response.data.token

      // console.log({ responseToken })
      // console.log({
      //   authToken,
      //   responseToken,
      //   localToken,
      //   isClicked,
      //   localAuth,
      //   isWeb3AuthSigning,
      //   isWeb3AuthSuccess,
      //   isWeb3WalletConnected,
      //   address,
      // })
      // console.log(`tokens match ? ${responseToken === localToken}`)

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
    // try {
    //   console.log('🔒 try handle Local Auth!')

    //   if (authToken) {
    //     await axios
    //       .post(`${serverUrl}/is_auth`, {
    //         token: authToken,
    //         address: address,
    //       })
    //       .then(response => {
    //         console.log(response)
    //         verifyToken(response, address)
    //       })
    //       .catch(error => checkError(error))
    //   }
    // } catch (error) {
    //   // sendError(error.message)
    //   console.log(error)
    //   logoutApp()
    // }

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

    // DEBUG
    // console.log({
    //   authToken,
    //   localToken,
    //   isClicked,
    //   localAuth,
    //   isWeb3AuthSigning,
    //   isWeb3AuthSuccess,
    //   isWeb3WalletConnected,
    //   address,
    // })

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

            // try {
            //   console.log('🔒 try handle JWT sign-in')
            //   // decode JWT token
            //   const decodedToken = jwt_decode<JwtPayload>(localToken || '') || null
            //   console.log({ decodedToken })

            //   // if (decodedToken.address !== address) {
            //   //   throw new Error('Connected address and signer missmatch')
            //   // }

            //   console.log(`USE-AUTH-JWT: ${address}`)

            //   await axios
            //     .post(`${serverUrl}/is_auth`, {
            //       token: localToken,
            //       address: address,
            //     })
            //     .then(response => {
            //       console.log(response)
            //       verifyToken(response, address)
            //       setIsClicked(false)
            //     })
            //     .catch(error => checkError(error))
            // } catch (error) {
            //   // sendError(error.message)
            //   console.log(error.message)
            //   logoutLocalStorage()
            // }
          } else if (localToken !== null && authToken === '') {
            // console.log(
            //   'HANDLE-AUTH-JWT: LOCAL-TOKEN NOT EMPTY, AUTH TOKEN EMPTY',
            // )
            context.setToken(localToken)
          } else if (localToken === null && authToken === '') {
            // console.log('HANDLE-AUTH-JWT: LOCAL-TOKEN EMPTY, AUTH-TOKEN EMPTY')
            handleLocalAuth()
          }
        }
      } else if (!isClicked) {
        // console.log('HANDLE-AUTH-JWT: NOT IS-CLICKED')
      }
    }
  }, [
    address,
    // checkError,
    isClicked,
    localAuth,
    handleLocalAuth,
    // verifyToken,
  ])

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
    // return notification[type]({
    //   ...data,
    //   placement: 'bottomRight',
    // })
    return (
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity={type}
          sx={{ width: '100%' }}
        >
          {data}
        </Alert>
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
        endIcon={<FingerprintIcon fontSize={'large'} />}
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
                alignItems: 'center',
              }}
            >
              <Box sx={{ pb: 3 }}>
                <AppLogo logo={'eden'} size={'large'} />
              </Box>

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
            </Box>
          </Box>
        </Modal>
      </ModalStyles>
    </>
  )
}
