import { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'

// MUI
import { Box } from '@mui/material'

// LAYOUTS
import Header from '@/layouts/BaseLayout/Header'

interface BaseLayoutProps {
  children?: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <Header />
      {children}
    </Box>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node,
}

export default BaseLayout
