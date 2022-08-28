import Head from 'next/head';

// NAV
import Footer from '@/components/Footer';
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

// UI
import { Button, Container, Typography, Box } from '@mui/material';

// COMPONENTS
import { useAccount } from 'wagmi';

// ICONS
import AddIcon from '@mui/icons-material/Add';

function EdenDevFAQPage() {
  const { address, isConnected } = useAccount();

  return (
    <>
      <Head>
        <title>Eden.Dev | FAQ</title>
      </Head>
      <Container maxWidth="lg">
        <Typography variant={'h2'}>FAQ</Typography>
        {/* {isConnected ? (
          <>
            <Typography variant={'h3'}>
              You are connected with you wallet!
            </Typography>
            <Typography variant={'body1'}>{address}</Typography>
          </>
        ) : (
          <Button variant={'contained'}>Please connect your Wallet</Button>
        )} */}

        {/* <Typography variant={'h2'}>
          A DAO of creative technologists making art, installations and
          softwares with cutting-edge technologies in service to the
          enlightenment of mankind.
        </Typography> */}
        <section
          className="faq-wrapper"
          style={{
            maxWidth: 600,
            minWidth: 600,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>What is Eden.Dev?</Typography>
            <div
              className="icon-wrapper"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>What is Eden.Art?</Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>How Much does Eden.Dev Cost?</Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>Where can I create?</Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>How do I cancel?</Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>What I create on Eden?</Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>Are there any rules?</Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>
              Can I do detailed public reviews of the current beta? Can I post
              screenshots / videos of the Discord?
            </Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>Are you taking investment?</Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>
              I'm a reporter / bloger and want to write something
            </Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>
              Where does your funding come from?
            </Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>
              What's the business model for what we're using here?
            </Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              m: 1,
              minWidth: 600,
              maxWidth: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1
            }}
          >
            <Typography variant={'h3'}>Can I help? Are you hiring?</Typography>
            <div className="icon-wrapper">
              <AddIcon />
            </div>
          </Box>
        </section>
      </Container>
      <Footer />
    </>
  );
}

EdenDevFAQPage.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default EdenDevFAQPage;
