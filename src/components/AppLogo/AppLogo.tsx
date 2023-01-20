// CSS
import { styled } from '@mui/material'

// COMPONENTS
import Link from 'next/link'

const LogoStyles = styled('div')(
  () => `
  flex: 0;
  text-decoration: none !important;
  border: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: transparent;
  }
  .middle {
    display: flex;
    align-items: center;
  }
  img.icon-small {
    max-height: 20px !important;
    max-width: 20px !important;
  }
  img.x-small {
    max-height: 40px !important;
    max-width: 40px !important;
  }
  img.small {
    max-height: 45px !important;
    max-width: 45px !important;
  }
  img.medium {
    min-height: 50px;
    min-width: 50px;
  }
  img.large {
    min-height: 120px;
    min-width: 120px;
  }
  img.x-large {
    min-height: 200px;
    min-width: 200px;
  }
  img.xx-large {
    min-height: 300px;
    min-width: 300px;
  }
  @media (min-width: 20em) {
    /* width: 100%; */
  }
  @media (min-width: 40em) {
    /* a img.small {
        max-height: 35px !important;
        max-width: 35px !important;
      } */
  }
`,
)

export default function AppLogo({
  size = 'medium',
  position = 'middle',
  logo = 'abraham',
}) {
  const abrahamLogo =
    'https://eden-art.s3.amazonaws.com/abraham_eth_star_logo.png'
  const edenLogo = 'https://eden-art.s3.amazonaws.com/eden_logo_transparent.png'

  function renderSize(size: string) {
    switch (size) {
      case 'icon-small':
        return 'icon-small'
      case 'x-small':
        return 'x-small'
      case 'small':
        return 'small'
      case 'medium':
        return 'medium'
      case 'large':
        return 'large'
      case 'x-large':
        return 'x-large'
      default:
        return 'medium'
    }
  }

  function renderPosition(position: string) {
    let currentPosition

    switch (position) {
      case 'left':
        currentPosition = 'left'
        break
      case 'middle':
        currentPosition = 'middle'
        break
      case 'right':
        currentPosition = 'right'
        break
      default:
        currentPosition = 'middle'
        break
    }
    return currentPosition
  }

  function renderLogo(logo: string) {
    let currentLogo

    switch (logo) {
      case 'abraham':
        currentLogo = abrahamLogo
        break
      case 'eden':
        currentLogo = edenLogo
        break
      default:
        currentLogo = edenLogo
        break
    }

    return currentLogo
  }

  const sizeType = renderSize(size)
  const positionType = renderPosition(position)
  const logoType = renderLogo(logo)

  return (
    <LogoStyles id="logo" className={`${sizeType} ${positionType}`}>
      <Link href="/">
        <img className={`logo ${sizeType}`} src={logoType} height="60px" />
      </Link>
    </LogoStyles>
  )
}
