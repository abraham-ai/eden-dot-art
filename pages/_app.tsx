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

// REDUX
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/redux/store'

// ROUTER
import Router from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

// STYLES
// import { colors, createTheme } from '@mui/material'
import ThemeProvider from 'src/theme/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/createEmotionCache'

// NAV
import Head from 'next/head'
import { SidebarProvider } from 'src/contexts/SidebarContext'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

// PROVIDERS
import WalletProvider from '../src/providers/WalletProvider'

// AUTH
// import { WalletProvider } from '@/contexts/WalletContext'

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: React.CSSProperties['color']
//     }
//   }

//   interface Palette {
//     neutral: Palette['primary']
//   }
//   interface PaletteOptions {
//     neutral: PaletteOptions['primary']
//   }

//   interface PaletteColor {
//     darker?: string
//   }
//   interface SimplePaletteColorOptions {
//     darker?: string
//   }
//   interface ThemeOptions {
//     status: {
//       danger: React.CSSProperties['color']
//     }
//   }
// }

// const theme = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     primary: {
//       main: '#0971f1',
//       darker: '#053e85',
//     },
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// })

// theme = createTheme(theme, {
//   palette: {
//     type: 'light',
//   },
// })

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: 'white',
//     },
//     secondary: {
//       main: colors.orange[500],
//     }
//     neutral: {
//       main: colors.grey[500],
//       darker: colors.grey[700]
//     }
//   },
// })

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

const GQL_PRD_URL = 'https://graphql.prd.aws.abraham.fun/'

const link = from([errorLink, new HttpLink({ uri: GQL_PRD_URL })])

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
        <ReduxProvider store={store}>
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
        </ReduxProvider>
      </CacheProvider>
    </ApolloProvider>
  )
}

export default EdenApp
