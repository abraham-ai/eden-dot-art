import Head from 'next/head';
import Footer from '@/components/Footer';
import { Container } from '@mui/material';
import { Authenticated } from 'src/components/Authenticated';

import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

function WalletUsePage() {
  return (
    <>
      <Head>
        <title>Wallet</title>
      </Head>
      <Container maxWidth="lg">hey</Container>
      <Footer />
    </>
  );
}

WalletUsePage.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default WalletUsePage;
