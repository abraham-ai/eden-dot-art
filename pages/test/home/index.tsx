import Head from 'next/head';
import Footer from '@/components/Footer';
import { Button, Container } from '@mui/material';
import { Authenticated } from 'src/components/Authenticated';

import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';
import Link from '@/components/Link';

function DashboardTasks() {
  return (
    <>
      <Head>
        <title>Tasks Dashboard</title>
      </Head>
      <Container maxWidth="lg">
        <Link href="/api/discord/login" passHref>
          <Button>Login with discord</Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}

DashboardTasks.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default DashboardTasks;
