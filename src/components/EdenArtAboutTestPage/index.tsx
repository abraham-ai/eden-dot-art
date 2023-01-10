import React from 'react'

// ROUTING
import Link from 'next/link'
// import { NavLink, Link } from 'react-router-dom';

// UI
import {
  Button,
  Typography,
  Box,
  styled,
  Container,
  Card,
  CardMedia,
} from '@mui/material'
// import { BuildTwoTone, GithubOutlined } from '@ant-design/icons';

// ICONS
import { AiFillApi } from 'react-icons/ai'

import { FaRobot, FaTiktok, FaDiscord, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

import MemoryIcon from '@mui/icons-material/Memory'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import AppShortcutIcon from '@mui/icons-material/AppShortcut'

// ROUTES

// DESIGN
import NetworkVector1 from '@/components/NetworkVector1'
import NetworkVector2 from '@/components/NetworkVector2'

// COMPONENTS
import AppLogo from '@/components/AppLogo'
// import VectorPerspectiveGrid from '@/components/VectorPerspectiveGrid'
import Subscribe from '@/components/Subscribe'
// EdenHeader,
// FollowUs

const EdenArtAboutTestPageStyles = styled('section')(
  () => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 50px;
  background: white;
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
    padding: 0;
  }
  @media (min-width: 1280px) {
    .section-wrapper {
      max-width: unset; 
    }
  }
  @media (min-width: 600px) {
    .section-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .section-center-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* SPLASH TEXT INFO */
  .splash-garden-card {
    opacity: 0.2;
  }
  .splash-garden-card:hover {
    opacity: 1;
  }
  fontSize: '1.5rem';
  /* HIGHLIGHT */
  .highlight {
    padding: 50px 0 100px 0;
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
  }
  .info-wrapper .button-wrapper {
    padding: 50px 0;
    display: flex;
    z-index: 20;
  }
  .info-wrapper .more-description {
    max-width: 600px;
    z-index: 20;
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
    background: #8C7CF0;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .apps-text .text {
    padding: 7px;
    text-align: center;
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
`,
)

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
  )
}

export default function EdenArtAboutTestPage() {
  return (
    <EdenArtAboutTestPageStyles>
      <div className="home-wrapper">
        <section className="section-wrapper">
          <div
            className="section-center-wrapper"
            style={{ paddingBottom: 100 }}
          >
            <div
              className="logo-wrapper"
              style={{
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              {/* <AppLogo logo="eden" size="large" position="middle" /> */}
            </div>

            <Typography
              variant={'h4'}
              sx={{
                fontSize: '1rem',
                fontWeight: 'bolder',
                padding: '30px 0',
                color: '#8C7CF0;',
                background:
                  'linear-gradient(45deg, rgb(97, 87, 255) 0%, rgb(0, 204, 255) 100%) text',
                zIndex: 50,
              }}
            >
              Image Synthesis Engine
            </Typography>

            <Typography
              variant={'h1'}
              sx={{ fontSize: '2.6rem', pb: 3, color: '#0c163b', zIndex: 50 }}
            >
              {/* '#8C7CF0 */}
              <div>
                Garden of{' '}
                <span className="artificial">
                  <span className="underline"></span>
                  <span className="art">art</span>
                </span>
                <span>ificial</span>
                <span> delights</span>
              </div>{' '}
            </Typography>

            <Typography
              className="splash-text-description"
              variant={'h3'}
              sx={{
                fontSize: '1.3rem',
                textAlign: 'center',
                maxWidth: 700,
                lineHeight: 2,
                zIndex: 50,
                color: '#0c163b',
              }}
            >
              {/* 'rgb(166, 166, 166)' */}
              we are Artworks, Digital Paintings, Apps, Video Clips, Stories,
              and much more. We are your mobile{' '}
              <span
                style={{
                  color: '#8C7CF0',
                  textDecoration: 'underline',
                }}
              >
                AI toolkit
              </span>{' '}
              to help you express yourself and make your everyday more
              delightful.
            </Typography>

            <Container
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <CardMedia
                className="eden-splash-video"
                sx={{
                  position: 'absolute',
                  bottom: '-450px',
                  maxWidth: '600px',
                  zIndex: 40,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="eden video"
                // autoPlay
                // mute
              />

              <article
                className="button-wrapper"
                style={{ display: 'flex', paddingTop: 50, zIndex: 50 }}
              >
                <Box>
                  <Button
                    href={'/creations'}
                    variant="contained"
                    sx={{ ml: 2, minWidth: '200px' }}
                  >
                    Browse Creations
                  </Button>
                </Box>

                <Box>
                  <Button
                    href={'/creations'}
                    variant="outlined"
                    sx={{ ml: 2, minWidth: '200px' }}
                  >
                    Join Discord
                  </Button>
                </Box>
              </article>
            </Container>
          </div>
          <Card
            className="splash-garden-card"
            sx={{
              maxWidth: 200,
              position: 'absolute',
              top: '60px',
              zIndex: 0,
              left: 0,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://minio.aws.abraham.fun/creations-prd//29a67e4ee022bd6497c77ff6ad119257cd50af42209178240011dd81298854dc"
              alt="flower"
            />
          </Card>

          <Card
            className="splash-garden-card"
            sx={{
              maxWidth: 250,
              position: 'absolute',
              bottom: 0,
              zIndex: 0,
              left: '8%',
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://minio.aws.abraham.fun/creations-prd//f184148b763de85153e794ce662c3dfec28f79ca23c958889f8692dd510de705"
              alt="animals"
            />
          </Card>

          <Card
            className="splash-garden-card"
            sx={{
              maxWidth: 200,
              position: 'absolute',
              top: '-15%',
              zIndex: 0,
              left: '18%',
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://minio.aws.abraham.fun/creations-prd//76201d976e504d3511cda2475ce0e43f56d231abe931c28142f8e5aa6f04bf9d"
              alt="fairy"
            />
          </Card>

          <Card
            className="splash-garden-card"
            sx={{
              maxWidth: 300,
              position: 'absolute',
              bottom: '50%',
              zIndex: 0,
              right: '5%',
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://minio.aws.abraham.fun/creations-prd//3a4cbfe59d568d2b74ec792d513632eeb60eeae8b2c803f173afa1c6d017a02b"
              alt="Paella dish"
            />
          </Card>

          <Card
            className="splash-garden-card"
            sx={{
              maxWidth: 180,
              position: 'absolute',
              bottom: '-10%',
              zIndex: 0,
              right: '8%',
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://minio.aws.abraham.fun/creations-prd//207a9dea558d2bf71b2aa89ebf53f5d6a561a2c6b43c176a71132b1b8280a3d5"
              alt="bosch birds"
            />
          </Card>

          <Card
            className="splash-garden-card"
            sx={{
              maxWidth: 230,
              position: 'absolute',
              top: '-28%',
              zIndex: 0,
              right: 0,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://minio.aws.abraham.fun/creations-prd//a4bd02030fe493513d86ba880f2d9b821ee189e89b2db05f6f7418998dc9e34b"
              alt="dragon"
            />
          </Card>
        </section>

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

        <Container className="section-wrapper" sx={{ pl: 0, pr: 0, mt: 9 }}>
          <NetworkVector1 />
          <NetworkVector2 />
          <div className="highlight">
            <Container
              className="info-wrapper"
              sx={{ margin: '250px 0 0 0', pl: 0, pr: 0, maxWidth: 600 }}
            >
              {/* <Typography
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
              </Typography> */}

              <Typography
                className="more-description"
                variant={'h4'}
                sx={{
                  fontSize: '1.5rem',
                  lineHeight: 1.5,
                  color: 'rgb(0 80 30)',
                  textAlign: 'center',
                  pb: 8,
                }}
              >
                <div>EDEN</div>
                is the AI first{' '}
                <span style={{ position: 'relative', zIndex: 10 }}>
                  <span style={{ position: 'relative', zIndex: 10 }}>
                    creation engine
                  </span>
                  <span className="underline" style={{ zIndex: 0 }}></span>
                </span>{' '}
                that generates <br />
                your world. From text-to-image tools, video clip making apps,
                multiplayer art systems <br /> and everything in between.
              </Typography>

              <Typography
                className="more-description"
                variant={'h4'}
                sx={{
                  fontSize: '1.5rem',
                  lineHeight: 1.5,
                  color: 'rgb(0 80 30)',
                  textAlign: 'center',
                  pb: 8,
                }}
              >
                We are the platform where you can find the AI content you are
                passionate about — whether it be style modifiers for your
                prompts, looping GIFs, quick editing tools to tell your Stories,
                or conversation-starting Clips content.
              </Typography>

              <Typography
                className="more-description"
                variant={'h4'}
                sx={{
                  fontSize: '1.5rem',
                  lineHeight: 1.5,
                  color: 'rgb(0 80 30)',
                  textAlign: 'center',
                }}
              >
                Whether you‘re a creator, content partner, developer, or artist
                — you name it — EDEN is home to the content making your
                conversations and stories more positive, more fun, and more you.
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
            </Container>
          </div>
        </Container>

        <Container className="section-wrapper" sx={{ mt: 0, pl: 0, pr: 0 }}>
          <Container className="info-wrapper" sx={{ m: 0, pl: 5, pr: 5 }}>
            {/* <Typography
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
              </Typography> */}
            <Box
              className="our-philosophies"
              sx={{
                maxWidth: 600,
                pb: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CardMedia
                className="eden-splash-video"
                sx={{
                  position: 'absolute',
                  top: '-45px',
                  maxWidth: '150px',
                  zIndex: 40,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="eden video"
                // autoPlay
                // mute
              />

              <Typography
                className="more-description"
                variant={'h4'}
                sx={{
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: 'white',
                  pt: 3,
                  textAlign: 'center',
                }}
              >
                Our Philosophies
              </Typography>
              <Typography
                className="more-description"
                variant={'h4'}
                sx={{
                  fontSize: '1.5rem',
                  lineHeight: 1.5,
                  color: '#0C163B',
                  textAlign: 'center',
                  pt: 3,
                }}
              >
                This is what we believe. These philosophies guide our approach
                to EDEN's community, culture, and products.
              </Typography>
            </Box>

            <Box sx={{ p: 5, display: 'flex' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  pr: 5,
                }}
              >
                <Typography
                  className="more-description"
                  variant={'h3'}
                  sx={{
                    fontSize: '1.5rem',
                    lineHeight: 1.5,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  People Before Product
                </Typography>
                <Typography
                  className="more-description"
                  variant={'h4'}
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    textAlign: 'center',
                    color: 'rgb(166, 166, 166)',
                  }}
                >
                  The most important product we can ever develop is our people.
                  People make products, people use products, we are a people
                  company.
                </Typography>
              </Box>

              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '400px',
                  zIndex: 40,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="eden video"
                // autoPlay
                // mute
              />
            </Box>

            <Box sx={{ p: 5, display: 'flex' }}>
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '400px',
                  zIndex: 40,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="eden video"
                // autoPlay
                // mute
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  pl: 5,
                }}
              >
                <Typography
                  className="more-description"
                  variant={'h3'}
                  sx={{
                    fontSize: '1.5rem',
                    lineHeight: 1.5,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Community Before Corporation
                </Typography>
                <Typography
                  className="more-description"
                  variant={'h4'}
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    color: 'rgb(166, 166, 166)',
                    textAlign: 'center',
                  }}
                >
                  The most important product we can ever develop is our people.
                  People make products, people use products, we are a people
                  company.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ p: 5, display: 'flex' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  pr: 3,
                }}
              >
                <Box
                  maxWidth={600}
                  sx={{
                    pr: 5,
                  }}
                >
                  <Typography
                    className="more-description"
                    variant={'h3'}
                    sx={{
                      fontSize: '1.5rem',
                      lineHeight: 1.5,
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    Relationships Before Process
                  </Typography>
                  <Typography
                    className="more-description"
                    variant={'h4'}
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      color: 'rgb(166, 166, 166)',
                      textAlign: 'center',
                    }}
                  >
                    The most important product we can ever develop is our
                    people. People make products, people use products, we are a
                    people company.
                  </Typography>
                </Box>
              </Box>

              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '400px',
                  zIndex: 40,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="eden video"
                // autoPlay
                // mute
              />
            </Box>
          </Container>
        </Container>

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
              <MemoryIcon sx={{ fontSize: 70, color: '#0c163b' }} />
              <span className="separator" />

              <CloudQueueIcon sx={{ fontSize: 70, color: '#0c163b' }} />
              <span className="separator" />

              <AppShortcutIcon sx={{ fontSize: 70, color: '#0c163b' }} />
            </div>

            <div id="description">
              {/* <Text level={5}>Eden is an open project providing</Text> */}
              <Typography variant={'h3'} sx={{ color: '#0c163b' }}>
                Compute, scaling, and scaffolding
              </Typography>
              <Typography variant={'h3'} sx={{ color: '#0c163b' }}>
                for machine learning model creators.
              </Typography>
            </div>
          </div>
        </section>

        <div className="apps-wrapper">
          <div className="apps-text" style={{ marginBottom: 30 }}>
            <span className="separator" />
            <Typography
              className="text"
              variant={'h3'}
              sx={{ color: '#0c163b' }}
            >
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
                  icon={<AiFillApi style={{ fontSize: '3rem' }} />}
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
            <CardMedia
              className="eden-splash-video"
              sx={{
                maxWidth: '150px',
                zIndex: 40,
                m: 5,
              }}
              component="img"
              image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
              alt="eden video"
              // autoPlay
              // mute
            />
            <span className="separator" />
          </div>
          <Container
            className="section-wrapper"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              className="text"
              variant={'h3'}
              sx={{ fontSize: '2rem', color: 'white' }}
            >
              Connect with Us
            </Typography>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}
            >
              <Link href="/">
                <FaTwitter
                  style={{
                    margin: '10px',
                    fontSize: '1.6rem',
                    color: '#8C7CF0',
                  }}
                />
              </Link>
              <Link href="/">
                <AiFillInstagram
                  style={{
                    margin: '10px',
                    fontSize: '1.6rem',
                    color: '#8C7CF0',
                  }}
                />
              </Link>
              <Link href="/">
                <FaTiktok
                  style={{
                    margin: '10px',
                    fontSize: '1.6rem',
                    color: '#8C7CF0',
                  }}
                />
              </Link>
              <Link href="/">
                <FaDiscord
                  style={{
                    margin: '10px',
                    fontSize: '1.6rem',
                    color: '#8C7CF0',
                  }}
                />
              </Link>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant={'h4'}
                  sx={{ fontSize: '1.2rem', p: 1, color: '#0c163b' }}
                >
                  Do you have a press inquiry?
                </Typography>
                <Typography
                  variant={'body1'}
                  sx={{ fontSize: '1rem', p: 1, color: '#0c163b' }}
                >
                  Email us at{' '}
                  <Link href="/" style={{ color: '#8C7CF0' }}>
                    press@eden.art
                  </Link>
                </Typography>
              </Box>

              <Box sx={{ p: 2 }}>
                <Typography
                  variant={'h4'}
                  sx={{
                    fontSize: '1.2rem',
                    p: 1,
                    maxWidth: 300,
                    color: '#0c163b',
                  }}
                >
                  Have an account or product question?
                </Typography>
                <Typography
                  variant={'body1'}
                  sx={{
                    fontSize: '1rem',
                    p: 1,
                    maxWidth: 300,
                    color: '#0c163b',
                  }}
                >
                  Check out our <Link href="/">support page</Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </div>

        <Container
          className="section-wrapper"
          sx={{
            flexDirection: 'column',
            height: 1000,
            position: 'relative',
            zIndex: 100,
            mt: 5,
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant={'h2'} sx={{ pb: 2, color: '#0c163b' }}>
            Our Team
          </Typography>

          <Typography
            variant={'h4'}
            maxWidth={1}
            sx={{
              fontSize: '1.5rem',
              color: '#0c163b',
              // color: 'rgb(166, 166, 166)',
              maxWidth: 600,
              pb: 5,
            }}
          >
            Eden is an independent research lab exploring new mediums of thought
            and expanding the imaginative powers of the human species. We are a
            small self-funded team focused on design, human infrastructure, and
            AI. We have 7 core contributors and an incredible set of advisors.
          </Typography>

          <div
            style={{
              position: 'relative',
              height: 500,
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                position: 'absolute',
                height: 500,
                bottom: 0,
              }}
            >
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '250px',
                  zIndex: 40,
                  m: 2,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="Gene"
              />
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '250px',
                  zIndex: 40,
                  m: 1,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="Xander Stenbergue"
              />
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '250px',
                  zIndex: 40,
                  m: 2,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="Vanessa"
              />
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '250px',
                  zIndex: 40,
                  m: 3,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="Daniel"
              />
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '250px',
                  zIndex: 40,
                  m: 5,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="Mayuhk"
              />
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '250px',
                  zIndex: 40,
                  m: 1,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="Nico"
              />
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '250px',
                  zIndex: 40,
                  m: 1,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="Jmill"
              />
              <CardMedia
                className="eden-splash-video"
                sx={{
                  maxWidth: '250px',
                  zIndex: 40,
                  m: 1,
                }}
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="Moises"
              />
            </Box>
          </div>
        </Container>

        <Container
          className="section-wrapper"
          sx={{ flexDirection: 'column', mt: 5, justifyContent: 'flex-start' }}
        >
          <Typography variant={'h3'} sx={{ pb: 2, color: 'white' }}>
            Subscribe to our Newsletter
          </Typography>
          <Subscribe />
        </Container>

        {/* <section className="splash-wrapper">
          <VectorPerspectiveGrid />
        </section> */}

        {/* <div className="apps-wrapper">
          <div className="apps-text">
            <span className="separator" />
            
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
    </EdenArtAboutTestPageStyles>
  )
}
