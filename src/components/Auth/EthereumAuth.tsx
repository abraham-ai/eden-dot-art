import { useState } from 'react'

// ANTD
import { Button, Row } from 'antd'

// FETCH
import axios from 'axios'

// WEB3 & WALLET
import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'

const EthereumAuth = () => {
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const [ethAuthenticating, setEthAuthenticating] = useState(false);
  const [ethMessage, setEthMessage] = useState<string | null>(null);

  const { signMessage } = useSignMessage({
    onSuccess: async (data, variables) => {
      try {
        await axios.post("/api/login", {
          message: variables.message,
          signature: data,
          userAddress: address,
        });
        setEthMessage("Successfully authenticated as " + address);
      } catch (error: any) {
        setEthMessage("Error authenticating");
      }
      setEthAuthenticating(false);
    },
  });

  const handleCancelModal = () => {
    console.log('handle cancel modal!');
  }

  const handleSiwe = async () => {
    if (!isConnected) return;
    setEthAuthenticating(true);
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: Date.now().toString(),
      });
      const preparedMessage = message.prepareMessage();
      await signMessage({
        message: preparedMessage,
      });
    } catch (error: any) {
      setEthMessage("Error authenticating");
      setEthAuthenticating(false);
    }
  };

  return (
    <div style={{ background: 'yellow' }}>
      <h1>Sign in with Ethereum</h1>
      <Row style={{ display: 'flex', justifyContent: 'space-between' }}>

      <Button
        type="primary"
        onClick={handleSiwe}
        disabled={ethAuthenticating}
        loading={ethAuthenticating}
        >
        Sign In
      </Button>
      <Button
        type='default'
        onClick={handleCancelModal}
        disabled={ethAuthenticating}
        >
        Cancel
      </Button>
        </Row>
      {ethMessage && <p>{ethMessage}</p>}
    </div>
  );
};

export default EthereumAuth;