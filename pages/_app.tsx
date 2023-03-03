import { useState, useEffect } from 'react'

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
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)
  const [isCreateUIModalOpen, setIsCreateUIModalOpen] = useState(false)
  const [isWeb3WalletConnected, setIsWeb3WalletConnected] = useState(false)
  const [isWeb3AuthSuccess, setIsWeb3AuthSuccess] = useState(false)
  const [authToken, setAuthToken] = useState('')
  const [userId, setUserId] = useState('')
  const [isLightTheme, setIsLightTheme] = useState(true)

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? (page => page)

  Router.events.on('routeChangeStart', nProgress.start)
  Router.events.on('routeChangeError', nProgress.done)
  Router.events.on('routeChangeComplete', nProgress.done)

  const contextValues = {
    authToken,
    setAuthToken,
    userId,
    setUserId,
    isWeb3AuthSuccess,
    setIsWeb3AuthSuccess,
    isCreateUIModalOpen,
    setIsCreateUIModalOpen,
    isCreationModalOpen,
    setIsCreationModalOpen,
    isSignInModalOpen,
    setIsSignInModalOpen,
    isWeb3WalletConnected,
    setIsWeb3WalletConnected,
    isLightTheme,
    setIsLightTheme,
  }

  useEffect(() => {
    if (
      authToken !== '' &&
      userId !== '' &&
      isWeb3AuthSuccess === false &&
      authToken.length === 175
    ) {
      setIsWeb3AuthSuccess(true)
    }
  }, [authToken, userId, isWeb3AuthSuccess])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Eden.Art | Compute, Scalablity, and Scaffolding for ML Model Creators
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      {/* <SidebarProvider> */}
      <AppContext.Provider value={contextValues}>
        <WalletProvider>
          {getLayout(<Component {...pageProps} />)}
        </WalletProvider>
      </AppContext.Provider>
      {/* </SidebarProvider> */}
    </CacheProvider>
  )
}

export default EdenApp
