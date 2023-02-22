import { useState } from 'react'

// NEXT
import { useRouter } from 'next/router'
import Link from 'next/link'

// WEB3
import { useAccount } from 'wagmi'

// ANTD
import { Typography, Popover, Avatar, Divider, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Title, Text } = Typography

// LIBS
import Blockies from 'react-blockies'
// import { Palette } from 'react-palette'

// STYLES
import { CreatorStyles } from './CreatorStyles'

// COMPONENTS
import CreatorDashboard from '@/components/Profile/ProfileDashboard/ProfileDashboard'
import CreationsGrid from '@/components/Creation/CreationsGrid/CreationsGrid'

// CONSTANTS
// import { NETWORKS } from '../../constants'

export default function Creator({
  profileAddress = '0x000',
  profileName = 'Custom Name',
}) {
  const [isFollowing, setIsFollowing] = useState(false)

  const { address } = useAccount()

  // ROUTER
  const router = useRouter()
  const { profileId } = router.query

  const handleFollow = () => {
    isFollowing ? setIsFollowing(false) : setIsFollowing(true)
  }

  {
    //  pathname: `/creator/${profileId}/creation/${item.id}`,
    ;<Link
      className="cr-main-link"
      href={{
        pathname: `/creator/${profileId}`,
        query: { slug: profileId },
      }}
    ></Link>
  }

  // const img_url = 'https://ai-everydays.s3.amazonaws.com/everydays/everydays_1.png'

  return (
    <>
      <CreatorStyles>
        <div className="creator-banner">
          {/*<img src={img_url} style={{ width: '100%'}} /> */}
          <Popover
            trigger="click"
            style={{ borderRadius: '50%' }}
            content={
              <Button type="text" shape="round">
                Report
              </Button>
            }
          >
            <Button
              shape="round"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: 30,
                bottom: 30,
                width: 40,
                height: 40,
              }}
            >
              <span
                style={{ height: '2px', lineHeight: 0, fontWeight: 'bold' }}
              >
                ...
              </span>
            </Button>
          </Popover>
        </div>

        <div
          style={{
            marginTop: '-90px',
            zIndex: 150,
            position: 'relative',
            paddingLeft: 20,
          }}
        >
          <span
            className="profile-avatar-wrapper"
            style={{ display: 'flex', flex: 1 }}
          >
            <Blockies scale={13} seed={profileAddress} />
          </span>
        </div>

        <div
          className="creator-header"
          style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}
        >
          <span
            className="creator-profile"
            style={{
              width: '100%',
              background: 'white',
              display: 'flex',
              flex: 2,
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingLeft: 20,
            }}
          >
            <Title level={1} className="profile-name">
              {profileName}
            </Title>

            <div
              className="creator-profile-info"
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div className="profile-actions">
                <Popover trigger="click" content={<Text>Profile Content</Text>}>
                  <button style={{ marginRight: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>{profileAddress}</Text>
                    <span style={{ marginLeft: 10 }}>
                      <DownOutlined />
                    </span>
                  </button>
                </Popover>

                {address === profileAddress ? null : (
                  <button
                    className={
                      `follow-button ${isFollowing}`
                        ? `following`
                        : `not-following`
                    }
                    onClick={() => handleFollow()}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                )}

                {address === profileAddress ? (
                  <Link href="/profile">
                    <button style={{ marginLeft: 20 }}>Edit Profile</button>
                  </Link>
                ) : null}
              </div>

              <div style={{ marginTop: 20 }}>
                <Text>
                  Documenting the singularity. Digital minds are here. AGI is
                  coming.
                </Text>
                {/*
                             * <Palette src={img_url}>
                                {({ data }) => (
                                    // loading, error
                                    <Text style={{ color: data.lightVibrant }}>
                                         Text with the vibrant color
                                    </Text>
                                )}
                            </Palette>
                            */}
              </div>

              <div style={{ marginTop: 20 }}>
                <button
                  style={{
                    height: 'auto',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <Avatar style={{ border: '3px solid white' }} />
                    <Avatar
                      style={{ border: '3px solid white', marginLeft: '-10px' }}
                    />
                    <Avatar
                      style={{ border: '3px solid white', marginLeft: '-10px' }}
                    />
                  </div>
                  <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>
                    {`${10}`} Collectors
                  </Text>
                </button>
              </div>
            </div>
            {/* creatorId */}
          </span>

          <article
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-end',
              zIndex: 100,
              background: 'white',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: 20,
              }}
            >
              <Button type="link" style={{ height: 'auto', padding: 0 }}>
                <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                  Following
                </Text>
                <Title level={2} style={{ margin: 0 }}>
                  {'1,000'}
                </Title>
              </Button>
              <Divider type="vertical" />
              <Button type="link" style={{ height: 'auto', padding: 0 }}>
                <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                  Followers
                </Text>
                <Title level={2} style={{ margin: 0 }}>
                  {'1,010'}
                </Title>
              </Button>
              <Divider type="vertical" />
              <Button type="link" style={{ height: 'auto', padding: 0 }}>
                <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                  Followed By
                </Text>
                <div>
                  <Avatar style={{ border: '3px solid white' }} />
                  <Avatar
                    style={{ border: '3px solid white', marginLeft: '-10px' }}
                  />
                  <Avatar
                    style={{ border: '3px solid white', marginLeft: '-10px' }}
                  />
                </div>
              </Button>
            </div>
          </article>
        </div>

        <section className="creator-body">
          <article className="creator-grid-wrapper">
            <div className="creator-dashboard-wrapper">
              <CreatorDashboard profileAddress={profileAddress} />
            </div>

            <div className="creator-grid">
              <CreationsGrid />
            </div>
          </article>
        </section>
      </CreatorStyles>
    </>
  )
}
