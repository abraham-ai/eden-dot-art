import { Box, styled, Tooltip } from '@mui/material';
import Link from 'src/components/Link';

// ICONS
import AppLogo from '../AppLogo';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

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
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        display: flex;
        align-items: center;
`
);

const LogoSign = styled(Box)(
  ({ theme }) => `
        background: ${theme.general.reactFrameworkColor};
        width: 18px;
        height: 18px;
        border-radius: ${theme.general.borderRadiusSm};
        position: relative;
        transform: rotate(45deg);
        top: 3px;
        left: 17px;

        &:after, 
        &:before {
            content: "";
            display: block;
            width: 18px;
            height: 18px;
            position: absolute;
            top: -1px;
            right: -20px;
            transform: rotate(0deg);
            border-radius: ${theme.general.borderRadiusSm};
        }

        &:before {
            background: ${theme.palette.primary.main};
            right: auto;
            left: 0;
            top: 20px;
        }

        &:after {
            background: ${theme.palette.secondary.main};
        }
`
);

const LogoSignInner = styled(Box)(
  ({ theme }) => `
        width: 16px;
        height: 16px;
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 5;
        border-radius: ${theme.general.borderRadiusSm};
        background: ${theme.header.background};
`
);

const LogoTextWrapper = styled(Box)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        display: 'flex';
        align-items: center;
`
);

const VersionBadge = styled(Box)(
  ({ theme }) => `
        background: ${theme.palette.success.main};
        color: ${theme.palette.success.contrastText};
        padding: ${theme.spacing(0.4, 1)};
        border-radius: ${theme.general.borderRadiusSm};
        text-align: center;
        display: inline-block;
        line-height: 1;
        font-size: ${theme.typography.pxToRem(11)};
`
);

const LogoText = styled(Box)(
  ({ theme }) => `
        font-size: ${theme.typography.pxToRem(15)};
        font-weight: ${theme.typography.fontWeightBold};
`
);

function Logo() {
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
      <Box
        component="span"
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center'
        }}
      >
        <LogoTextWrapper>
          <Tooltip title="Private Beta" arrow placement="right">
            <VersionBadge>Beta</VersionBadge>
          </Tooltip>
          <LogoText>Eden</LogoText>
        </LogoTextWrapper>
      </Box>
    </LogoWrapper>
  );
}

export default Logo;
