// import { useState } from 'react'
import Head from 'next/head'

// NAV
// import Footer from '@/components/Footer'
import BaseLayout from 'src/layouts/BaseLayout'

// UI
import { Box, Container, styled } from '@mui/material'

// COMPONENTS
import CreationCardIG from '@/components/CreationCardIG'
import Masonry from '@mui/lab/Masonry'

// CONSTS
import { GET_CREATIONS } from '@/const/get-creations'

const SelectStyles = styled('section')(
  () => `
  width: 100%;
  display: flex;
  justify-content: center;
  `,
)

export default function CreationsPage() {
  // label={
  //   <>
  //     <HiChip /> "Model"
  //   </>
  // }

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
              {GET_CREATIONS.map((creation, index) => {
                const rand = Math.random()
                if (rand > 0.5) {
                  return <CreationCardIG key={index} creation={creation} />
                } else {
                  return <CreationCardIG key={index} creation={creation} />
                  // return <CreationCardMedia key={index} creation={creation} />;
                }
              })}
            </Masonry>
          </Box>
        </Container>
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
