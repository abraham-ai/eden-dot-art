import { useState } from 'react'

// NEXT
import Head from 'next/head'

// MUI
import Footer from '@/components/Footer'
import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  Stack,
} from '@mui/material'

// LAYOUTS
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout'

// CONSTS
import { STORE_CONTRACT_ADDRESS } from '@/const/contracts'

// WALLET
import { useAccount } from 'wagmi'
import { useContract, useOwnedNFTs } from '@thirdweb-dev/react'

function WalletUsePage() {
  const [selectedIdx, setSelectedIdx] = useState<number | undefined>(0)
  const { address } = useAccount()
  const { contract } = useContract(STORE_CONTRACT_ADDRESS)
  const { data: ownedNFTs, isLoading: ownedNFTsLoading } = useOwnedNFTs(
    contract?.nft,
    address,
  )

  return (
    <>
      <Head>
        <title>Wallet</title>
      </Head>
      <Container maxWidth="lg">
        <h1>Your NFTs</h1>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {!ownedNFTsLoading &&
            ownedNFTs &&
            ownedNFTs.map((item, idx) => (
              <Stack direction="column" key={idx}>
                <div onClick={() => setSelectedIdx(idx)}>
                  <Box sx={{ border: idx === selectedIdx ? 3 : 0 }}>
                    <ImageListItem>
                      <img
                        src={`${item.metadata.image}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.metadata.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        loading="lazy"
                      />
                    </ImageListItem>
                  </Box>
                </div>
                <p>10 uses remaining</p>
              </Stack>
            ))}
        </ImageList>
        <Button variant="contained">Generate</Button>
      </Container>
      <Footer />
    </>
  )
}

WalletUsePage.getLayout = page => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
)

export default WalletUsePage
