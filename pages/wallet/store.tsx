import Head from 'next/head'

// COMPONENTS
import Footer from '@/components/Footer'

// MUI
import { Container } from '@mui/material' //  Button,

// LAYOUTS
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout'

// WEB3
// import { useClaimNFT, useUnclaimedNFTs, useNFTDrop } from '@thirdweb-dev/react'
// import { NFTDrop } from '@thirdweb-dev/sdk'

// WALLET
import { useAccount } from 'wagmi' //  useContractRead

// CONTRACT
// causing type errors
// import { STORE_CONTRACT_ADDRESS } from '@/const/contracts'

function WalletStorePage() {
  const { isConnected } = useAccount() // address,
  // const nftDrop = useNFTDrop(STORE_CONTRACT_ADDRESS)

  // const { data: unclaimedNfts, isLoading: unclaimedNFTsLoading } =
  //   useUnclaimedNFTs(nftDrop, { start: 0, count: 100 })
  // const { mutate: claimNft, isLoading: claimLoading } = useClaimNFT(nftDrop)

  // const { data: ownerBalance, isLoading: balanceLoading } = useContractRead({
  //   addressOrName: STORE_CONTRACT_ADDRESS,
  //   functionName: 'balanceOf',
  //   contractInterface: NFTDrop.contractAbi,
  //   args: [address],
  // })

  return (
    <>
      <Head>
        <title>Wallet</title>
      </Head>
      <Container maxWidth="lg">
        {isConnected ? (
          <>
            <h1>Store</h1>
            {/* {!unclaimedNFTsLoading && unclaimedNfts && (
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
            )} */}
          </>
        ) : (
          <p>Please connect your wallet</p>
        )}
      </Container>
      <Footer />
    </>
  )
}

WalletStorePage.getLayout = page => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
)

export default WalletStorePage
