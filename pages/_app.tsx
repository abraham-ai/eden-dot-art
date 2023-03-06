import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { useAccount } from 'wagmi'

// TYPES
import type { ReactElement, ReactNode } from 'react'

// NEXT
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ROUTER
import Router from 'next/router'
import nProgress from 'nprogress'

// CSS
import 'nprogress/nprogress.css'
import 'src/theme/base.css'
import 'src/components/Creation/CreationCard/CreationCardModal/CreationCardModal.css'

// EMOTION
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/createEmotionCache'

// NAV
import Head from 'next/head'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'
import { GeneratorState } from '@/interfaces/GeneratorState'

// PROVIDERS
import WalletProvider from '@/providers/WalletProvider'

const clientSideEmotionCache = createEmotionCache()

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface EdenAppProps extends AppProps {
  pageProps: Record<string, unknown>
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

function EdenApp(props: EdenAppProps) {
  const { isConnected: accountIsConnected } = useAccount()
  const [isConnected, setIsConnected] = useState(false)
  const [userId, setUserId] = useState(null)
  const [username, setUsername] = useState(null)
  const [userAddress, setUserAddress] = useState(null)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [lastLoadTime, setLastLoadTime] = useState(null)
  const [generators, setGenerators] = useState<Record<string, GeneratorState>>(
    {},
  )

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)
  const [isCreateUIModalOpen, setIsCreateUIModalOpen] = useState(false)

  const [isLightTheme, setIsLightTheme] = useState(true)

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? (page => page)

  Router.events.on('routeChangeStart', nProgress.start)
  Router.events.on('routeChangeError', nProgress.done)
  Router.events.on('routeChangeComplete', nProgress.done)

  const checkAuthToken = useCallback(async () => {
    const response = await axios.post('/api/user')
    if (response.data.token) {
      setUserId(response.data.userId)
      setUsername(response.data.username)
      setUserAddress(response.data.userAddress)
      setIsSignedIn(true)
    }
  }, [setIsSignedIn])

  useEffect(() => {
    if (accountIsConnected) {
      setIsConnected(true)
      checkAuthToken()
    }
  }, [accountIsConnected, checkAuthToken, setIsConnected])

  useEffect(() => {
    const navigationStart = performance.timeOrigin
    const currentTime = new Date(navigationStart)
    setLastLoadTime(currentTime)
  }, [])

  const contextValues = {
    generators,
    setGenerators,

    isConnected,
    setIsConnected,
    isSignedIn,
    setIsSignedIn,

    userId,
    setUserId,
    username,
    setUsername,
    userAddress,
    setUserAddress,

    lastLoadTime,
    setLastLoadTime,

    isCreateUIModalOpen,
    setIsCreateUIModalOpen,
    isCreationModalOpen,
    setIsCreationModalOpen,
    isSignInModalOpen,
    setIsSignInModalOpen,

    isLightTheme,
    setIsLightTheme,
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Eden</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <AppContext.Provider value={contextValues}>
        <WalletProvider>
          {getLayout(<Component {...pageProps} />)}
        </WalletProvider>
      </AppContext.Provider>
    </CacheProvider>
  )
}

export default EdenApp
