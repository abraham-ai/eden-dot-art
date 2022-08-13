import Head from 'next/head';
import Footer from '@/components/Footer';
import { Button, Container } from '@mui/material';

import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';
import {
  useClaimNFT,
  useUnclaimedNFTs,
  useNFTDrop,
  useContract,
  useOwnedNFTs,
  useNFTBalance
} from '@thirdweb-dev/react';
import { useAccount, useContractRead } from 'wagmi';
import { STORE_CONTRACT_ADDRESS } from '@/const/contracts';
import { NFTDrop } from '@thirdweb-dev/sdk';

function WalletStorePage() {
  const { address, isConnected } = useAccount();
  const nftDrop = useNFTDrop(STORE_CONTRACT_ADDRESS);
  const { contract } = useContract(STORE_CONTRACT_ADDRESS);
  const { data: unclaimedNfts, isLoading: unclaimedNFTsLoading } =
    useUnclaimedNFTs(nftDrop, { start: 0, count: 100 });
  const { mutate: claimNft, isLoading: claimLoading } = useClaimNFT(nftDrop);

  const { data: ownerBalance, isLoading: balanceLoading } = useContractRead({
    addressOrName: STORE_CONTRACT_ADDRESS,
    functionName: 'balanceOf',
    contractInterface: NFTDrop.contractAbi,
    args: [address]
  });

  console.log(ownerBalance);

  return (
    <>
      <Head>
        <title>Wallet</title>
      </Head>
      <Container maxWidth="lg">
        {isConnected ? (
          <>
            <h1>Store</h1>
            {!unclaimedNFTsLoading && unclaimedNfts && (
              <>
                <img src={unclaimedNfts[0].image} alt="" />
                <p>{unclaimedNfts.length} NFTs remaining</p>
                <div>
                  {!balanceLoading && (
                    <p>You own {ownerBalance.toNumber()} NFTs</p>
                  )}
                </div>
                <Button
                  variant="contained"
                  onClick={() => claimNft({ to: address, quantity: 1 })}
                  disabled={claimLoading}
                >
                  Mint NFT
                </Button>
              </>
            )}
          </>
        ) : (
          <p>Please connect your wallet</p>
        )}
      </Container>
      <Footer />
    </>
  );
}

WalletStorePage.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default WalletStorePage;
