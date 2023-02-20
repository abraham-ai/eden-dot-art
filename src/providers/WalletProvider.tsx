// import { PropsWithChildren } from 'react'

// STYLES
import '@rainbow-me/rainbowkit/styles.css'

// WEB3
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'

// WALLET
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
  [goerli],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string,
    }),
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Eden Art App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const WalletProvider = ({ children }) => {
  // : PropsWithChildren
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  )
}

export default WalletProvider
