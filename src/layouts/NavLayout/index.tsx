import { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'

// LAYOUTS
import Header from '@/layouts/NavLayout/Header'

interface NavLayoutProps {
  children?: ReactNode
}

const NavLayout: FC<NavLayoutProps> = ({ children }) => {
  return (
    <div
      className="nav-layout"
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <Header />
      {children}
    </div>
  )
}

NavLayout.propTypes = {
  children: PropTypes.node,
}

export default NavLayout
