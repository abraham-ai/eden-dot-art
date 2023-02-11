// useEffect
import { useState } from 'react' // useMemo,
import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
// import Footer from '@/components/Footer'
import BaseLayout from 'src/layouts/BaseLayout'

// LIBS
import Masonry from 'react-masonry-css'

// COMPONENTS
import CreationCardMinimal from '@/components/Creation/CreationCard/CreationCard'
import Loader from '@/components/Loader/Loader'

// HOOKS
// import useWindowDimensions from '@/hooks/useWindowDimensions'

// CONSTS
const PAGE_LENGTH = 10
// import { DEVICE_WIDTH } from '@/const/device-width'
const masonryOptions = { transitionDuration: 0 }
const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default function CreationsPage() {
  const [creations, setCreations] = useState<object[]>([])
  const [breakpointCols] = useState(3) // setBreakpointCols

  // CUSTOM HOOKS
  // const { width } = useWindowDimensions()

  // useEffect(() => {
  //   console.log({ data })
  // }, [data])

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

      <section>
        {creations.length < 1 ? (
          <Loader />
        ) : (
          <div style={{ width: '100%', minHeight: 393, mt: 20 }}>
            <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
              {creations.map((creation, index) => (
                <CreationCardMinimal key={index} creation={creation} />
              ))}
            </Masonry>
          </div>
        )}
      </section>
    </>
  )
}

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
