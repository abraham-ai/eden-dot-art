import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// REDUX
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/redux/store'

// ROUTER
import Router from 'next/router'
import nProgress from 'nprogress'

// CSS
import 'nprogress/nprogress.css'
import 'src/theme/base.css'

// STYLES
import ThemeProvider from 'src/theme/ThemeProvider'


// EMOTION
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/createEmotionCache'

// NAV
import Head from 'next/head'

// PROVIDERS
import WalletProvider from '../src/providers/WalletProvider'

const clientSideEmotionCache = createEmotionCache()

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface EdenAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

function EdenApp(props: EdenAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? (page => page)

  Router.events.on('routeChangeStart', nProgress.start)
  Router.events.on('routeChangeError', nProgress.done)
  Router.events.on('routeChangeComplete', nProgress.done)

  return (
      <CacheProvider value={emotionCache}>
        <ReduxProvider store={store}>
          <Head>
            <title>
              Eden.Art | Create & Share AI Art
            </title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
          </Head>
          <ThemeProvider>
            <WalletProvider>
              {getLayout(<Component {...pageProps} />)}
            </WalletProvider>
          </ThemeProvider>
        </ReduxProvider>
      </CacheProvider>
  )
}

export default EdenApp
