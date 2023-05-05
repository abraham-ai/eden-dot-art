import React, { useState, useEffect } from 'react'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions'

// COMPONENTS
import AppLogo from '@/components/AppLogo/AppLogo'

// ANTD
import { Typography } from 'antd'
const { Title, Text } = Typography

// STYLES
import EdenArtFrontPageStyles from './EdenArtFrontPageStyles'

// ICON
// import { TwitterOutlined } from '@ant-design/icons'
import { FaDiscord } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export function AppLink({ title, description, icon }) {
  return (
    <>
      <div className="app-link">
        <span className="icon-wrapper">{icon}</span>
        <span className="app-link-info-wrapper">
          <Title className="title" level={3}>
            {title}
          </Title>
          <Text className="tag">{description}</Text>
        </span>
      </div>
    </>
  )
}

export function ButtonLink({
  text,
  link,
  color = 'white',
  textColor = 'white',
  type = '',
}) {
  const [windowWidth, setWindowWidth] = useState(0)
  const { width = 0 } = useWindowDimensions()

  const target = text === 'GARDEN' ? '_self' : '_blank'

  useEffect(() => {
    setWindowWidth(width)
  }, [width])

  return (
    <a
      target={target}
      href={link}
      className={
        `${windowWidth < 930}`
          ? `cta-button ${type} block`
          : `cta-button ${type}`
      }
      style={{ background: color, color: textColor }}
    >
      {text}
    </a>
  )
}

export function TabletTitle() {
  return (
    <div className="splash-text-slogan-wrapper">
      <Title className="splash-text-slogan" level={2}>
        CREATE, REMIX
      </Title>

      <Title className="splash-text-slogan" level={2}>
        & SHARE
        <Text className="splash-text-accent" italic>
          AI ART{' '}
        </Text>
      </Title>
    </div>
  )
}

export function MobileTitle() {
  return (
    <div className="splash-text-slogan-wrapper">
      <Title className="splash-text-slogan" level={2}>
        CREATE <i>&</i> SHARE
      </Title>

      <Title className="splash-text-slogan" level={2}>
        <Text className="splash-text-accent" italic>
          AI ART{' '}
        </Text>
      </Title>
    </div>
  )
}

export default function EdenArtFrontPage() {
  const [windowWidth, setWindowWidth] = useState(0)
  const { width = 0 } = useWindowDimensions()

  useEffect(() => {
    setWindowWidth(width)
  }, [width])

  const videoURL =
    'https://eden-art.s3.amazonaws.com/eden-landing-mobile-real2real_seed_7_pass_lantent-blending.mp4'

  return (
    <EdenArtFrontPageStyles>
      <div className="home-wrapper">
        <section className="section-wrapper header">
          <AppLogo size="medium" logo="eden" />

          <div className="social-btns-wrapper">
            <a
              className="social-btn"
              href={'https://discord.gg/4dSYwDT'}
              style={{ margin: '0 10px', color: '#aaa' }}
            >
              <FaDiscord size="40" />
            </a>
            <a
              className="social-btn"
              href={'https://twitter.com/Eden_Art_'}
              style={{ margin: '0 10px', color: '#aaa' }}
            >
              <BsTwitter size="40" />
            </a>
            <a
              className="social-btn"
              href={'https://github.com/abraham-ai'}
              style={{ margin: '0 10px', color: '#aaa' }}
            >
              <BsGithub size="40" />
            </a>
          </div>
        </section>

        <section className="section-above-the-fold">
          {windowWidth < 930 ? (
            <article className="section-wrapper video-splash">
              <div className="eden-splash-video-overlay" />
              <video
                className="eden-splash-video-above-the-fold"
                src={`${videoURL}`}
                preload="auto"
                muted={true}
                autoPlay={true}
                loop={true}
                // poster={`${PRD_URL}${
                //   intermediate_sha[intermediate_sha.length - 1]
                // }`}
              />
            </article>
          ) : (
            ''
          )}

          <div className="section-wrapper info-wrapper">
            <div className="section-center-wrapper">
              {windowWidth < 930 ? (
                <MobileTitle />
              ) : (
                <>
                  <Title className="splash-text-slogan" level={2}>
                    Create, remix, and share
                  </Title>
                  <Title
                    className="splash-text-slogan"
                    level={2}
                    style={{
                      paddingBottom: 30,
                      fontStyle: 'italic',
                      color: '#2A564D',
                    }}
                  >
                    AI-generated art
                  </Title>
                </>
              )}

              {windowWidth < 930 ? (
                <Text className="splash-text-description">
                  Eden is a community of artists, technologist and machine
                  learners building a provenance layer for generative AI.
                </Text>
              ) : (
                <>
                  <Text className="splash-text-description">
                    {/* 'rgb(166, 166, 166)' */}
                    Eden is a community of artists, technologist and machine
                    learners building a provenance layer for generative AI.
                  </Text>
                </>
              )}

              <article className="cta-btns-wrapper">
                <div
                  className="button-wrapper"
                  style={{
                    display: 'flex',
                    zIndex: 50,
                    width: '100%',
                  }}
                >
                  {windowWidth < 930 ? (
                    <>
                      <ButtonLink
                        text={'Garden'}
                        link={'https://garden.eden.art'}
                        color={'#2A564D'}
                        textColor={'white'}
                        type="main-link"
                      />
                      <ButtonLink
                        text={'App'}
                        link={'https://app.eden.art'}
                        color={'#2A564D'}
                        textColor={'white'}
                        type="accent-link"
                      />
                      <ButtonLink
                        text={'Docs'}
                        link={'https://docs.eden.art/docs/overview/intro'}
                        color={'#2A564D'}
                        textColor={'white'}
                        type="accent-link"
                      />
                    </>
                  ) : (
                    <>
                      <ButtonLink
                        text={'Try the app'}
                        link={'https://app.eden.art'}
                        color={'#2A564D'}
                        textColor={'white'}
                      />
                      <ButtonLink
                        text={'Visit the garden'}
                        link={'https://garden.eden.art'}
                        color={'#2A564D'}
                        textColor={'white'}
                      />
                      <ButtonLink
                        text={'Read the docs'}
                        link={'https://docs.eden.art/docs/overview/intro'}
                        color={'#2A564D'}
                        textColor={'white'}
                      />
                    </>
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-wrapper first-description">
          <article className="info-wrapper">
            <div className="info odd">
              <span className="description-wrapper">
                <Text className="description">
                  <i>For artists</i> Create and share your art, get inspired by
                  and collaborate with other artists. Own your profile and your
                  creations.
                </Text>
              </span>

              <video
                className="eden-splash-video"
                preload="auto"
                muted={true}
                autoPlay={true}
                loop={true}
                src="https://eden-art.s3.amazonaws.com/eden-real2real_seed_2004_latent-blending.mp4"
              />
            </div>

            <div className="info even">
              <video
                className="eden-splash-video"
                preload="auto"
                muted={true}
                autoPlay={true}
                loop={true}
                src="https://eden-art.s3.amazonaws.com/eden-real2real_seed_2025_latent-blending.mp4"
              />

              <span className="description-wrapper">
                <Text className="description">
                  <i>For developers</i> Build applications with ease, connect
                  new techniques and models to a shared ecosystem.
                </Text>
              </span>
            </div>

            <div className="info odd">
              <div>
                <span className="description-wrapper">
                  <Text className="description">
                    <i>For collectors</i> Discover, curate, and tell stories
                    with your collections. Make the garden beautiful.
                  </Text>
                </span>
              </div>

              <video
                className="eden-splash-video"
                preload="auto"
                muted={true}
                autoPlay={true}
                loop={true}
                src="https://eden-art.s3.amazonaws.com/eden-real2real_seed_2026_latent-blending.mp4"
              />
            </div>
          </article>
        </section>

        {/* <section className="section-wrapper visit-garden">
          <a className="cta-btn-main main-link" href={'/garden'}>
            <Title level={2}>{'VISIT GARDEN'}</Title>
          </a>
        </section> */}
      </div>
    </EdenArtFrontPageStyles>
  )
}
