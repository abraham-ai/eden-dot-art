import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// APOLLO
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

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

// networkError
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) => {
//       console.log(message, locations, path)
//       // alert(`Graphql error ${message} ${locations} ${path}`)
//     })
//   }
// })

const errorLink = onError(() => null)

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://graphql.stg.aws.abraham.fun/' }),
])

// https://minio.aws.abraham.fun/creations-stg

const apiUrl = 'https://graphql.stg.aws.abraham.fun/'

// || 'http://localhost:3000/'

const client = new ApolloClient({
  uri: apiUrl, // change to YOUR own production server
  cache: new InMemoryCache(),
  name: 'web',
  version: '1.0',
  link: link,
})

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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default EdenApp
