import Head from 'next/head'

// NAV
import Footer from '@/components/Footer'
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout'

// UI
// Typography, Button,
import { Container, styled } from '@mui/material'

// COMPONENTS
// import BasicCard from '@/components/BasicCard'
import UploadFiles from '@/components/UploadFiles'

// ICONS

const EdenIdeasPageStyles = styled('section')(
  () => `
  display: flex;
  flex-direction: column;
  .card-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .welcome-wrapper {
    display: flex;
    padding: 50px 0 20px 0;
  }
  .welcome-divider {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 0 0 50px;
  }
  .card-list-wrapper {
    display: flex;
    justify-content: flex-start;
  }
  .basic-card-wrapper {
    display: flex;
    flex: 1;
    padding: 5px;
    max-width: 395px;
  }
  .dev-garden-cta {
    padding: 50px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  `,
)

function EdenIdeasPage() {
  return (
    <>
      <Head>
        <title>Eden.Dev | Garden</title>
      </Head>
      <EdenIdeasPageStyles>
        <Container maxWidth="lg">
          <UploadFiles />
        </Container>
      </EdenIdeasPageStyles>

      <Footer />
    </>
  )
}

EdenIdeasPage.getLayout = page => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
)

export default EdenIdeasPage
