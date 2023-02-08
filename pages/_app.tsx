import { useState } from 'react'
import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'


// ROUTER
import Router from 'next/router'
import nProgress from 'nprogress'

// CSS
import 'nprogress/nprogress.css'
import 'src/theme/base.css'

// EMOTION
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/createEmotionCache'

// NAV
import Head from 'next/head'
// import { SidebarProvider } from 'src/contexts/SidebarContext'

// PROVIDERS
import WalletProvider from '../src/providers/WalletProvider'
import AppContext from '@/components/AppContext/AppContext'

// AUTH
// import { WalletProvider } from '@/contexts/WalletContext'

const clientSideEmotionCache = createEmotionCache()

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface EdenAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

function EdenApp(props: EdenAppProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isWeb3WalletConnected, setIsWeb3WalletConnected] = useState(false)
  const [isWeb3AuthSuccess, setIsWeb3AuthSuccess] = useState(false)

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? (page => page)

  Router.events.on('routeChangeStart', nProgress.start)
  Router.events.on('routeChangeError', nProgress.done)
  Router.events.on('routeChangeComplete', nProgress.done)

  const contextValues = {
    isModalVisible, 
    setIsModalVisible, 
    isWeb3AuthSuccess,
    setIsWeb3AuthSuccess,
    isWeb3WalletConnected, 
    setIsWeb3WalletConnected
  }

  return (
      <CacheProvider value={emotionCache}>
          <Head>
            <title>
              Eden.Art | Compute, Scalablity, and Scaffolding for ML Model
              Creators
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
