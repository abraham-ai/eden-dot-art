import Head from 'next/head';

// NAV
import Footer from '@/components/Footer';
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

// UI
import { Button, Container, Typography, IconButton } from '@mui/material';

// COMPONENTS
import { useAccount } from 'wagmi';

// ICONS
import { FaDiscord, FaGithub } from 'react-icons/fa';

function EdenIdeasPage() {
  const { address, isConnected } = useAccount();

  return (
    <>
      <Head>
        <title>Eden.Dev | Garden</title>
      </Head>
      <Container maxWidth="lg">
        <Typography variant={'h1'}>Docs</Typography>
        <Typography variant={'h3'}>API Docs.</Typography>
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

        <hr />

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

        <div>
          <Typography variant={'h2'}>Eden API</Typography>

          <Typography variant={'h4'}>Getting started</Typography>

          <Typography variant={'h4'}>Tools and libraries</Typography>

          <Typography variant={'h4'}>What to build</Typography>

          <Typography variant={'h4'}>Analytics</Typography>

          <Typography variant={'h4'}>Audiences</Typography>
        </div>

        <div>
          <Typography variant={'h2'}>Eden for Websites</Typography>

          <Typography variant={'h4'}>
            Fundamentals Tools and libraries
          </Typography>

          <Typography variant={'h4'}>Embedded Creations</Typography>

          <Typography variant={'h4'}>Embedded Collections</Typography>

          <Typography variant={'h4'}>Embedded buttons</Typography>

          <Typography variant={'h4'}>Web intents</Typography>

          <Typography variant={'h4'}>oEmbed API</Typography>

          <Typography variant={'h4'}>Log in with Eden</Typography>

          <Typography variant={'h4'}>
            Optimize Creations with Creation Cards
          </Typography>

          <Typography variant={'h4'}>
            Integrate Creations with your CMS
          </Typography>
        </div>
      </Container>
      <Footer />
    </>
  );
}

EdenIdeasPage.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default EdenIdeasPage;
