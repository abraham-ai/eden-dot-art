import Head from 'next/head';

// NAV
import Footer from '@/components/Footer';
import ExtendedSidebarLayout from '@/layouts/ExtendedSidebarLayout';

// UI
import {
  Button,
  Container,
  Typography,
  IconButton,
  styled
} from '@mui/material';

// COMPONENTS
import { useAccount } from 'wagmi';
import BasicCard from '@/components/BasicCard';

// ICONS
import { FaDiscord, FaGithub } from 'react-icons/fa';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EdenIdeasPageStyles = styled('section')(
  () => `
  display: flex;
  flex-direction: column;
  .card-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .welcome-wrapper {
    display: flex;
    padding: 50px 0 20px 0;
  }
  .welcome-divider {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 0 0 50px;
  }
  .card-list-wrapper {
    display: flex;
    justify-content: flex-start;
  }
  .basic-card-wrapper {
    display: flex;
    flex: 1;
    padding: 5px;
    max-width: 395px;
  }
  .dev-garden-cta {
    padding: 50px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  `
);

function EdenIdeasPage() {
  const { address, isConnected } = useAccount();

  return (
    <>
      <Head>
        <title>Eden.Dev | Garden</title>
      </Head>
      <EdenIdeasPageStyles>
        <Container maxWidth="lg">
          <div className="welcome-wrapper">
            <div className="welcome-divider" style={{ paddingLeft: 0 }}>
              <Typography variant={'h1'}>WELCOME BUILDERS!</Typography>
            </div>
            <div className="welcome-divider">
              <Typography variant={'body2'}>
                The
                <Typography
                  variant={'body1'}
                  style={{
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginLeft: 5,
                    marginRight: 5
                  }}
                >
                  Eden Developers ecosystem
                </Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis explore our algorithms and and front
                end experiences.
              </Typography>
            </div>

            <div className="welcome-divider">
              <Typography variant={'body1'}>
                So where to begin? Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo, and let us know what you
                think.
              </Typography>
              <Typography variant={'h4'} style={{ paddingTop: 15 }}>
                Let's build creative ML tools!
              </Typography>
            </div>
          </div>

          <div className="card-list-wrapper">
            <div className="basic-card-wrapper">
              <BasicCard
                title="FAST PROTOTYPING"
                highlight="LEARN MORE"
                description="lorem ipsum dolor"
              />
            </div>

            <div className="basic-card-wrapper">
              <BasicCard
                title="CRYPTO-INTEGRATION"
                highlight="LEARN MORE"
                description="lorem ipsum dolor"
              />
            </div>

            <div className="basic-card-wrapper">
              <BasicCard
                title="CROSS-COLLABORATION"
                highlight="LEARN MORE"
                description="lorem ipsum dolor"
              />
            </div>

            <div className="basic-card-wrapper">
              <BasicCard
                title="OPEN SOURCE"
                highlight="LEARN MORE"
                description="lorem ipsum dolor"
              />
            </div>

            <div className="basic-card-wrapper">
              <BasicCard
                title="CURATOR"
                highlight="LEARN MORE"
                description="lorem ipsum dolor"
              />
            </div>

            <div className="basic-card-wrapper">
              <BasicCard
                title="INSIGHTS"
                highlight="LEARN MORE"
                description="lorem ipsum dolor"
              />
            </div>

            <div className="basic-card-wrapper">
              <BasicCard
                title="VIDEO"
                highlight="LEARN MORE"
                description="lorem ipsum dolor"
              />
            </div>

            <div className="basic-card-wrapper">
              <BasicCard
                title="GAMING"
                highlight="LEARN MORE"
                description="lorem ipsum dolor"
              />
            </div>
          </div>

          <div className="dev-garden-cta">
            <Typography variant={'h2'}>
              WHAT WILL YOU BUILD WITH EDEN?
            </Typography>
            <Typography variant={'h4'}>
              Compute, Scalability, and Scaffolding made <b>easy</b>.
            </Typography>
            <Button variant={'contained'}>VISIT THE DEVELOPER GARDEN</Button>
          </div>
        </Container>
      </EdenIdeasPageStyles>

      <Footer />
    </>
  );
}

EdenIdeasPage.getLayout = (page) => (
  <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
);

export default EdenIdeasPage;