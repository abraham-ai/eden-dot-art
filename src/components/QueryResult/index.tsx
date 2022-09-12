import React from 'react'

// MUI
import { styled } from '@mui/material'

// GQL
import { CircularProgress } from '@mui/material'

/** Query Result styled components */

const SpinnerContainer = styled('section')(
  () => `
  display: flex,
  justify-content: center,
  align-items: center,
  width: 100%,
  height: 100vh,
`,
)

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <CircularProgress data-testid="spinner" size="small" />
      </SpinnerContainer>
    )
  }
  if (!data) {
    return <p>Nothing to show...</p>
  }
  if (data) {
    return children
  }
}

export default QueryResult
