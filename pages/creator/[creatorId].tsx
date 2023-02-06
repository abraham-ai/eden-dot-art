import { useState } from 'react'
// , { useEffect, useState, useCallback, useRef }

// REDUX
import { useAppSelector } from '@/hooks/redux'

// NEXT
import { useRouter } from 'next/router'
import Link from 'next/link'

// ANTD
import { Typography, Popover, Avatar, Divider, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

// LIBS
import Blockies from 'react-blockies'
// import { Palette } from 'react-palette'

// CSS
import styled from 'styled-components'

// COMPONENTS
import CreatorDashboard from '@/components/Profile/ProfileDashboard/ProfileDashboard'
import CreationsGrid from '@/components/Creation/CreationsGrid/CreationsGrid'

// CONSTANTS
// import { NETWORKS } from '../../constants'

const CreatorStyles = styled.div`
  padding: 0;
  z-index: 10;
  width: 100%;
  background: #fafafa;
 /*** BANNER ****/
  .creator-banner {
    max-height: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    width: 100%;
    z-index: 50;
    background: lime;
    display: flex;
    justify-content: center;
    align-items: center;
    background: light-gray;
  }
  /*** HEADER ***/
  .creator-banner img {
    width: 100%;
  }
  .creator-header {
    display: flex;
    align-items: flex-start;
    background-color: white;
  }
  .profile-name {
      font-weight: bold; 
      margin-top: 0;
   }
  .profile-avatar-wrapper {
      border-radius: 50%;
      overflow: hidden;
      min-width: 120px;
      min-height: 120px;
      height: 120px;
      width: 120px;
      background: lime;
      border: 10px solid white;
      display: flex;
      justify-content: center;
  }
  /*** PROFILE ACTIONS ***/
  .profile-actions {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .follow-button.ant-btn-primary {
      background: #8C7CF0;
  }
  /*** CREATOR BODY ***/
  .creator-body {
    display: flex;
  }
  .creator-profile-info {
    min-width: 300px;
  }
  .creator-profile {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 75;
  }
  .creator-grid {
    display: block;
  }
  .creator-dashboard-wrapper {
    display: flex;
    justify-content: flex-start;
    background-color: white;
  }
  .creator-grid-wrapper {
      width: 100%;
  }
  @media (min-width: 40em) {
    .creator-grid {
      display: flex;
      padding: 24px;
      margin-top: 0;
    }
  }
  @media (min-width: 60em) {
    .creator-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 80em) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    width: 100%;
    max-width: 2200px;
    .ant-col.ant-col-8 {
      overflow: hidden;
      min-height: 100%;
      display: flex;
      flex: 1;
      /* padding: 0 16px !important; */
      padding: 0 !important;
      max-width: unset !important;
    }
  }
`




export default function Creator({ profileAddress='0x000', profileName='Custom Name' }) {

    const [isFollowing, setIsFollowing] = useState(false)


    // ROUTER
    const router = useRouter()
    const { profileId } = router.query

    // REDUX
    const appAddress = useAppSelector(state => state.address.value)


    const handleFollow = () => {
        isFollowing ? setIsFollowing(false) : setIsFollowing(true)
    }
 
    {
       //  pathname: `/creator/${profileId}/creation/${item.id}`,
<Link className='cr-main-link'
  href={{
    pathname: `/creator/${profileId}`,
    query: { slug: profileId },
  }}>
</Link>
}

// const img_url = 'https://ai-everydays.s3.amazonaws.com/everydays/everydays_1.png'

return (
<>
<CreatorStyles>
        <div className='creator-banner'>
            {/*<img src={img_url} style={{ width: '100%'}} /> */}
                <Popover trigger='click'
                    style={{ borderRadius: '50%' }}
                    content={
                        <Button type='text'
                            shape='round'
                        >
                            Report
                        </Button>}
                    >
                    <Button
                        shape='round'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: 30,
                            bottom: 30,
                            width: 40,
                            height: 40
                        }}
                    >
                        <span style={{ height: '2px', lineHeight: 0, fontWeight: 'bold' }}>
                            ...
                        </span>
                    </Button>
                </Popover>
        </div>

            <div style={{ marginTop: '-90px', zIndex: 150, position: 'relative', paddingLeft: 20 }}>
                <span className='profile-avatar-wrapper' style={{ display: 'flex', flex: 1}}>
                    <Blockies scale={13} seed={profileAddress} />
                </ span>
            </div>


            <div className="creator-header" style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
                <span className="creator-profile" style={{ width: '100%', background: 'white', display: 'flex', flex: 2, flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 20 }}>
                   
                    <Title level={1} className="profile-name">{profileName}</Title>

                    <div className="creator-profile-info" style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div className="profile-actions">
                            <Popover trigger="click" content={<Text>Profile Content</Text>}>
                                <Button type="default" size="large" shape="round" style={{ marginRight: 10 }}>
                                    <Text style={{ fontWeight: 'bold'}}>
                                         {profileAddress}
                                    </Text>
                                    <span style={{ marginLeft: 10 }}>
                                        <DownOutlined />
                                    </span>
                                </Button>
                            </Popover>

                            {appAddress === profileAddress
                                ? null
                                : <Button className='follow-button'
                                    type={isFollowing ? 'default' : 'primary'}
                                    size='large'
                                    shape='round'
                                    onClick={() => handleFollow()}
                                   >
                                     {isFollowing ? 'Following' : 'Follow'}
                                </Button>}

                            {appAddress === profileAddress
                                ? 
                                <Link href='/profile'>
                                    <Button shape='round' size='large' style={{ marginLeft: 20 }}>Edit Profile</Button>
                                </Link>
                                : null
                            }
                        </div>

                        <div style={{ marginTop: 20 }}>
                            <Text>Documenting the singularity. Digital minds are here.
                                AGI is coming.</Text>
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

                        <div style={{ marginTop: 20}}>
                            <Button type='link' style={{ height: 'auto', padding: 0, display: 'flex', alignItems: 'center' }}>
                                <div>
                                    <Avatar style={{ border: '3px solid white' }} />
                                    <Avatar style={{ border: '3px solid white', marginLeft: '-10px' }} />
                                    <Avatar style={{ border: '3px solid white', marginLeft: '-10px' }} />
                                </div>
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>
                                    {`${10}`} Collectors
                                </Text>
                            </Button>
                        </div>
                        
                    </div>
{
  /* creatorId */
}
   </span>
             
   

                <article style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', zIndex: 100, background: 'white' }}>

                    

                    <div style={{ display: 'flex', alignItems: 'center', paddingRight: 20 }}>
                        <Button type='link' style={{ height: 'auto', padding: 0}}>
                            <Text style={{ fontWeight: 'bold', color: 'gray' }}>Following</Text>
                            <Title level={2} style={{ margin: 0 }}>{'1,000'}</ Title>
                        </Button>
                        <Divider type="vertical"/>
                        <Button type='link' style={{ height: 'auto', padding: 0 }}>
                            <Text style={{ fontWeight: 'bold', color: 'gray'}}>Followers</Text>
                            <Title level={2} style={{ margin: 0 }}>{'1,010'}</ Title>
                        </Button>
                        <Divider type="vertical" />
                        <Button type='link' style={{ height: 'auto', padding: 0 }}>
                            <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                                Followed By
                            </Text>
                            <div>
                                <Avatar style={{ border: '3px solid white' }} />
                                <Avatar style={{ border: '3px solid white', marginLeft: '-10px' }} />
                                <Avatar style={{ border: '3px solid white', marginLeft: '-10px' }} />
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
         </ section>
       </CreatorStyles>
     </>
   )
 }
