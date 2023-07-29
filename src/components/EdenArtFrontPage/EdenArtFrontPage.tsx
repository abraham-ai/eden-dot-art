import { Typography } from 'antd'
const { Text } = Typography
import EdenArtFrontPageStyles from './EdenArtFrontPageStyles'
import Link from 'next/link'
export default function EdenArtFrontPage() {
  return (
    <div className="bg-black">
      <EdenArtFrontPageStyles>
        <div className="home-wrapper">
          <section className="section-wrapper header">
            <div className="flex items-center justify-start">
              <Link href="/">
                <img src="logo.png" className="h-16 sm:h-20 pl-8 pt-6" />
              </Link>
              <Link href="/">
                <p className="text-xl pl-2 pt-6 text-white sm:text-3xl">
                  eden.art
                </p>
              </Link>
            </div>

            <div className="flex items-center justify-end pr-8 pt-6">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/abraham-ai"
              >
                <img src="github.png" className="h-8 sm:h-12" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/invite/4dSYwDT"
              >
                <img src="discord.png" className="h-8 ml-2 sm:h-12 sm:ml-4" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Eden_Art_"
              >
                <img src="twitter.png" className="h-8 ml-2 sm:h-12 sm:ml-4" />
              </Link>
            </div>
          </section>
          <div className="relative h-screen">
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              style={{ opacity: 0.4 }}
            >
              <source src="video.mp4" type="video/mp4" />
              {/* Add more <source> elements for other video formats if needed */}
              Your browser does not support the video tag.
            </video>
            <div className="max-w-7xl px-14 pb-24 pt-48 sm:pb-32 md:flex md:px-24 md:py-36 lg:flex lg:px-24 lg:py-36 justify-start -mt-8 relative z-10">
              <div className="max-w-3xl flex-shrink-0  lg:pt-8">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Create, remix, and share AI-generated art
                </h1>
                <p className="mt-3 font-extralight text-xl leading-8 text-gray-300">
                  Eden is a community of artists, technologists and machine
                  learners building a social hub for creative AI.
                </p>
                <Link href={'https://app.eden.art'}>
                  <div className="mt-6">
                    <button className="text-white pl-4 pr-4 pt-3 pb-3 border border-2 rounded-2xl font-bold tracking-wide transition-transform hover:scale-105">
                      Enter Garden of Eden
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <img className="h-16 animate-bounce" src="downarrow.png" />
            </div>
          </div>
          <section className="section-wrapper first-description">
            <article className="info-wrapper">
              <div className="info odd">
                <span className="description-wrapper">
                  <Text className="description">
                    <i>For artists</i> Create and share your art, get inspired
                    by and collaborate with other artists. Own your profile and
                    your creations.
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
        </div>
      </EdenArtFrontPageStyles>
    </div>
  )
}
