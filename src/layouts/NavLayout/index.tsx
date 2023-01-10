import { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'

// MUI
import { Box } from '@mui/material'

// LAYOUTS
import Header from '@/layouts/NavLayout/Header'

interface NavLayoutProps {
  children?: ReactNode
}

const NavLayout: FC<NavLayoutProps> = ({ children }) => {
  return (
    <Box
      className="nav-layout"
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

NavLayout.propTypes = {
  children: PropTypes.node,
}

export default NavLayout
