import { useState } from 'react'

// GQL
import { useQuery } from '@apollo/client'
import QueryResult from '@/components/QueryResult'

// NEXT
import Head from 'next/head'

// MUI
import { Box, Container } from '@mui/material'
import Masonry from '@mui/lab/Masonry'

// COMPONENTS
import CreationCardMinimal from '@/components/CreationCardMinimal'
import Loader from '@/components/Loader/Loader'

// GQL Creations query to retreive all Creations //
import { GET_CREATIONS as GQL_GET_CREATIONS } from '@/graphql/queries'

export default function CreationsGrid() {
    const [breakpointCols] = useState(3) // setBreakpointCols
    const { loading, error, data, fetchMore } = useQuery(GQL_GET_CREATIONS, {
        variables: {
            offset: 0,
            limit: 16,
        },
    })

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

    return (
        <>
            <Head>
                <title>Creations</title>
            </Head>

            <Container maxWidth="xl">

                {data?.creationsForHome.length < 1 ? (
                    <Loader />
                ) : (
                    <Box sx={{ width: '100%', minHeight: 393, mt: 20 }}>
                        <Masonry
                            id="masonry"
                            columns={breakpointCols}
                            spacing={2}
                            sx={{ m: 0 }}
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
        </>
    )
}
