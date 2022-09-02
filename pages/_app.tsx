import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ROUTER
import Router from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

// STYLES
import ThemeProvider from 'src/theme/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/createEmotionCache'

// NAV
import Head from 'next/head'
import { SidebarProvider } from 'src/contexts/SidebarContext'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

// AUTH
import { WalletProvider } from '@/contexts/WalletContext'

const clientSideEmotionCache = createEmotionCache()

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface TokyoAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

function TokyoApp(props: TokyoAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? (page => page)

  Router.events.on('routeChangeStart', nProgress.start)
  Router.events.on('routeChangeError', nProgress.done)
  Router.events.on('routeChangeComplete', nProgress.done)

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
      <SidebarProvider>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <WalletProvider>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </WalletProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </SidebarProvider>
    </CacheProvider>
  )
}

export default TokyoApp
