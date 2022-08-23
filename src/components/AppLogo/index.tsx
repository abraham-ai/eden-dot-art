// CSS
import { Box, styled, Tooltip } from '@mui/material';

// COMPONENTS
import Link from 'next/link';

const LogoStyles = styled('div')(
  ({ theme }) => `
  flex: 0;
  a {
    text-decoration: none !important;
    border: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a:hover {
    background: transparent;
  }
  a.middle {
    display: flex;
    align-items: center;
  }
  a img.x-small {
    max-height: 40px !important;
    max-width: 40px !important;
  }
  a img.small {
    max-height: 45px !important;
    max-width: 45px !important;
  }
  a img.medium {
    min-height: 50px;
    min-width: 50px;
  }
  a img.large {
    min-height: 150px;
    min-width: 150px;
  }
  a img.x-large {
    min-height: 200px;
    min-width: 200px;
  }
  a img.xx-large {
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
`
);

export default function AppLogo({
  size = 'medium',
  position = 'middle',
  logo = 'abraham'
}) {
  const abrahamLogo =
    'https://res.cloudinary.com/react-graphql-store/image/upload/v1637103749/abraham_uuknth.png';
  const edenLogo =
    'https://res.cloudinary.com/react-graphql-store/image/upload/v1659514317/eden_logo_transparent_z62wfi.png';

  function renderSize(size) {
    switch (size) {
      case 'x-small':
        return 'x-small';
      case 'small':
        return 'small';
      case 'medium':
        return 'medium';
      case 'large':
        return 'large';
      case 'x-large':
        return 'x-large';
      default:
        return 'medium';
    }
  }

  function renderPosition(position) {
    let currentPosition;

    switch (position) {
      case 'left':
        currentPosition = 'left';
        break;
      case 'middle':
        currentPosition = 'middle';
        break;
      case 'right':
        currentPosition = 'right';
        break;
      default:
        currentPosition = 'middle';
        break;
    }
    return currentPosition;
  }

  function renderLogo(logo) {
    let currentLogo;

    switch (logo) {
      case 'abraham':
        currentLogo = abrahamLogo;
        break;
      case 'eden':
        currentLogo = edenLogo;
        break;
      default:
        currentLogo = edenLogo;
        break;
    }

    return currentLogo;
  }

  const sizeType = renderSize(size);
  const positionType = renderPosition(position);
  const logoType = renderLogo(logo);

  return (
    <LogoStyles id="logo" className={`${sizeType} ${positionType}`}>
      <Link href="/">
        <img className={`logo ${sizeType}`} src={logoType} height="60px" />
      </Link>
    </LogoStyles>
  );
}
