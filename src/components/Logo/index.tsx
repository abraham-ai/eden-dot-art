// MUI
import { Box, styled } from '@mui/material' // Tooltip

// COMPONENTS
import Link from 'src/components/Link'

// ICONS
import AppLogo from '../AppLogo/AppLogo'

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};

        &:hover {
          text-decoration: none;
        }
`,
)

const LogoSignWrapper = styled(Box)(
  () => `
        display: flex;
        align-items: center;
`,
)

// const LogoTextWrapper = styled(Box)(
//   ({ theme }) => `
//         padding-left: ${theme.spacing(1)};
//         display: 'flex';
//         align-items: center;
// `,
// )

// const VersionBadge = styled(Box)(
//   ({ theme }) => `
//         background: ${theme.palette.success.main};
//         color: ${theme.palette.success.contrastText};
//         padding: ${theme.spacing(0.4, 1)};
//         border-radius: ${theme.general.borderRadiusSm};
//         text-align: center;
//         display: inline-block;
//         line-height: 1;
//         font-size: ${theme.typography.pxToRem(11)};
// `,
// )

// const typeColor = '#111'

// const LogoText = styled(Box)(
//   ({ theme }) => `
//         color: ${typeColor};
//         font-size: ${theme.typography.pxToRem(15)};
//         font-weight: ${theme.typography.fontWeightBold};
// `,
// )

function Logo() {
  // { name = 'Eden' }
  return (
    <LogoWrapper href="/">
      <LogoSignWrapper>
        {/* <EnergySavingsLeafIcon
          fontSize="large"
          sx={{ color: 'rgb(171, 254, 44)', fontSize: 50 }}
        /> */}
        <AppLogo logo="eden" size="x-small" />
        {/* <LogoSign>
          <LogoSignInner />
        </LogoSign> */}
      </LogoSignWrapper>

      {/* <Box
        component="span"
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
        }}
      >
        <LogoTextWrapper>
          <Tooltip title="Private Beta" arrow placement="right">
            <VersionBadge>Beta</VersionBadge>
          </Tooltip>
          <LogoText>{name}</LogoText>
        </LogoTextWrapper>
      </Box> */}
    </LogoWrapper>
  )
}

export default Logo
