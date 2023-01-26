// useEffec
import { useState } from 'react' // useMemo,
import type { ReactElement } from 'react'

// GQL
import { useQuery } from '@apollo/client'
import QueryResult from '@/components/QueryResult'

// NEXT
import Head from 'next/head'

// NAV
// import Footer from '@/components/Footer'
import BaseLayout from 'src/layouts/BaseLayout'

// MUI
import { Box, Container } from '@mui/material'
import Masonry from '@mui/lab/Masonry'

// COMPONENTS
import CreationCardMinimal from '@/components/Creation/CreationCardMinimal/CreationCardMinimal'
import Loader from '@/components/Loader/Loader'

// CONSTS
// import { DEVICE_WIDTH } from '@/const/device-width'

// HOOKS
// import useWindowDimensions from '@/hooks/useWindowDimensions'

// GQL Creations query to retreive all Creations //
import { GET_CREATIONS as GQL_GET_CREATIONS } from '@/graphql/queries'

export default function CreationsPage() {
  const [breakpointCols] = useState(3) // setBreakpointCols
  const { loading, error, data, fetchMore } = useQuery(GQL_GET_CREATIONS, {
    variables: {
      offset: 0,
      limit: 16,
    },
  })

  // CUSTOM HOOKS
  // const { width } = useWindowDimensions()

  // useEffect(() => {
  //   console.log({ data })
  // }, [data])

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

  // const getBreakpointCols = useMemo(() => {
  //   const { MOBILE, TABLET, DESKTOP, DESKTOP_XL, DESKTOP_XXL } = DEVICE_WIDTH
  //   // console.log('USE-MEMO BREAKPOINTS!!!!')
  //   // console.log(width)
  //   // console.log(width <= 960)

  //   if (width <= MOBILE) {
  //     // console.log('USE-MEMO BREAKPOINTS MOBILE!!!!')
  //     setBreakpointCols(1)
  //     return 1
  //   } else if (width >= MOBILE && width <= TABLET) {
  //     // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
  //     setBreakpointCols(2)
  //     return 2
  //   } else if (width >= TABLET && width <= DESKTOP) {
  //     // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
  //     setBreakpointCols(3)
  //     return 2
  //   } else if (width >= DESKTOP && width < DESKTOP_XL) {
  //     // console.log('USE-MEMO BREAKPOINTS DESKTOP!!!!')
  //     setBreakpointCols(4)
  //     return 4
  //   } else if (width >= DESKTOP_XL && width < DESKTOP_XXL) {
  //     setBreakpointCols(4)
  //     return 6
  //   } else if (width >= DESKTOP_XXL) {
  //     setBreakpointCols(4)
  //     return 7
  //   } else {
  //     // console.log('USE MEMO DEFAULT!!!')
  //   }
  // }, [width])

  // console.log(breakpointCols)
  // console.log(getBreakpointCols)
  // console.log({ data })

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

        {data?.creationsForHome.length < 1 ? (
          <div style={{ background: 'yellow', height: '100%' }}>
            <Loader />
          </div>
        ) : (
          <Box sx={{ width: '100%', minHeight: 393, mt: 20 }}>
            <Masonry
              id="masonry"
              columns={breakpointCols}
              spacing={2}
              sx={{ m: 0, alignContent: 'center' }}
            >
              <QueryResult error={error} loading={loading} data={data}>
                {data?.creationsForHome?.map((creation, index) => (
                  <CreationCardMinimal
                    key={`${creation.id}_${index}`}
                    creation={creation}
                  />
                ))}
              </QueryResult>
            </Masonry>
            <a
              href="#"
              onClick={onLoadMore}
              style={{ color: 'black', paddingBottom: 10 }}
            >
              Load More
            </a>
          </Box>
        )}
      </Container>

      {/* breakpointCols */}

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
