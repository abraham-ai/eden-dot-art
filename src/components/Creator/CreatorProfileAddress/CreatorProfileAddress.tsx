import React from 'react'

// REDUX
import { useAppSelector } from '@/hooks/redux'

// MUI
import { Skeleton, Typography } from 'antd'

// STYLES
import styled from 'styled-components'

// LIBS
import Blockies from 'react-blockies'

// WALLET
// import { useAccount, useSigner } from 'wagmi'

// import { useLookupAddress } from 'eth-hooks/dapps/ens'

const CreatorProfileAddressStyles = styled.div`
 width: 300px;
 height: 300px;
`

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

// const blockExplorerLink = (address, blockExplorer) =>
//   `${blockExplorer || 'https://etherscan.io/'}${'address/'}${address}`

export default function CreatorProfileAddress() {
  // const {
  //   // address,
  //   isConnected,
  // } = useAccount()

  // blockExplorer,
  // ensProvider,
  // size,
  // minimized,
  // fontSize,
  // onChange,

  const appAddress = useAppSelector(state => state.address.value)
  const currentAddress = appAddress
  // const ens = useLookupAddress(ensProvider, currentAddress)

  // const currentTheme = 'light'

  if (!appAddress) {
    return (
      <span>
        <Skeleton />
      </span>
    )
  }

  const displayAddress = currentAddress.slice(0, 6)

  // if (ens && ens.indexOf('0x') < 0) {
  //   displayAddress = ens
  // } else if (size === 'short') {
  //   displayAddress += '...' + currentAddress.substr(-4)
  // } else if (size === 'long') {
  //   displayAddress = currentAddress
  // }

  // const etherscanLink = blockExplorerLink(currentAddress, blockExplorer)
  // if (minimized) {
  //   return (
  //     <span style={{ verticalAlign: 'middle' }}>
  //       <a
  //         style={{ color: currentTheme === 'light' ? '#222222' : '#ddd' }}
  //         target="_blank"
  //         href={etherscanLink}
  //         rel="noopener noreferrer"
  //       >
  //         <Blockies seed={currentAddress.toLowerCase()} size={8} scale={2} />
  //       </a>
  //     </span>
  //   )
  // }

  // let text
  // if (onChange) {
  //   text = (
  //     <Typography>
  //       <a
  //         style={{ color: currentTheme === 'light' ? '#222222' : '#ddd' }}
  //         target="_blank"
  //         href={etherscanLink}
  //         rel="noopener noreferrer"
  //       >
  //         {displayAddress}
  //       </a>
  //     </Typography>
  //   )
  // } else {
  //   text = (
  //     <Typography>
  //       <a
  //         style={{ color: currentTheme === 'light' ? '#222222' : '#ddd' }}
  //         target="_blank"
  //         href={etherscanLink}
  //         rel="noopener noreferrer"
  //       >
  //         {displayAddress}
  //       </a>
  //     </Typography>
  //   )
  // }

  return (
    <CreatorProfileAddressStyles>
      <span className="creator-blockies-wrapper mobi">
        <Blockies
          seed={currentAddress.toLowerCase()}
          size={32}
          scale={5}
          // scale={fontSize ? fontSize / 7 : 4}
        />
        <Typography>{displayAddress}</Typography>
      </span>
    </CreatorProfileAddressStyles>
  )
}
