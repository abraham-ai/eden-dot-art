import Head from 'next/head';
import Footer from '@/components/Footer';
import { Button, Container } from '@mui/material';
import { Authenticated } from 'src/components/Authenticated';

import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';
import { STORE_CONTRACT_ADDRESS } from '@/const/contracts';
import { useContract, useOwnedNFTs } from '@thirdweb-dev/react';

function WalletStorePage() {
  const { contract } = useContract(STORE_CONTRACT_ADDRESS);
  const { data: ownedNFTs } = useOwnedNFTs(
    contract?.nft,
    '0x2c8A7A737155e04c9fEc639520ed72626040763B'
  );
  console.log(ownedNFTs);

  return (
    <>
      <Head>
        <title>Wallet</title>
      </Head>
      <Container maxWidth="lg">
        <h1>Store</h1>
        <Button>Mint NFT</Button>
      </Container>
      <Footer />
    </>
  );
}

WalletStorePage.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default WalletStorePage;
