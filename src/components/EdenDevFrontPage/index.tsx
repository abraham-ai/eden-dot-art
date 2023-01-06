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

// COMPONENTS
import AppLogo from '@/components/AppLogo'
// import VectorPerspectiveGrid from '@/components/VectorPerspectiveGrid'
import Subscribe from '@/components/Subscribe'
// EdenHeader,
// FollowUs

const EdenDevFrontPageStyles = styled('section')(
  () => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 50px;
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

export default function EdenDevFrontPage() {
  return (
    <EdenDevFrontPageStyles>
      <div className="home-wrapper">
        <section className="section-wrapper">
          <div
            className="section-center-wrapper"
            style={{ paddingBottom: 100 }}
          >
            <Typography
              variant={'h1'}
              sx={{ fontSize: '2.6rem', pb: 3, color: '#0c163b', zIndex: 50 }}
            >
              {/* '#8C7CF0 */}
              <div>Create, remix, and share AI-generated art</div>
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
              Eden is the garden of artificial delights. We are a community of
              artists, creative technologists, and machine learners building an
              open-source social platform for generative AI.
            </Typography>

            <Container
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <article
                className="button-wrapper"
                style={{ display: 'flex', paddingTop: 50, zIndex: 50 }}
              >
                <Box>
                  <Button
                    href={'https://examples.eden.art'}
                    variant="contained"
                    sx={{ ml: 2, minWidth: '200px' }}
                  >
                    Examples
                  </Button>
                </Box>

                <Box>
                  <Button
                    href={'/garden'}
                    variant="contained"
                    sx={{ ml: 2, minWidth: '200px' }}
                  >
                    Garden
                  </Button>
                </Box>

                <Box>
                  <Button
                    href={'https://discord.gg/4dSYwDT'}
                    variant="contained"
                    sx={{ ml: 2, minWidth: '200px' }}
                  >
                    Discord
                  </Button>
                </Box>

                <Box>
                  <Button
                    href={'https://twitter.com/eden_dot_art'}
                    variant="contained"
                    sx={{ ml: 2, minWidth: '200px' }}
                  >
                    Twitter
                  </Button>
                </Box>

                {/* <Box>
                  <Button
                    href={'/creations'}
                    variant="contained"
                    sx={{ ml: 2, minWidth: '200px' }}
                  >
                    Learn More
                  </Button>
                </Box> */}
              </article>
            </Container>
          </div>
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

            <Box sx={{ p: 5, display: 'flex' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  pr: 5,
                }}
              >
                {/* <Typography
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
                </Typography> */}
                <Typography
                  className="more-description"
                  variant={'h4'}
                  sx={{
                    fontSize: '1.25rem',
                    lineHeight: 1.5,
                    textAlign: 'center',
                    color: 'rgb(166, 166, 166)',
                  }}
                >
                  <i>Eden is for artists.</i> Create and share your art, get
                  inspired, and collaborate with other artists. Own your profile
                  and your creations.
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
                {/* <Typography
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
                </Typography> */}
                <Typography
                  className="more-description"
                  variant={'h4'}
                  sx={{
                    fontSize: '1.25rem',
                    lineHeight: 1.5,
                    color: 'rgb(166, 166, 166)',
                    textAlign: 'center',
                  }}
                >
                  <i>Eden is for developers.</i> Build generative AI
                  applications with ease using our API. Bootstrap your
                  application on top of an existing community and ecosystem.
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
                  {/* <Typography
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
                  </Typography> */}
                  <Typography
                    className="more-description"
                    variant={'h4'}
                    sx={{
                      fontSize: '1.25rem',
                      lineHeight: 1.5,
                      color: 'rgb(166, 166, 166)',
                      textAlign: 'center',
                    }}
                  >
                    <i>Eden is for researchers.</i> Got a new model or a
                    creative use case of an existing one? Upload it to Eden and
                    see what artists do with it.
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

        {/* <div className="apps-wrapper">
          <div className="apps-text" style={{ marginBottom: 30 }}>
            <span className="separator" />
            <Typography
              className="text"
              variant={'h3'}
              sx={{ color: '#0c163b' }}
            >
              Apps made with Eden
            </Typography>
            <span className="separator" />
          </div>

          <div className="app-list-wrapper">

            <Button className="app-link-wrapper">
              <Link href="/garden">
                <AppLink
                  icon={<AppLogo logo="eden" />}
                  title="Garden of Eden"
                  description="Social platform for creators"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/garden">
                <AppLink
                  icon={<FaRobot size="2em" color="#ff5349" />}
                  title="Marsbots"
                  description="Customizable bots for Discord and Twitter"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Abraham"
                  description="Autonomous artificial artist"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="collage.abraham.ai">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Collage"
                  description="Infinite outpainting canvas"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="https://about.alias.studio/">
                <AppLink
                  icon={<FaRobot size="2em" color="#ff5349" />}
                  title="Alias"
                  description="Remixable NFTs"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AiFillApi style={{ fontSize: '3rem' }} />}
                  title="Arcadia"
                  description="Social storytelling platform"
                />
              </Link>
            </Button>

            <Button className="app-link-wrapper">
              <Link href="/creations/all/new">
                <AppLink
                  icon={<AppLogo logo="abraham" />}
                  title="Oracle"
                  description="Deep philosophy with AI"
                />
              </Link>
            </Button>
          </div>
        </div> 

        <div className="apps-wrapper">
          <div className="apps-text">
            <span className="separator" />
            
            <span className="separator" />
          </div>
        </div>*/}

        {/* <div className="follow-us-wrapper">
          Follow Us
          <FollowUs />
        </div> */}
      </div>
    </EdenDevFrontPageStyles>
  )
}
