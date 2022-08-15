import { Box, Card, Container, Button, styled } from '@mui/material';
import type { ReactElement } from 'react';

import Link from '@/components/Link';
import Head from 'next/head';

import { EdenNavTop } from '@/components';
import { EdenLogo } from '@/components';
import BaseLayout from 'src/layouts/BaseLayout';
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

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Eden</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <EdenLogo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
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
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
