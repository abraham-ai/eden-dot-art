import { useMemo, useState } from 'react'
// useEffect,
import type { ReactElement } from 'react'

// GQL
import { useQuery } from '@apollo/client'
import QueryResult from '@/components/QueryResult'

// NEXT
import Head from 'next/head'

// NAV
// import Footer from '@/components/Footer'
import BaseLayout from 'src/layouts/BaseLayout'

// UI
import { Box, Container, styled } from '@mui/material'

// COMPONENTS
import CreationCardMinimal from '@/components/CreationCardMinimal'
import Masonry from '@mui/lab/Masonry'

// CONSTS
// import { GET_CREATIONS } from '@/const/get-creations'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions'

// GQL Creations query to retreive all Creations //
import { GET_CREATIONS as GQL_GET_CREATIONS } from '@/graphql/queries'

export default function CreationsPage() {
  const [breakpointCols, setBreakpointCols] = useState(3)
  const { loading, error, data, fetchMore } = useQuery(GQL_GET_CREATIONS, {
    variables: {
      offset: 0,
      limit: 16,
    },
  })

  const { width } = useWindowDimensions()

  // useEffect(() => {
  //   console.log({ data })
  // }, [data])

  const deviceWidthMobile = 640
  const deviceWidthTablet = 840
  const deviceWidthDesktop = 1150
  const deviceWidthDesktopXL = 1300
  const deviceWidthDesktopXXL = 1400

  // console.log({ width })

  // const getBreakpointCols =
  useMemo(() => {
    // console.log('USE-MEMO BREAKPOINTS!!!!')
    // console.log(width)
    // console.log(width <= 960)

    if (width <= deviceWidthMobile) {
      // console.log('USE-MEMO BREAKPOINTS MOBILE!!!!')
      setBreakpointCols(1)
      return 1
    } else if (width >= deviceWidthMobile && width <= deviceWidthTablet) {
      // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
      setBreakpointCols(2)
      return 2
    } else if (width >= deviceWidthTablet && width <= deviceWidthDesktop) {
      // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
      setBreakpointCols(3)
      return 2
    } else if (width >= deviceWidthDesktop && width < deviceWidthDesktopXL) {
      // console.log('USE-MEMO BREAKPOINTS DESKTOP!!!!')
      setBreakpointCols(4)
      return 4
    } else if (width >= deviceWidthDesktopXL && width < deviceWidthDesktopXXL) {
      setBreakpointCols(4)
      return 6
    } else if (width >= deviceWidthDesktopXXL) {
      setBreakpointCols(4)
      return 7
    } else {
      // console.log('USE MEMO DEFAULT!!!')
    }
  }, [width])

  // console.log(breakpointCols)
  // console.log(getBreakpointCols)

  const onLoadMore = () =>
    fetchMore({
      variables: {
        offset: 10,
        limit: 10, //data.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return {
          creationsForHome: [
            ...prev.creationsForHome,
            ...fetchMoreResult.creationsForHome,
          ],
        }
      },
    })

  // console.log(data)

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <Container maxWidth="xl">
        {/* {isConnected ? (
          <>
            <Typography variant={'h3'}>
              You are connected with you wallet!
            </Typography>
            <Typography variant={'body1'}>{address}</Typography>
          </>
        ) : (
          <Button variant={'contained'}>
            <p>Please connect your Wallet</p>
          </Button>
        )} */}

        <Box sx={{ width: '100%', minHeight: 393, mt: 20 }}>
          <Masonry columns={breakpointCols} spacing={2}>
            <QueryResult error={error} loading={loading} data={data}>
              {data?.creationsForHome?.map((creation, index) => (
                <CreationCardMinimal
                  key={`${creation.id}_${index}`}
                  creation={creation}
                />
              ))}
            </QueryResult>
          </Masonry>
          <a href="#" onClick={onLoadMore} style={{ color: 'black' }}>
            Load More
          </a>
        </Box>
      </Container>

      {/* <Container maxWidth="xl">
          {isConnected ? (
          <>
            <Typography variant={'h3'}>
              You are connected with you wallet!
            </Typography>
            <Typography variant={'body1'}>{address}</Typography>
          </>
        ) : (
          <Button variant={'contained'}>
            <p>Please connect your Wallet</p>
          </Button>
        )}

          <Box sx={{ width: '100%', minHeight: 393, mt: 20 }}>
            <Masonry columns={4} spacing={2}>
              {GET_CREATIONS.map((creation, index) => {
                const rand = Math.random()
                if (rand > 0.5) {
                  return <CreationCardMinimal key={index} creation={creation} />
                } else {
                  return <CreationCardMinimal key={index} creation={creation} />
                  // return <CreationCardMedia key={index} creation={creation} />;
                }
              })}
            </Masonry>
          </Box>
        </Container> */}
      {/* <Footer /> */}
    </>
  )
}

// CreationsPage.getLayout = page => (
//   <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
// )

// export default CreationsPage

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
