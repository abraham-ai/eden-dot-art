import {
  Box,
  Card,
  Button,
  styled,
  CardHeader,
  Switch,
  CardContent,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline
} from '@mui/material';
import type { ReactElement } from 'react';

// COMPONENTS
import Link from '@/components/Link';
import Head from 'next/head';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

// PAGES
import FrontPage from '@/components/FrontPage';

// CSS
import BaseLayout from 'src/layouts/BaseLayout';

// ROUTES
import { ROUTES } from '@/const/routes';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview({ changeTheme, isDarkTheme }) {
  return (
    <OverviewWrapper>
      <Head>
        <title>Eden.Art</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Link href={ROUTES.TEST.HOME} sx={{ ml: 2 }}>
                  DEV GARDEN
                </Link>
              </Box>
              <Box>
                <Link href={ROUTES.TEST.HOME} sx={{ ml: 2 }}>
                  IDEAS
                </Link>
              </Box>
              <Box>
                <Link href={ROUTES.TEST.HOME} sx={{ ml: 2 }}>
                  APPS
                </Link>
              </Box>
              <Box>
                <Link href={ROUTES.TEST.HOME} sx={{ ml: 2 }}>
                  FAQ
                </Link>
              </Box>
              <CardHeader
                action={
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={isDarkTheme} onChange={changeTheme} />
                      }
                      label="🌙"
                    />
                  </FormGroup>
                }
              />
              <Box>
                <Button
                  component={Link}
                  href={ROUTES.TEST.HOME}
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  To App
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <FrontPage />
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement, props) {
  return <BaseLayout {...props}>{page}</BaseLayout>;
};
