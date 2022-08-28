import Head from 'next/head';

// NAV
import Footer from '@/components/Footer';
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

// UI
import { Button, Container, Typography } from '@mui/material';

// COMPONENTS
import { useAccount, useContractRead } from 'wagmi';

function CreationsPage() {
  const { address, isConnected } = useAccount();

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <Container maxWidth="lg">
        {isConnected ? (
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
        )}
      </Container>
      <Footer />
    </>
  );
}

CreationsPage.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default CreationsPage;
