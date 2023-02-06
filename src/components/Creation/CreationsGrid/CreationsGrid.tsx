import { useState } from 'react'

// GQL
import { useQuery } from '@apollo/client'
import QueryResult from '@/components/QueryResult'

// NEXT
import Head from 'next/head'

// MUI
import Masonry from 'react-css-masonry'

// STYLES
import styled from 'styled-components'

// COMPONENTS
import CreationCardMinimal from '@/components/Creation/CreationCardMinimal/CreationCardMinimal'
import Loader from '@/components/Loader/Loader'

const CreationsGridStyles = styled.section`
    width: 100%;
    
    #creations-grid-wrapper {
        width: 100%;
    }
`


export default function CreationsGrid() {
    const [breakpointCols] = useState(3) // setBreakpointCols

    return (
        <>
            <Head>
                <title>Creations</title>
            </Head>

            <CreationsGridStyles>
                <div id='creations-grid-wrapper'>

                    {data?.creationsForHome.length < 1 ? (
                        <Loader />
                    ) : (
                        <div style={{ width: '100%', minHeight: 393, marginTop: 20 }}>
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
                        </div>
                    )}
                </div>
            </CreationsGridStyles>
        </>
    )
}
