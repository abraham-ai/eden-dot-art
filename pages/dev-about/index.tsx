import Head from 'next/head'

// NAV
import EdenDevFrontPage from '@/components/EdenDevFrontPage'
import Footer from '@/components/Footer'
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout'

// UI
import { Container, styled } from '@mui/material'

const AboutPageStyles = styled(Container)(
  ({ theme }) => `
    .page-container {
      padding-left: 0;
      padding-right: 0;
      max-width: unset;
    }
    // background: ${theme.palette.common.white};
    @media (min-width: 1280px) {
      max-width: unset; 
    }
    @media (min-width: 600px) {
      padding-left: 0;
      padding-right: 0;
    }
  `,
)

function DevAboutPage() {
  return (
    <>
      <Head>
        <title>Eden.Dev | About</title>
      </Head>
      <AboutPageStyles
        className="page-container"
        // maxWidth="lg"
        sx={{ padding: 0 }}
      >
        {/* {isConnected ? (
          <>
            <Typography variant={'h3'}>
              You are connected with you wallet!
            </Typography>
            <Typography variant={'body1'}>{address}</Typography>
          </>
        ) : (
          <p>Please connect your Wallet</p>
        )} */}

        <EdenDevFrontPage />
      </AboutPageStyles>
      {/* <Footer /> */}
    </>
  )
}

DevAboutPage.getLayout = page => (
  // <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  <>{page}</>
)

export default DevAboutPage
