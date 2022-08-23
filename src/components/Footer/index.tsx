import { Box, Container, styled, Typography } from '@mui/material';

// COMPONENTS
import AppLogo from '@/components/AppLogo';
import Link from 'next/link';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
    margin-top: ${theme.spacing(4)};
    .footer-info-section {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .footer-link {
      padding: 8px 0;
    }
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <div className="footer-info-section">
          <AppLogo logo="eden" />
          <Typography variant={'body1'}>Learn</Typography>

          <Link href="/create">
            <Typography className="footer-link" variant={'h4'}>
              Create
            </Typography>
          </Link>
          <Link href="/collect">
            <Typography className="footer-link" variant={'h4'}>
              Collect
            </Typography>
          </Link>
          <Link href="/docs">
            <Typography className="footer-link" variant={'h4'}>
              Documentation
            </Typography>
          </Link>
        </div>

        <div className="footer-info-section">
          <Typography className="footer-link" variant={'body1'}>
            Company
          </Typography>

          <Link href="/about">
            <Typography className="footer-link" variant={'h4'}>
              About
            </Typography>
          </Link>
          <Link href="/help">
            <Typography className="footer-link" variant={'h4'}>
              Help Center
            </Typography>
          </Link>
          <Link href="/subscribe">
            <Typography className="footer-link" variant={'h4'}>
              Subscribe
            </Typography>
          </Link>
        </div>

        <div className="footer-info-section">
          <Typography className="footer-link" variant={'body1'}>
            Connect
          </Typography>
          <Link href="twitter.com">
            <Typography className="footer-link" variant={'h4'}>
              Twitter
            </Typography>
          </Link>
          <Link href="instagram.com">
            <Typography className="footer-link" variant={'h4'}>
              Instagram
            </Typography>
          </Link>
          <Link href="discord.com">
            <Typography className="footer-link" variant={'h4'}>
              Discord
            </Typography>
          </Link>
        </div>

        <div className="footer-info-section">
          <Typography className="footer-link" variant={'body1'}>
            Privacy Policy
          </Typography>
        </div>

        <div className="footer-info-section">
          <Typography className="footer-link" variant={'body1'}>
            Terms of Service
          </Typography>
        </div>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
