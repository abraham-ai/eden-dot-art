import React from 'react'

// STYLES
import styled from 'styled-components'

const DashboardStyles = styled.div`
  .menu-item {
    font-size: 20px;
  }
`

export default function CreatorDashboard({ creatorAddress = 'test' }) {
  return (
    <DashboardStyles>
      <div>{creatorAddress}</div>
    </DashboardStyles>
  )
}
