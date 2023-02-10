import React from 'react'

// ANTD
import { Skeleton, Typography } from 'antd'
const { Text } = Typography

// STYLES
import styled from 'styled-components'

// LIBS
import Blockies from 'react-blockies'

// WALLET
import { useAccount } from 'wagmi'

const CreatorProfileAddressStyles = styled.div`
  width: 300px;
  height: 300px;
`

export default function CreatorProfileAddress() {
  const { address } = useAccount()
  const currentAddress = address

  if (!address) {
    return (
      <span>
        <Skeleton />
      </span>
    )
  }

  const displayAddress = currentAddress.slice(0, 6)

  return (
    <CreatorProfileAddressStyles>
      <span className="creator-blockies-wrapper mobi">
        <Blockies seed={currentAddress.toLowerCase()} size={32} scale={5} />
        <Text>{displayAddress}</Text>
      </span>
    </CreatorProfileAddressStyles>
  )
}
