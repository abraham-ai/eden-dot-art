import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  useSigner,
  WagmiConfig
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ReactNode, FC } from 'react';
import { ChainId, ThirdwebSDKProvider } from '@thirdweb-dev/react';

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'eden.art',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

interface WalletProviderProps {
  children: ReactNode;
}

const ThirdwebProvider = ({ wagmiClient, children }: any) => {
  const { data: signer } = useSigner();
  console.log('signer', signer)
  return (
    <ThirdwebSDKProvider
      desiredChainId={ChainId.Goerli}
      signer={signer as any}
      provider={wagmiClient.provider}
      queryClient={wagmiClient.queryClient}
    >
      {children}
    </ThirdwebSDKProvider>
  );
};

export const WalletProvider: FC<WalletProviderProps> = (props) => {
  const { children } = props;

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThirdwebProvider wagmiClient={wagmiClient}>
          {children}
        </ThirdwebProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
