import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
import Head from 'next/head'
import Router from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'src/theme/base.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface EdenAppProps extends AppProps {
  pageProps: Record<string, unknown>
  Component: NextPageWithLayout
}

const inter = Inter({ subsets: ['latin'] })

const EdenApp: FC<EdenAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? (page => page)

  Router.events.on('routeChangeStart', nProgress.start)
  Router.events.on('routeChangeError', nProgress.done)
  Router.events.on('routeChangeComplete', nProgress.done)

  return (
    <>
      <Head>
        <title>{'Eden'}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <main className={inter.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  )
}

export default EdenApp
