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

const LogoSignWrapper = styled.section`
  display: flex;
  align-items: center;
`

function Logo() {
  return (
    <LogoWrapper href="/">
      <LogoSignWrapper>
        <AppLogo logo="eden" size="x-small" />
      </LogoSignWrapper>
    </LogoWrapper>
  )
}

export default Logo
