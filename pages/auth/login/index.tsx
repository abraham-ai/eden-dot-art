import { Box, Card, Typography, Container, styled } from '@mui/material';
import Head from 'next/head';
import { Guest } from 'src/components/Guest';
import { LoginAuth0 } from 'src/content/Auth/Login/LoginAuth0';
import Logo from 'src/components/LogoSign';
import BaseLayout from 'src/layouts/BaseLayout';
import Link from 'src/components/Link';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  () => `
  display: flex;
  width: 100%;
  flex: 1;
  padding: 20px;
`
);

function LoginBasic() {
  return (
    <>
      <Head>
        <title>Login - Basic</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="sm">
            <Logo />
            <Card
              sx={{
                mt: 3,
                px: 4,
                pt: 5,
                pb: 3
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1
                  }}
                >
                  {'Sign in'}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {'Fill in the fields below to sign into your account.'}
                </Typography>
              </Box>
              <LoginAuth0 />
              <Box my={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {'Don’t have an account, yet?'}
                </Typography>{' '}
                <Link href={'/auth/register/basic'}>
                  <b>Sign up here</b>
                </Link>
              </Box>
            </Card>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

LoginBasic.getLayout = (page) => (
  <Guest>
    <BaseLayout>{page}</BaseLayout>
  </Guest>
);

export default LoginBasic;
