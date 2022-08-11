import Head from 'next/head';
import Footer from '@/components/Footer';
import { Container } from '@mui/material';
import { Authenticated } from 'src/components/Authenticated';

import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

function DashboardTasks() {
  return (
    <>
      <Head>
        <title>Tasks Dashboard</title>
      </Head>
      <Container maxWidth="lg">hey</Container>
      <Footer />
    </>
  );
}

DashboardTasks.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardTasks;
