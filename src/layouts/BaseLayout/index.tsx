import { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'

// LAYOUTS
import Header from '@/layouts/BaseLayout/Header'

interface BaseLayoutProps {
  children?: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
        background: 'yellow'
      }}
    >
      <Header />
      {children}
    </div>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node,
}

export default BaseLayout
