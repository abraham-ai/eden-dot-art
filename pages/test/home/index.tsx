import Head from 'next/head'

// ROUTER
import Link from '@/components/Link'

// NAV
import Footer from '@/components/Footer/Footer'
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout'

// UI
import { Button, Container, Typography, Box, styled } from '@mui/material'

// ICONS
import { FaDiscord } from 'react-icons/fa'

const DashboardStyles = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 9px 0 0;
    }
  `,
)

function DashboardTasks() {
  return (
    <>
      <Head>
        <title>Tasks Dashboard</title>
      </Head>
      <DashboardStyles>
        <Container maxWidth="lg">
          <Link href="/api/discord/login" passHref>
            <Button variant="contained">
              <span className="icon-wrapper">
                <FaDiscord style={{ fontSize: '20px' }} />
              </span>
              <Typography>Login with Discord</Typography>
            </Button>
          </Link>
        </Container>
      </DashboardStyles>
      <Footer />
    </>
  )
}

DashboardTasks.getLayout = page => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
)

export default DashboardTasks
