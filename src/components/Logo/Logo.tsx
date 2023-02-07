// ICONS
import AppLogo from '../AppLogo/AppLogo'

// STYLES
import styled from 'styled-components'

const LogoWrapper = styled.a`
  display: flex;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`

function Logo() {
  return (
    <LogoWrapper href="/">
      <AppLogo logo="eden" size="x-small" />
    </LogoWrapper>
  )
}

export default Logo
