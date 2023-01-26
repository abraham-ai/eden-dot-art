import React from 'react'

// WALLET
import ConnectButtonCustom from '@/components/ConnectButtonCustom/ConnectButtonCustom'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions'

// COMPONENTS
import AppLogo from '@/components/AppLogo/AppLogo'

// ANTD
import {
  Button,
  Typography
} from 'antd'
const { Title, Text } = Typography;

// CSS
import styled from 'styled-components'

// ICON
import { TwitterOutlined } from '@ant-design/icons';
import { FaDiscord } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';


const EdenArtFrontPageStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  .home-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  /*** HEADER ***/
  .section-wrapper.header {
    display: flex; 
    justify-content: space-between;
    flex: 1;
    padding: 20px; 
    width: 100%; 
    position: fixed; 
    top: 0;
    z-index: 100;
  }
  /*** ATF SECTION ***/
  .section-above-the-fold {}
  @media (max-width: 930px) {
    .section-above-the-fold {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      top: 0;
      z-index: 0;
      height: 85vh;
      width: 100%;
    }
    .section-above-the-fold .section-wrapper.info-wrapper {
      height: 100%;
      justify-content: center;
    }
    .section-above-the-fold .section-wrapper .section-center-wrapper {
      justify-content: space-between;
      height: 100%;
      max-width: 700px;
    }
  }
  /*** EDEN SPLASH VIDEO ATF ***/
  .eden-splash-video-above-the-fold {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
  @media (max-width: 930px) {
    .eden-splash-video-above-the-fold {
      display: block;
      position: relative;
      top: 0;
      height: 100%;
      width: 240%;
      z-index: 0;
    }
    .eden-splash-video-overlay {
      position: absolute;
      background: black;
      min-height: 85vh;
      width: 100%;
      opacity: 0.5;
      z-index: 10;
      top: 0;
      height: 85vh;
    }
  }
  /*** SPLASH TEXT SLOGAN ***/
  h2.splash-text-slogan {
    font-size: 5rem;
    width: 100%;
    color: #0c163b;
    z-index: 50;
    padding: 0;
    margin: 0;
    line-height: 1;
    color: #0c163b;
    z-index: 50;
  }
  .section-center-wrapper h1 {
  }
  .splash-text-accent {
    color: #8C7CF0;
    font-size: 6rem;
  }
  @media only screen and (max-width: 930px) {
    .splash-text-slogan-wrapper {
      margin-top: 50px;
      align-items: flex-start;
    }
    h2.splash-text-slogan {
      font-size: 5.8rem;
    }
    .splash-text-accent {
      padding-left: 10px;
      color: white;
      font-size: 5.8rem;
    }
  }
  @media (max-width: 930px) {
    .splash-text-slogan-wrapper {
      margin-top: 50px;
    }
    h2.splash-text-slogan {
      color: white;
      font-size: 5.5rem;
      line-height: 1;
    }
    .splash-text-accent {
      padding-left: 15px;
      font-size: 5.5rem;
      line-height: 1;
    }
  }
  @media (max-width: 700px) {
    .splash-text-slogan-wrapper {
      margin: 150px 0 70px 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: start;
      padding-left: 20px;
    }
    h2.splash-text-slogan {
      color: white;
      font-size: 4.5rem;
      line-height: 0.9;
    }
    .splash-text-accent {
      padding-left: 5px;
      // color: rgb(52 224 161);
      font-size: 4.5rem;
      line-height: 0.9;
    }
  }
  @media (max-width: 585px) {
    h2.splash-text-slogan {
      font-size: 3.7rem;
    }
    .splash-text-accent {
      font-size: 3.7rem;
    }
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
  /*** DESCRIPTION ***/
  .splash-text-description {
    font-size: 2.3rem;
    text-align: center;
    max-width: 750px;
    line-height: 1.1;
    z-index: 50;
    color: #0c163b;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 930px) {
    .splash-text-description {
      font-size: 2.8rem;
      max-width: 660px;
    }
  }
  @media only screen and (max-width: 930px) {
    .splash-text-description {
      line-height: 1;
      text-align: start;
      font-size: 2.8rem;
      color: white;
    }
    .section-center-wrapper h1 {
      font-size: 2.9rem;
      font-weight: 600;
      justify-content: flex-start;
      text-align: start;
    }
  }
  @media (max-width: 700px) {
    .splash-text-description {
      font-size: 1.8rem;
      width: 90%;
    }
  }

  /*** SECTION ***/
  .section-wrapper:first-child {
  }
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
    // background: lime;
  }
  @media (max-width: 930px) {
    .section-wrapper.video-splash {
      position: absolute;
      height: 85vh;
      z-index: 0;
      width: 100%;
      overflow: hidden;
    }
    .section-wrapper.video-splash video {
      width: 100%;
      height: auto;
    }
    .section-wrapper.header:first-child {
      height: auto;
    }
  }
  @media (max-width: 845px) {
    .section-wrapper.video-splash video {
      height: 100%;
      width: unset;
    }
  }
  @media (min-width: 1280px) {
    .section-wrapper {
      max-width: unset; 
    }
  }
  @media (max-width: 700px) {
    .section-wrapper.first-description {
      margin: 0 0 150px 0 !important;
    }
  }
  @media (min-width: 600px) {
    .section-wrapper {
      padding-left: 0;
      padding-right: 0;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    min-width: 200px;
    border-radius: 30px;
    min-height: 60px;
    font-size: 1.2rem;
    font-weight: bold;
    background: #8C7Cf0;
    color: white;
    text-decoration: none;
    border: none;
  }
  .cta-button:hover {
    color: white;
    background: #5f47fa;
    border-color: white;
  }
  .cta-button.accent-link {
    box-shadow: #8c7cf0 1px 1px 25px 0px;
  }
  /*** CTA MAIN LINK ***/
  .cta-button.main-link {
    box-shadow: #8c7cf0 1px 1px 25px 0px;
    background: white;
    color: #0c163b;
  }
  .cta-button.main-link:hover {
    color: #5f47fa;
    background: rgb(140, 124, 240);
  }
  @media (max-width: 700px) {
    .cta-button.main-link {
      box-shadow: none !important;
    }
    .cta-button.main-link:hover {
      color: white;
      background: #473ff4 !important;
      box-shadow: #8c7cf0 1px 1px 25px 0px !important;
    }
  }
  /*** CTA SECONDARY LINK ***/
  .cta-button.secondary {
    background: #5f47fa;
  }
  /*** CTA ICON ***/
  .cta-button.icon:hover {
    color: #8C7CF0;
    background: #8C7CF0;
    border-color: #8C7CF0;
  }
  /*** CTA MAIN LINK BOTTOM ***/
  .cta-btn-main {
    height: 70px;
    display: flex; 
    align-items: center;
    color: white; 
    background: #8C7CF0;
    font-weight: bold;
    margin: 0;
    text-decoration: none;
    border-radius: 60px;
    box-shadow: #8c7cf0 1px 1px 25px 0px;
  }
  .cta-btn-main.main-link:hover {
    background: #473ff4;
  }
  .cta-btn-main h2 {
    line-height: 0; 
    color: white; 
    margin: 0; 
    padding: 0 20px;
    font-size: 1.4rem;
  }
  /*** INFO-WRAPPER ***/
  .info-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  /*** BUTTON-WRAPPER ***/
  .info-wrapper .button-wrapper {
    padding: 50px 0;
    display: flex;
    z-index: 20;
  }
  /*** INFO ***/
  .info-wrapper .info {
    padding: 50px 0 0 0;
    display: flex;
    align-items: flex-start;
  }
  .info-wrapper .info:first-child {
    margin-top: 0;
  }
  @media (max-width: 1230px) {
    .info-wrapper {
      padding: 0 20px;
    }
    .info-wrapper .info {
      align-items: flex-start;
    }
  }
  @media (max-width: 930px) {
    .button-wrapper {
      flex-direction: column;
      margin-top: 20px;
      padding: 0;
      max-width: unset;
      width: 100%;
    }
    .cta-button {
      width: auto;
    }
    .info-wrapper .info {
      flex-direction: column;
      margin-top: 100px;
      padding: 0;
      width: 100%;
    }

  }
  @media only screen and (max-width:700px) {
    .cta-button {
      font-size: 1.5rem; 
    }
  }
  @media only screen and (max-width: 930px) {
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
    font-size: 3rem;
    padding: 30px 0;
    font-weight: 600;
    color: #8C7CF0;
  }
  @media only screen and (max-width:900px) {
    .description {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 930px) {
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
  /*** EDEN SPLASH VIDEO BTF ***/
  .eden-splash-video {
    max-width: 600px;
    z-index: 40;
    border-radius: 24px;
    z-index: 0;
  }
  @media (max-width: 930px) {
    .eden-splash-video {
      width: 100%;
      min-height: 300px;
      max-width: unset;
    }
    .info-wrapper .info.even .eden-splash-video {
      order: 1;
    }
  }
  @media only screen and (max-width: 930px) {
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
  @media (max-width: 930px) {
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
`

export function AppLink({ title, description, icon }) {
  return (
    <>
      <div className='app-link'>
        <span className='icon-wrapper'>{icon}</span>
        <span className='app-link-info-wrapper'>
          <Title className='title' level={3}>
            {title}
          </Title>
          <Text className='tag'>
            {description}
          </Text>
        </span>
      </div>
    </>
  )
}

export function ButtonLink({ text, link, color = 'white', textColor = 'white', type = '' }) {
  const { width } = useWindowDimensions()

  return (
    <Button
      target="_blank"
      shape={'round'}
      href={link}
      className={`cta-button ${type}`}
      block={ width < 930 ? true : false }
      style={{ background: color, color: textColor }}
    >
    {text}
  </Button>
  )
}

export function TabletTitle() {
  return (
    <div className='splash-text-slogan-wrapper'>
      <Title
        className='splash-text-slogan'
        level={2}
      >
        CREATE, REMIX 
      </Title>

      <Title
        className='splash-text-slogan'
        level={2}
      >
        & SHARE
        < Text className='splash-text-accent' italic>AI ART </Text>
      </ Title>
    </ div>
  )
}

export function MobileTitle() {
  return (
    <div className='splash-text-slogan-wrapper'>
      <Title
        className='splash-text-slogan'
        level={2}
      >
        CREATE <i>&</i> SHARE
      </Title>

      <Title
        className='splash-text-slogan'
        level={2}
      >
        < Text className='splash-text-accent' italic>AI ART </Text>
      </ Title>
    </ div>
  )
}

export default function EdenArtFrontPage() {
  
  const { width } = useWindowDimensions()

  const videoURL = 'https://eden-art.s3.amazonaws.com/eden-landing-mobile-real2real_seed_7_pass_lantent-blending.mp4'

  return (
    <EdenArtFrontPageStyles>
      <div className='home-wrapper'>

        <section className='section-wrapper header'>
          <AppLogo size="medium" logo='eden' />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button className='social-btn' icon={<FaDiscord />} shape='circle' href={'https://discord.gg/4dSYwDT'} 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            />
            <Button className='social-btn' icon={<BsTwitter />} shape='circle' href={'https://twitter.com/Eden_Art_'} 
                    style={{ margin: '0 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            />
            <ConnectButtonCustom />
          </div>
        </section>

        <section className='section-above-the-fold'>

            { width < 930 
              ?        
                (<article className="section-wrapper video-splash" >
                  <div className='eden-splash-video-overlay' />
                  <video
                      className='eden-splash-video-above-the-fold'
                      src={`${videoURL}`}
                      preload='auto'
                      muted={true}
                      autoPlay={true}
                      loop={true}
                      // poster={`${PRD_URL}${
                      //   intermediate_sha[intermediate_sha.length - 1]
                      // }`}
                    />
                </article>)
              : 
                ''
            }



          <div className='section-wrapper info-wrapper' style={{ background: 'transparent' }}>
            <div
              className='section-center-wrapper'
              style={{ padding: '100px 0 0 0', paddingBottom: 0, width: '100%', textAlign: 'center' }}
            >
              { width < 930 ? <MobileTitle /> : 
                <>
                  <Title className='splash-text-slogan' level={2}>
                    Create, remix, and share
                  </Title>
                  <Title className='splash-text-slogan' level={2} style={{ paddingBottom: 30, fontStyle: 'italic', color: '#8C7CF0' }}>
                    AI-generated art
                  </Title>
                </>
              }


{/* 'rgb(166, 166, 166)' */}
              { width < 930 ? 
                <Text className='splash-text-description'>
                  Eden is a community of artists, technologist and machine learners building an open-source social platform for
                  generative AI.
                </Text> : 
                  <>
                    <Text
                  className='splash-text-description'
                >
                  {/* 'rgb(166, 166, 166)' */}
                  Eden is a community of artists, creative technologists, and
                  machine learners building an open-source social platform for
                  generative AI.
                </Text>
                  </>
              }
              

              

              <article
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: 0,
                  width: '100%'
                }}
              >
                <div
                  className="button-wrapper"
                  style={{
                    display: 'flex',
                    zIndex: 50,
                    width: '100%',
                  }}
                >
                  { width < 930 ? 
                    <>
                      <ButtonLink text={'GARDEN'} link={'/garden'} color={'#8c7cf0'} textColor={'white'} type='main-link' />
                      <ButtonLink text={'EXAMPLES'} link={'https://examples.eden.art'} color={'#0c163b'} type='accent-link' />
                    </> 
                    : 
                    <>
                      <ButtonLink text={'GARDEN'} link={'https://examples.eden.art'} textColor={'#0c163b'} color={'white'} type='main-link' />
                      <ButtonLink text={'EXAMPLES'} link={'/garden'} color={'#8C7CF0'} textColor={'white'} />
                    </>
                  }

                  {/* { width < 930 ? 
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Button
                        className='cta-button icon'
                        target="_blank"
                        shape={'circle'}
                        href={'https://discord.gg/4dSYwDT'}
                        block={ width < 930 ? true : false }
                        style={{ background: 'black', minWidth: '50px', minHeight: '50px' }}
                      >
                      <FaDiscord style={{ fontSize: '2rem' }}/>
                    </Button>

                    <Button
                        className='cta-button icon'
                        target="_blank"
                        shape={'circle'}
                        href={'https://twitter.com/Eden_Art_'}
                        block={ width < 930 ? true : false }
                        style={{ background: 'black', minWidth: '50px', minHeight: '50px' }}
                      >
                      <TwitterOutlined style={{ fontSize: '2rem' }}/>
                    </Button>       
                  </div>
                    : 
                    null
                  } */}

                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-wrapper first-description"
          style={{ marginTop: 100, marginBottom: 150 }}
        >
          <article className='info-wrapper' style={{ margin: 0, paddingTop: 0 }}>
            <div className='info odd'>
              <span className='description-wrapper'>
                <Text className='description'>
                  <i>For artists</i> Create and share your art, get inspired by
                  and collaborate with other artists. Own your profile and your
                  creations.
                </Text>
              </span>

              <video
                className='eden-splash-video'
                preload='auto'
                muted={true}
                autoPlay={true}
                loop={true}
                src='https://eden-art.s3.amazonaws.com/eden-real2real_seed_2004_latent-blending.mp4'
              />
            </div>

            <div className='info even'>
              <video
                className='eden-splash-video'
                preload='auto'
                muted={true}
                autoPlay={true}
                loop={true}
                src='https://eden-art.s3.amazonaws.com/eden-real2real_seed_2025_latent-blending.mp4'
              />

              <span className='description-wrapper'>
                <Text className='description'>
                  <i>For developers</i> Build applications with ease,
                  connect new techniques and models to a shared ecosystem.
                </Text>
              </span>
            </div>

            <div className='info odd'>
              <div>
                <span className='description-wrapper'>
                  <Text className='description'>
                    <i>For collectors</i> Discover, curate, and tell stories
                    with your collections. Make the garden beautiful.
                  </Text>
                </span>
              </div>

              <video
                className='eden-splash-video'
                preload='auto'
                muted={true}
                autoPlay={true}
                loop={true}
                src='https://eden-art.s3.amazonaws.com/eden-real2real_seed_2026_latent-blending.mp4'
              />

              {/* <video loop autoPlay muted width="250">
                <source
                  src="https://eden-art.s3.amazonaws.com/real2real/videos/real2real_seed_109_167123988214.webm"
                  type="video/webm"
                />

                <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
              </video> */}
            </div>
          </article>
        </section>

        <section className="section-wrapper"
          style={{ marginTop: 0, marginBottom: 150 }}
        >
          <Button 
            className='cta-btn-main main-link'
            type='primary' 
            href={'/garden'} 
            size='large' 
            shape='round' 
            style={{ 
            }}
          >
            <Title level={2}>
              {'VISIT GARDEN'}
            </Title>
          </Button>
        </section>
      
      </div>
    </EdenArtFrontPageStyles>
  )
}
