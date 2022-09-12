// import { useEffect } from 'react'
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

// GQL Creations query to retreive all Creations //
import { GET_CREATIONS as GQL_GET_CREATIONS } from '@/graphql/queries'

const SelectStyles = styled('section')(
  () => `
  width: 100%;
  display: flex;
  justify-content: center;
  `,
)

export default function CreationsPage() {
  const { loading, error, data, fetchMore } = useQuery(GQL_GET_CREATIONS, {
    variables: {
      offset: 0,
      limit: 16,
    },
  })

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

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <SelectStyles>
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
            <Masonry columns={4} spacing={2}>
              <QueryResult error={error} loading={loading} data={data}>
                {data?.creationsForHome?.map((creation, index) => (
                  <CreationCardMinimal
                    key={`${creation.id}_${index}`}
                    creation={creation}
                  />
                ))}
              </QueryResult>
              <a href="#" onClick={onLoadMore}>
                Load More
              </a>
            </Masonry>
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
      </SelectStyles>
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
