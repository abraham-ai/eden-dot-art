import { useState, useEffect } from 'react' // useMemo,
import type { ReactElement } from 'react'

// GQL
import { useQuery } from '@apollo/client'
import QueryResult from '@/components/QueryResult'

// GQL Creations query to retreive all Creations //
// Will be switched to be a regular Mongo query
import { GET_CREATIONS as GQL_GET_CREATIONS } from '@/graphql/queries'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

// MUI
import Masonry from '@mui/lab/Masonry'

// LIBS
import { useInView } from 'react-intersection-observer'

// COMPONENTS
import CreationCardMinimal from '@/components/Creation/CreationCardMinimal/CreationCardMinimal'
import Loader from '@/components/Loader/Loader'

// STYLES
import styled from 'styled-components'

// CONSTS
// import { DEVICE_WIDTH } from '@/const/device-width'

// HOOKS
// import useWindowDimensions from '@/hooks/useWindowDimensions'
// WRITE useBreakpoints from '@/hooks/useBreakpoints'


const CreationsGridStyles = styled.section`
  width: 100vw;
`


export default function CreationsPage() {
  const PAGE_LEN = 16
  const [breakpointCols] = useState(3) // setBreakpointCols
  const [index, setIndex] = useState(PAGE_LEN)

  const { loading, error, data, fetchMore } = useQuery(GQL_GET_CREATIONS, {
    variables: {
      offset: 0,
      limit: PAGE_LEN,
    },
  })

  // CUSTOM HOOKS
  // const { width } = useWindowDimensions()
  // write custom hook useBreakpoints()

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    const loadMore = () => {
      fetchMore({
        variables: {
          offset: index,
          limit: PAGE_LEN, //data.length
        },

        updateQuery: (prev, { fetchMoreResult }) => {
          setIndex(index + PAGE_LEN)
          if (!fetchMoreResult) return prev
          if (typeof prev === 'undefined') return null
          return {
            creationsForHome: [
              ...prev.creationsForHome,
              ...fetchMoreResult.creationsForHome,
            ],
          }
        },
      })
    }

    if (inView) {
      loadMore()
    }
  }, [inView, fetchMore, index])

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

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>

      <CreationsGridStyles id='creations-grid'>

        {data?.creationsForHome.length < 1 ? (
          <div style={{ background: 'yellow', height: '100%' }}>
            <Loader />
          </div>
        ) : (
          <div style={{ width: '100%', minHeight: 393, marginTop: 200 }}>
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
          </div>
        )}
        <div ref={ref}></div>
      </CreationsGridStyles>
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
