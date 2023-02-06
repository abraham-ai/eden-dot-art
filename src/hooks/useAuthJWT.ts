import { useCallback, useEffect } from 'react'

// REDUX
import { useAppSelector, useAppDispatch } from '@/hooks/redux'

import { batch } from 'react-redux'
import { setToken } from '@/redux/slices/tokenSlice'
import { setAddress } from '@/redux/slices/addressSlice'
import {
  setIsWeb3AuthSuccess,
  setIsWeb3AuthSigning,
  setIsWeb3WalletConnected,
} from '../redux/slices/authSlice'

// WEB3
// useDisconnect, useEnsName
import { useSignMessage, useAccount } from 'wagmi'
// import { verifyMessage } from 'ethers/lib/utils'

// UTILS
// import { sendError, sendSignSuccess } from '../utils/notifications'

// COMPONENTS
// import Notification from '@/components/Notification'

// HTTP
import axios, { AxiosResponse } from 'axios'

const serverUrl = process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY
// if (typeof window !== 'undefined') {
//   serverUrl = window?.appConfig?.ABRAHAM_GATEWAY
// }

// process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY

// console.log('SERVER-URL')
// console.log({ serverUrl })

// AUTH
import jwtDecode, { JwtPayload } from 'jwt-decode'

export default function useAuthJWT(
  // web3Modal,
  // logoutOfWeb3Modal,
  useSigner,
) {
  // retrieve current state of redux store
  const authToken = useAppSelector(state => state.token.value)
  const appAddress = useAppSelector(state => state.address.value)
  const { isWeb3AuthSuccess, isWeb3AuthSigning, isWeb3WalletConnected } =
    useAppSelector(state => state.auth)

  // wagmi account wallet
  const { isConnected, address } = useAccount()
  // const { disconnect } = useDisconnect()
  // const { data: ensNameData } = useEnsName({ address })

  // console.log({ ensNameData, address })

  // wagmi hooks
  // data, error, isLoading,
  const { signMessage } = useSignMessage({
    // onSuccess(data, variables) {
    //   // Verify signature when sign message succeeds
    //   const address = verifyMessage(variables.message, data)
    //   recoveredAddress.current = address
    //   console.log(data, variables)
    // },

    message: 'Eden Wagmi Friends',
  })

  // console.log({ data })

  // updates redux store slices
  const dispatch = useAppDispatch()

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
    //   appAddress,
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

  const syncWalletToRedux = useCallback(() => {
    // console.log(`%c SYNC-WALLET-TO-REDUX`, 'background: #222; color: cyan')

    if (isConnected && address) {
      batch(() => {
        dispatch(setAddress(address))
        dispatch(setIsWeb3WalletConnected(true))
      })
    } else {
      dispatch(setIsWeb3WalletConnected(false))
    }
  }, [isConnected, address, dispatch])

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

  // function handleAuthJWT(isClicked) {
  const handleAuthJWT = useCallback(
    async isClicked => {
      // console.log('🔒 handle sign-in')
      // console.log(
      //   `%c USE-AUTH-CONTEX: ${compContext}`,
      //   'background: #222; color: #bada55',
      // )

      // check if user signed in browser previously
      if (typeof window !== 'undefined') {
        const localToken = localStorage.getItem('token')

        // DEBUG
        // console.log({
        //   authToken,
        //   localToken,
        //   isWeb3AuthSigning,
        //   isWeb3AuthSuccess,
        //   isWeb3WalletConnected,
        //   appAddress,
        //   useSigner,
        // })

        if (
          isWeb3WalletConnected &&
          isWeb3AuthSigning &&
          useSigner &&
          appAddress &&
          !isWeb3AuthSuccess
        ) {
          if (localToken !== null && authToken === '') {
            // console.log({ localToken })

            try {
              // console.log('🔒 try handle JWT sign-in')
              // decode JWT token
              const decodedToken = jwtDecode<JwtPayload>(localToken)
              // console.log({ decodedToken })

              // .address  !== appAddress
              if (!decodedToken) {
                throw new Error('Connected address and signer missmatch')
              }

              // console.log(`USE-AUTH-JWT: ${appAddress}`)

              await axios
                .post(`${serverUrl}/is_auth`, {
                  token: localToken,
                  address: appAddress,
                })
                .then((response: AxiosResponse) => {
                  // console.log({ address, token })

                  const { address, token } = response.data
                  verifyToken(address, token)
                })
                .catch(error => checkError(error))
            } catch (error) {
              // console.log(error)
              // return <Notification type={'error'} data={error.message} />
            }
          } else if (
            authToken === '' &&
            localToken === null &&
            isClicked === true
          ) {
            try {
              // console.log('🔒 try handle sign-in hello!')
              // sign message using wallet
              // const address = await useSigner.getAddress();
              const message = `I am ${appAddress} and I would like to create with Eden`

              // const signature = await useSigner.signMessage(message)
              const signature = signMessage({ message })

              // console.log({ signature })
              // send signature to gateway and get back JWT token
              const { data } = await axios.post(`${serverUrl}/sign_in`, {
                signature,
                message,
                address: appAddress,
              })

              // decode JWT token
              // const decodedToken = jwtDecode(data.authToken)
              // const decodedToken = jwtDecode<JwtPayload>(data.authToken)
              // if (decodedToken?.address !== appAddress) {
              //   throw new Error('Connected address and signer missmatch')
              // }

              const codedToken = data.authToken

              localStorage.setItem('authToken', codedToken)

              if (codedToken) {
                await axios
                  .post(`${serverUrl}/is_auth`, {
                    token: codedToken,
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
              // sendError(error.message)
            }
          }
        }
      }
    },
    [
      address,
      appAddress,
      checkError,
      authToken,
      useSigner,
      verifyToken,
      isWeb3AuthSuccess,
      isWeb3AuthSigning,
      isWeb3WalletConnected,
      signMessage,
    ],
  )

  const handleAuthJWTClick = useCallback(() => {
    // console.log('HANDLE-AUTH-JWT-CLICK')
    const isClicked = true
    dispatch(setIsWeb3AuthSigning(true))
    handleAuthJWT(isClicked)
  }, [dispatch, handleAuthJWT])

  useEffect(() => {
    // if (executedRef.current) {
    //   return;
    // }

    // console.log(
    //   `%c USE-AUTH-JWT USE-EFFECT`,
    //   'background: #222; color: #bada55',
    // )
    // console.log(`WEB3MODAL CACHED-PROVIDER: ${web3Modal.cachedProvider}`)
    // console.log({
    //   localToken,
    //   authToken,
    //   isWeb3AuthSigning,
    //   isWeb3AuthSuccess,
    //   isWeb3WalletConnected,
    //   useSigner,
    //   address,
    // })

    syncWalletToRedux()

    if (
      isWeb3WalletConnected &&
      // web3Modal.cachedProvider === 'injected' &&
      typeof useSigner !== 'undefined'
    ) {
      if (isWeb3AuthSigning === true) {
        if (isWeb3AuthSuccess === false) {
          if (localToken === null && authToken === '') {
            // console.log(`%c 🔒 SIGN-IN`, 'background: #222; color: #bada55')
            handleAuthJWTClick()
            // dispatch(setIsWeb3AuthSigning(false));
          } else if (
            localToken !== null &&
            authToken === ''
            // && compContext === 'App'
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
    }

    // executedRef.current = true;
  }, [
    isConnected,
    isWeb3WalletConnected,
    isWeb3AuthSigning,
    isWeb3AuthSuccess,
    dispatch,
    handleAuthJWT,
    handleAuthJWTClick,
    address,
    authToken,
    localToken,
    useSigner,
    syncWalletToRedux,
  ])
  // compContext
  // address
  // token,
  // isWeb3AuthSuccess,
  // , handleAuthJWT, compContext

  return {
    handleAuthJWTClick,
  }
}
