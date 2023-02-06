import { useState, useEffect, useCallback } from 'react'
import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

// LIBS
import Masonry from 'react-masonry-component'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'


// COMPONENTS
import CreationCardMinimal from '@/components/Creation/CreationCardMinimal/CreationCardMinimal'
import Loader from '@/components/Loader/Loader'


// STYLES
import styled from 'styled-components'

const CreationsGridStyles = styled.section`
  width: 100vw;
  padding: 0 10px;

	.cr-masonry-grid {
		display: -webkit-box; /* Not needed if autoprefixing */
		display: -ms-flexbox; /* Not needed if autoprefixing */
		display: flex;
		margin-left: -30px; /* gutter size offset */
		width: auto;
	}
	.cr-masonry-grid_column {
		padding-left: 30px; /* gutter size */
		background-clip: padding-box;
	}
	
	/* Style your items */
	.cr-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
		background: grey;
		margin-bottom: 30px;
	}
`

const PAGE_LENGTH = 10
const masonryOptions = { transitionDuration: 0 };
const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default function CreationsGrid() {
	const [creations, setCreations] = useState<object[]>([])
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [paginate, setPaginate] = useState(true)
  const [cutoffTime, setCutoffTime] = useState<number | null>(null)
  // const [breakpointCols, setBreakpointCols] = useState(3)

  const getMoreCreations = useCallback(async () => {
    if (!paginate) return

    setLoading(true)

    try {
      const response = await axios.post('/api/creations', {
        latestTime: cutoffTime,
        limit: PAGE_LENGTH,
      })

      const moreCreations =
        response.data.creations &&
        response.data.creations.map((creation: any) => {
          return {
            key: creation._id,
            address: creation.user,
            uri: creation.uri,
            timestamp: creation.createdAt,
            prompt: creation.task.config.text_input,
            status: creation.task.status,
            generator: creation.task.generator.generatorName,
          }
        })

      if (moreCreations.length == 0) {
        setLoading(false)
        setPaginate(false)
        return
      }

      setCreations([...creations, ...moreCreations])

      const lastCreation = moreCreations[moreCreations.length - 1]
      const earliestTime = Date.parse(lastCreation.timestamp) - 1
      setCutoffTime(earliestTime)
    } catch (error: any) {
      setMessage(`Error: ${error}`)
    }
    setLoading(false)
  }, [creations, cutoffTime, paginate])

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    const loadMore = async () => {
      await getMoreCreations()
    }
    if (inView) {
      loadMore()
    }
  }, [inView, getMoreCreations])

	const childElements = creations.map(function(creation, i){
		return (
				 <CreationCardMinimal creation={creation} key={i} />
		 );
 });

    return (
        <>
            <Head>
                <title>Creations</title>
            </Head>

            <CreationsGridStyles>
                <div id='creations-grid-wrapper'>

                    {creations?.length < 1 && loading ? (
                        <Loader />
                    ) : (
                        <div style={{ width: '100%', minHeight: 393, marginTop: 20 }}>
                             <Masonry
																className={'my-gallery-class'} // default ''
																elementType={'ul'} // default 'div'
																options={masonryOptions} // default {}
																disableImagesLoaded={false} // default false
																updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
																imagesLoadedOptions={imagesLoadedOptions} // default {}
														>
																{childElements}
														</Masonry>
														
														{message}
														<div ref={ref}></div>
                        </div>
                    )}
                </div>
            </CreationsGridStyles>
        </>
    )
}

CreationsGrid.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
