import React from 'react';

// ROUTING
import Link from 'next/link';
// import { NavLink, Link } from 'react-router-dom';

// UI
import { Button, Typography, Box, Alert, styled } from '@mui/material';
// import { BuildTwoTone, GithubOutlined } from '@ant-design/icons';

// ICONS
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { FaRobot } from 'react-icons/fa';

import MemoryIcon from '@mui/icons-material/Memory';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

// ROUTES
import { ROUTES } from 'src/const/routes';

// DESIGN
import NetworkVector1 from '@/components/NetworkVector1';
import NetworkVector2 from '@/components/NetworkVector2';

// COMPONENTS
import AppLogo from '@/components/AppLogo';
import VectorPerspectiveGrid from '@/components/VectorPerspectiveGrid';
import Subscribe from '@/components/Subscribe';
// EdenHeader,
// FollowUs

const EdenDevFrontPageStyles = styled('section')(
  () => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 100px;
  .home-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  /* SECTION */
  .section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  /* HIGHLIGHT */
  .highlight {
    padding: 50px 0;
    background: rgb(171, 254, 44);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
  }
  /* SPLASH */
  .splash-wrapper {
    overflow: hidden;
    display: block;
    height: 1400px;
    z-index: 0;
    position: relative;
  }
  .splash-wrapper svg {
    position: absolute;
    left: -10px;
  }
  .info-wrapper {
    padding: 50px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 600px;
  }
  .info-wrapper .button-wrapper {
    padding: 50px 0;
    display: flex;
  }
  .eden-logotype {
    display: flex;
    justify-content: flex-start;
  }
  .slogan {
    position: relative;
  }
  .slogan .artificial {
    position: relative;
  }
  .slogan .underline {
    height: 10px;
    width: 95%;
    bottom: 15px;
    left: 3px;
    background: #ff2457;
    position: absolute;
  }
  .slogan .art {
    z-index: 10;
    position: relative;
  }
  .visual-description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    padding-bottom: 40px;
  }
  /* OUR APPS */
  .apps-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    margin: 50px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .apps-text {
    position: relative;
    width: 100%;
    margin: 0 0 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .apps-text .text {
    padding: 7px;
    text-align: center;
    font-size: 16px;
    position: relative;
    display: block;
    z-index: 10;
    min-width: 400px;
  }
  .separator {
    top: 50%;
    border-top: 2px solid rgb(171, 254, 44);
    width: 100%;
    display: block;
    z-index: 0;
  }
  .app-list-wrapper {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 680px;
  }
  #mission,
  #description {
    text-align: center;
    line-height: 1.25;
    padding: 0 16px;
    width: auto;
  }
  #mission,
  #description,
  #social {
    font-size: 24px;
    font-weight: 400;
  }
  #mission {
    margin-top: 24px;
  }
  #description {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
  }
  #description .ant-typography {
    text-align: center;
  }
  #github-wrapper {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  /* APPS BUTTONS */
  button.app-link-wrapper {
    min-width: 300px;
    max-width: 300px;
    margin: 8px;
    display: block;
  }
  button .app-link {
    display: flex;
    flex-direction: row;
  }
  button.app-link-wrapper a {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
  button .icon-wrapper {
    display: flex;
    flex: 0;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    padding: 0 30px 0 0;
  }
  button .app-link-info-wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  button .app-link-info-wrapper .tag {
    display: flex;
    justify-content: flex-start;
    text-align: left;
  }
  /* SOCIAL */
  #social {
    margin-top: 20px;
    display: flex;
    width: 100%;
    max-width: 600px;
  }
  #social ul {
    display: flex;
    flex: 1;
    padding: 0;
    align-items: flex-end;
    justify-content: space-around;
    list-style-type: none;
  }
  .follow-us-wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 20px;
  }
  @media (min-width: 40em) {
    /* .home-wrapper {
      max-width: 600px;
    } */
    .slogan {
      max-width: 600px;
    }
    #mission {
      margin-top: 100px;
    }
  }
  @media (min-width: 60em) {
  }
  @media (min-width: 80em) {
  }
`
);

export function AppLink({ title, description, icon }) {
  return (
    <>
      <div className="app-link">
        <span className="icon-wrapper">{icon}</span>
        <span className="app-link-info-wrapper">
          <Typography className="title" variant={'h4'}>
            {title}
          </Typography>
          <Typography className="tag" variant={'body1'}>
            {description}
          </Typography>
        </span>
      </div>
    </>
  );
}

export default function EdenDevFrontPage() {
  return (
    <EdenDevFrontPageStyles>
      <div className="home-wrapper">
        <div
          className="logo-wrapper"
          style={{ justifyContent: 'center', display: 'flex' }}
        >
          {/* <Logo logo="eden" size="x-large" position="middle" /> */}
        </div>

        {/* <div
          style={{
            width: '300px',
            height: '300px',
            overflow: 'hidden'
          }}
        >
          <video
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
            src="https://res.cloudinary.com/react-graphql-store/video/upload/v1633390556/49_flowers_field_with_dark_smartphones_growing_f9el26.mp4"
          />
        </div> */}

        {/* <div style={{ width: 400, height: 300 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="smallGrid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
              <pattern
                id="grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <rect width="80" height="80" fill="url(#smallGrid)" />
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div> */}

        <section className="section-wrapper">
          <NetworkVector1 />
          <NetworkVector2 />
          <div className="highlight">
            <section className="info-wrapper">
              <Typography
                className="eden-logotype"
                variant={'h3'}
                style={{
                  fontSize: '35px',
                  lineHeight: 1,
                  textAlign: 'left',
                  color: 'rgb(0 80 30)'
                }}
              >
                EDEN
              </Typography>
              <Typography
                className="slogan"
                variant={'h4'}
                style={{
                  fontSize: '70px',
                  lineHeight: 1,
                  color: 'rgb(0 80 30)'
                }}
              >
                Garden of{' '}
                <div>
                  <span className="artificial">
                    <span className="underline"></span>
                    <span className="art">art</span>
                  </span>
                  <span>ificial</span>
                  <span> delights</span>
                </div>{' '}
              </Typography>
              <article className="button-wrapper">
                <Box>
                  <Button
                    href={'/creations'}
                    variant="contained"
                    sx={{ ml: 2 }}
                  >
                    Create with Eden
                  </Button>
                </Box>

                <Box>
                  <Button
                    href={'/creations'}
                    variant="contained"
                    sx={{ ml: 2 }}
                  >
                    Join Discord
                  </Button>
                </Box>
              </article>
            </section>
          </div>
        </section>

        {/* <section className="section-wrapper">
          <div className="info-wrapper">
            <div className="visual-description">
              <MemoryIcon sx={{ fontSize: 70 }} />
              <span className="separator" />

              <CloudQueueIcon sx={{ fontSize: 70 }} />
              <span className="separator" />

              <AppShortcutIcon sx={{ fontSize: 70 }} />
            </div>

            <div id="description">
              <Typography variant={'h3'}>Tools & APIs</Typography>
              <Typography variant={'h3'}>
                UX friendly creative tools for Proffesional Experienced Creators
              </Typography>
            </div>
          </div>
        </section> */}

        <section className="section-wrapper">
          <div className="info-wrapper">
            <div className="visual-description">
              <MemoryIcon sx={{ fontSize: 70 }} />
              <span className="separator" />

              <CloudQueueIcon sx={{ fontSize: 70 }} />
              <span className="separator" />

              <AppShortcutIcon sx={{ fontSize: 70 }} />
            </div>

            <div id="description">
              {/* <Text level={5}>Eden is an open project providing</Text> */}
              <Typography variant={'h3'}>
                Compute, scaling, and scaffolding
              </Typography>
              <Typography variant={'h3'}>
                for machine learning model creators.
              </Typography>
            </div>
          </div>
        </section>

        <div className="apps-wrapper">
          <div className="apps-text">
            <span className="separator" />
            <Typography className="text" variant={'h3'}>
              Our growing ecosysten of AI Apps and tools
            </Typography>
            <span className="separator" />
          </div>

          <div className="app-list-wrapper">
            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Abraham Create"
                  description="AI Autonomous Decentralized Artist"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="collage.abraham.ai">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Abraham Collage"
                  description="AI Canvas Generation Tool"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/garden">
                <AppLink
                  icon={<AppLogo logo="eden" />}
                  title="Eden Browse"
                  description="AI Model Garden"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/garden">
                <AppLink
                  icon={<FaRobot size="2em" color="#ff5349" />}
                  title="Marsbots Core"
                  description="Open Source Chatbot Library"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/garden">
                <AppLink
                  icon={<FaRobot size="2em" color="#ff5349" />}
                  title="Marsbot Launcher"
                  description="Opinionated Library to Scale Marsbots Core"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="APIs"
                  description="Scalable inferencing and compute"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="TouchDesigner Pluging"
                  description="SDK Integration for interactive inferencing"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Create Tools with Eden"
                  description="Get started with our Docs and build"
                />
              </Link>
            </Button>
          </div>
        </div>

        <div className="apps-wrapper">
          <div className="apps-text">
            <span className="separator" />
            <Typography className="text" variant={'h3'}>
              Garden of Artificial Delights
            </Typography>
            <span className="separator" />
          </div>
        </div>

        <section className="splash-wrapper">
          <Subscribe />
          <VectorPerspectiveGrid />
        </section>

        {/* <div className="apps-wrapper">
          <div className="apps-text">
            <span className="separator" />
            <Typography className="text" variant={'h3'}>
              Eden is an independent research lab exploring new mediums of
              thought and expanding the imaginative powers of the human species.
              We are a small self-funded team focused on design, human
              infrastructure, and AI. We have 7 core contributors and an
              incredible set of advisors.
            </Typography>
            <span className="separator" />
          </div>

          <div className="app-list-wrapper">
            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Gene Kogan"
                  description="Artist and programmer interested in generative art, collective intelligence, autonomous systems, and computer science."
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="collage.abraham.ai">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Xander Steenbrugge"
                  description="AI researcher, digital artist, public speaker, online educator, and entrepreneur."
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/garden">
                <AppLink
                  icon={<AppLogo logo="eden" />}
                  title="Eden Browse"
                  description="AI researcher, digital artist, public speaker, online educator, and entrepreneur."
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/garden">
                <AppLink
                  icon={<FaRobot size="2em" color="#ff5349" />}
                  title="Marsbots Core"
                  description="Open Source Chatbot Library"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/garden">
                <AppLink
                  icon={<FaRobot size="2em" color="#ff5349" />}
                  title="Marsbot Launcher"
                  description="Opinionated Library to Scale Marsbots Core"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="APIs"
                  description="Scalable inferencing and compute"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="TouchDesigner Pluging"
                  description="SDK Integration for interactive inferencing"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Create Tools with Eden"
                  description="Get started with our Docs and build"
                />
              </Link>
            </Button>
          </div>
        </div> */}

        {/* <div className="follow-us-wrapper">
          Follow Us
          <FollowUs />
        </div> */}
      </div>
    </EdenDevFrontPageStyles>
  );
}
