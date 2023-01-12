import React from 'react'

// MUI
import {
  Button,
  Typography,
  Box,
  styled,
  Container,
  CardMedia,
} from '@mui/material'

const EdenArtFrontPageStyles = styled('section')(
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
  /*** SECTION ***/
  .section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
  }
  .section-center-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  /*** SLOGAN ***/
  .section-center-wrapper h1 {
    font-size: 3rem;
  }
  .splash-text-description {
    font-size: 24px;
  }
  @media (min-width: 1280px) {
    .section-center-wrapper h1 {
      // font-size: 4rem;
      font-size: 88px;
    }
  }
  @media (min-width: 600px) {
    .section-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media only screen and (max-width: 900px) {
    .splash-text-description {
      line-height: 1.75;
    }
    .section-center-wrapper h1 {
      font-size: 3.4rem;
    }
    .section-center-wrapper h1:nth-child(2) {
      padding-bottom: 80px;
    }
  }
  /*** SPLASH TEXT INFO ***/
  .splash-garden-card {
    opacity: 0.2;
  }
  .splash-garden-card:hover {
    opacity: 1;
    fontSize: 1.5rem;
  }
  /*** HIGHLIGHT ***/
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
  /*** SPLASH ***/
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
  /*** LOGO ***/
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
  /*** CTA BUTTONS ***/
  .button-wrapper {
    justify-content: center;
    flex-direction: row;
    max-width: 600px;
  }
  .cta-button {
    margin: 10px;
    min-width: 200px;
    border-radius: 30px;
    min-height: 60px;
    font-size: 1.2rem;
  }
  /*** INFO-WRAPPER ***/
  .info-wrapper {
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
  .info-wrapper .info {
    padding: 50px 0 0 0;
    display: flex;
  }
  .info-wrapper .info:first-child {
    margin-top: 0;
  }
  @media (max-width: 900px) {
    .info-wrapper .info {
      flex-direction: column;
      margin-top: 100px;
      padding: 0;
      width: 100%;
    }
  }
  @media only screen and (max-width: 900px) {
    .info-wrapper {
      padding: 0;
    }
  }
  /*** DESCRIPTION ***/
  .description-wrapper {
    display: flex;
    flexDirection: column;
    justifyContent: center;
  }
  .description {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 500;
    max-width: 600px;
    z-index: 20;
    line-height: 1.5;
    padding: 0 50px;
    color: rgb(166, 166, 166);
    text-align: center;
  }
  .description i {
    font-size: 2rem;
    padding: 30px 0;
    font-weight: 600;
    color: #8C7CF0;
  }
  @media only screen and (max-width:900px) {
    .description {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 900px) {
    .description-wrapper {
      margin: 0;
      padding-bottom: 50px;
      display: flex;
      justify-content: center;
    }
    .description {
      display: flex;
      flex-direction: column;
      padding-bottom: 30px;
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
    }
  }
  /*** EDEN SPLASH VIDEO ***/
  .eden-splash-video {
    max-width: 600px;
    z-index: 40;
    border-radius: 24px;
  }
  @media (max-width: 900px) {
    .eden-splash-video {
      width: 100%;
      min-height: 300px;
      max-width: unset;
    }
    .info-wrapper .info.even .eden-splash-video {
      order: 1;
    }
  }
  @media only screen and (max-width: 900px) {
    .eden-splash-video {
      border-radius: 0;
    }
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
  @media (min-width: 1280px) {
  }
  @media (max-width: 600px) {
    /* CTA BUTTONS */
    .button-wrapper {
      flex-direction: column;
    }
  }
  @media (max-width: 900px) {
    .button-wrapper {
      flex-wrap: wrap;
    }
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

export default function EdenArtFrontPage() {
  return (
    <EdenArtFrontPageStyles>
      <div className="home-wrapper">
        <section className="section-wrapper">
          <Box
            className="section-center-wrapper"
            sx={{ p: 2, pb: 0, width: '100%', textAlign: 'center' }}
          >
            {/* '#8C7CF0 */}
            <Typography
              variant={'h1'}
              sx={{
                fontSize: '3rem',
                width: '100%',
                color: '#0c163b',
                zIndex: 50,
                wordBreak: 'break',
              }}
            >
              Create, remix, and share
            </Typography>
            <Typography
              variant={'h1'}
              sx={{
                fontSize: '3rem',
                width: '100%',
                pb: 3,
                color: '#0c163b',
                zIndex: 50,
                wordBreak: 'break',
              }}
            >
              AI-generated art
            </Typography>

            <Typography
              className="splash-text-description"
              variant={'h3'}
              sx={{
                fontSize: '1.3rem',
                textAlign: 'center',
                maxWidth: 730,
                lineHeight: 2,
                zIndex: 50,
                color: '#0c163b',
              }}
            >
              {/* 'rgb(166, 166, 166)' */}
              Eden is a community of artists, creative technologists, and
              machine learners building an open-source social platform for
              generative AI.
            </Typography>

            <Container
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <Box
                className="button-wrapper"
                sx={{
                  display: 'flex',
                  pt: 5,
                  zIndex: 50,
                  width: '100%',
                }}
              >
                <Button
                  target="_blank"
                  href={'https://examples.eden.art'}
                  variant="contained"
                  className="cta-button"
                >
                  EXAMPLES
                </Button>

                <Button
                  target="_blank"
                  href={'/garden'}
                  variant="contained"
                  className="cta-button"
                >
                  GARDEN
                </Button>

                <Button
                  target="_blank"
                  href={'https://discord.gg/4dSYwDT'}
                  variant="contained"
                  className="cta-button"
                >
                  DISCORD
                </Button>

                <Button
                  target="_blank"
                  href={'https://twitter.com/Eden_Art_'}
                  variant="contained"
                  className="cta-button"
                >
                  TWITTER
                </Button>
              </Box>
            </Container>
          </Box>
        </section>

        <section
          className="section-wrapper"
          style={{ marginTop: 100, marginBottom: 150 }}
        >
          <Container className="info-wrapper" sx={{ m: 0, pt: 0 }}>
            <article className="info odd">
              <Box className="description-wrapper">
                <Typography className="description" variant={'h4'}>
                  <i>For artists</i> Create and share your art, get inspired by
                  and collaborate with other artists. Own your profile and your
                  creations.
                </Typography>
              </Box>

              <CardMedia
                className="eden-splash-video"
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="eden video"
                // autoPlay
                // mute
              />
            </article>

            <article className="info even">
              <CardMedia
                className="eden-splash-video"
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="eden video"
                // autoPlay
                // mute
              />

              <Box className="description-wrapper">
                <Typography className="description" variant={'h4'}>
                  <i>For researchers and devs</i> Build applications with ease,
                  connect new techniques and models to a shared ecosystem.
                </Typography>
              </Box>
            </article>

            <article className="info odd">
              <Box>
                <Box className="description-wrapper">
                  <Typography className="description" variant={'h4'}>
                    <i>For collectors</i> Discover, curate, and tell stories
                    with your collections. Make the garden beautiful.
                  </Typography>
                </Box>
              </Box>

              <CardMedia
                className="eden-splash-video"
                component="img"
                image="https://cdn.discordapp.com/attachments/1004656589124415518/1014148977698013224/916e466ff7cca28f72fdf009ecdf51a0a15d64a17ca848675b0223e496246e84.gif"
                alt="eden video"
                // autoPlay
                // mute
              />
            </article>
          </Container>
        </section>
      </div>
    </EdenArtFrontPageStyles>
  )
}
