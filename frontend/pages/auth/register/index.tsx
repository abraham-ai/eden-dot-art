import { Box, Card, Typography, Container, styled } from '@mui/material';
import Head from 'next/head';
import { Guest } from '@/components/Guest';
import { RegisterAuth0 } from 'src/content/Auth/Register/RegisterAuth0';
import Logo from '@/components/symbols/LogoSign';
import BaseLayout from 'src/layouts/BaseLayout';
import Link from '@/components/Link';

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

function RegisterBasic() {
  return (
    <>
      <Head>
        <title>Register - Basic</title>
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
                  {'Create account'}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {'Fill in the fields below to sign up for an account.'}
                </Typography>
              </Box>
              <RegisterAuth0 />
              <Box mt={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {'Already have an account?'}
                </Typography>{' '}
                <Link href={'/auth/login/basic'}>
                  <b>Sign in here</b>
                </Link>
              </Box>
            </Card>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

RegisterBasic.getLayout = (page) => (
  <Guest>
    <BaseLayout>{page}</BaseLayout>
  </Guest>
);

export default RegisterBasic;
