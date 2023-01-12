import Head from 'next/head'

// NAV
import Footer from '@/components/Footer'
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout'

// UI
import { Button, Container, Typography, IconButton } from '@mui/material'

// ICONS
import { FaDiscord, FaGithub } from 'react-icons/fa'

function EdenDevGardenPage() {
  return (
    <>
      <Head>
        <title>Eden.Dev | Garden</title>
      </Head>
      <Container maxWidth="lg">
        <Typography variant={'h1'}>Dev Garden</Typography>
        <Typography variant={'h3'}>Welcome to the Developer Garden.</Typography>
        <Typography variant={'h4'}>What can Eden.Dev do?</Typography>
        <Typography>The API is built with modularity in mind.</Typography>

        <div className="dev-garden-cta">
          <Button variant={'contained'}>READ THE DEVELOPER DOCS</Button>
          <IconButton>
            <FaDiscord />
          </IconButton>
          <IconButton>
            <FaGithub />
          </IconButton>
        </div>

        <div>
          <Typography>
            The Eden API enables programmatic access to Eden in unique and
            advanced ways. Tap into core elements of Eden like: Creations,
            Collections, and more.
          </Typography>

          <div>
            <Button variant={'contained'}>Sign up</Button>
            <Button variant={'contained'}>
              API access levels and versions
            </Button>
          </div>
        </div>

        <hr />

        <div>
          <Typography variant={'h2'}>Getting started</Typography>

          <Typography variant={'h2'}>Fundamentals</Typography>
          <Typography variant={'h4'}>Tools and libraries</Typography>

          <Typography variant={'h4'}>Tutorials</Typography>

          <Typography variant={'h4'}>API reference index</Typography>
        </div>
      </Container>
      <Footer />
    </>
  )
}

EdenDevGardenPage.getLayout = page => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
)

export default EdenDevGardenPage
