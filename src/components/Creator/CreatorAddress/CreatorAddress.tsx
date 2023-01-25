import React from 'react';

// ANTD
import { Badge, Skeleton, Typography, Avatar } from 'antd';

// STYLES
import styled from 'styled-components';

// COMPONENTS
import Blockies from 'react-blockies';

// HOOKS
// import { useThemeSwitcher } from 'react-css-theme-switcher';
// import { useLookupAddress } from 'eth-hooks/dapps/ens';

const { Text } = Typography;

const AddressStyles = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  .creator-blockies-wrapper {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    overflow: hidden;
    padding: 0;
  }
  .blockies-wrapper {
    vertical-align: middle;
  }
  .display-address-wrapper.overlay.ant-typography {
    color: white;
  }
  .ant-typography {
    display: flex;
    align-items: center;
    padding-left: 5px;
  }
  .ant-typography.display-address-wrapper {
    /* color: black !important; */
    border: none !important;
    font-weight: 600;
    font-size: 14px !important;
  }
  .ant-typography.display-address-wrapper:hover {
    background: none !important;
  }
  @media only screen and (max-width: 718px) {
    font-size: 0.8em;
    margin: 0 10px 10px 10px !important;
    .ant-typography {
      font-size: 0.8em;
    }
  }
`;

// changed value={address} to address={address}

/*
  ~ What it does? ~

  Displays an address with a blockie image and option to copy address

  ~ How can I use? ~

  <Address
    address={address}
    ensProvider={mainnetProvider}
    blockExplorer={blockExplorer}
    fontSize={fontSize}
  />

  ~ Features ~

  - Provide ensProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide blockExplorer={blockExplorer}, click on address and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
  - Provide fontSize={fontSize} to change the size of address text
*/

const blockExplorerLink = (address, blockExplorer) =>
  `${blockExplorer || 'https://etherscan.io/'}${'address/'}${address}`;

export default function Address({ blockExplorer, value, address, ensProvider, size, minimized, fontSize, onChange }) {
  const currentAddress = value || address;
//   const ens = useLookupAddress(ensProvider, currentAddress);
//   const { currentTheme } = useThemeSwitcher();

  if (!currentAddress) {
    return (
      <span>
        <Skeleton avatar paragraph={{ rows: 1 }} />
      </span>
    );
  }

  let displayAddress = currentAddress.substr(0, 6);

//   if (ens && ens.indexOf('0x') < 0) {
//     displayAddress = ens;
//   } else 
  
  if (size === 'short') {
    displayAddress += '...' + currentAddress.substr(-4);
  } else if (size === 'long') {
    displayAddress = currentAddress;
  }

  const etherscanLink = blockExplorerLink(currentAddress, blockExplorer);

  if (minimized) {
    return (
        
        <span style={{ verticalAlign: 'middle' }}>
        <a
          //   style={{ color: currentTheme === 'light' ? '#222222' : '#ddd' }}
          target="_blank"
          href={etherscanLink}
          rel="noopener noreferrer"
        >
          <Blockies seed={currentAddress.toLowerCase()} size={8} scale={2} />
        </a>
      </span>
    );
  }

//   const textLink = (
//     <Text copyable={{ text: currentAddress }}>
//       <a
//         style={{ color: currentTheme === 'light' ? '#222222' : '#ddd' }}
//         target="_blank"
//         href={etherscanLink}
//         rel="noopener noreferrer"
//       >
//         {displayAddress}
//       </a>
//     </Text>
//   );

  let text;
  if (onChange) {
    text = null;
  } else {
    text = <Text className="display-address-wrapper overlay">{displayAddress}</Text>;
  }

  return (
    <AddressStyles>
      <span className="creator-blockies-wrapper mobi">
        <Blockies seed={currentAddress.toLowerCase()} size={9} scale={fontSize ? fontSize / 7 : 4} />
      </span>
      {text}
    </AddressStyles>
  );
}
