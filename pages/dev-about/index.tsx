import Head from 'next/head';

// NAV
import EdenDevFrontPage from '@/components/EdenDevFrontPage';
import Footer from '@/components/Footer';
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

// UI
import { Button, Container, Typography } from '@mui/material';

// COMPONENTS
import { useAccount, useContractRead } from 'wagmi';

function DevAboutPage() {
  const { address, isConnected } = useAccount();

  return (
    <>
      <Head>
        <title>Eden.Dev | About</title>
      </Head>
      <Container maxWidth="lg">
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
      </Container>
      <Footer />
    </>
  );
}

DevAboutPage.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default DevAboutPage;
