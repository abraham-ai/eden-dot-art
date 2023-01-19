import React from 'react'

// NEXT
import { useRouter } from 'next/router'
import Link from 'next/link'

// WEB3 HOOKS
import { useAccount, useEnsAvatar, useEnsName } from 'wagmi'


// HOOKS
import { useIsMounted } from '@/hooks/useIsMounted'

// UTILS
import { formatAddress } from '@/util/address'

// LIBS
import Blockies from 'react-blockies'

// ANTD
import { Typography, Avatar, Divider, Button } from 'antd'
const { Title, Text } = Typography

// CSS
import styled from 'styled-components'

const ProfilePopOverStyles = styled.div`
     background: white;
     .profile-link-wrapper {
         background: white;
     }
    .profile-link-wrapper:hover {
        cursor: pointer;
        background: white;
    }
`



const ProfilePopOver = ({ profileAddress = '' }) => {
    const isMounted = useIsMounted()
    const router = useRouter()

    // WAGMI
    const { address } = useAccount()
    const { data: ensNameData } = useEnsName({
        address,
        chainId: 1,
    })
    const { data: ensAvatarData } = useEnsAvatar({
        // addressOrName: address,
        chainId: 1,
    })

    if (!address || !isMounted) return null

    const formattedAddress = formatAddress(profileAddress)

    const handleClick = (e) => {
        e.preventDefault()
        router.push('/profile/:creatorID')
    }
    
    return (
    <ProfilePopOverStyles>
       <section onClick={() => handleClick} style={{
          width: 280,
          height: 280,
          maxHeight: 300,
          maxWidth: 300,
          zIndex: 100,
          paddingBottom: 50 
       }}>
          <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 10 }}>

           <Link href={`/profile/${profileAddress}`} legacyBehavior>
              <a className="profile-link-wrapper" style={{ width: '100%' }}>

             <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', background: 'white' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>

                {/*<Avatar src={ensAvatarData} alt="ENS Avatar" />*/}
                 <span
                    style={{
                      borderRadius: '50%',
                      overflow: 'hidden',
                      minWidth: '50px',
                      minHeight: '50px',
                      height: 50,
                      width: 50,
                      marginBottom: 10,
                    }}>
                     <Blockies scale={6.5} seed={profileAddress} />
                 </ span>

               <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {ensNameData
                     ? <>
                         <Title level={4} style={{ fontWeight: 'bold', margin: 0, padding: 0 }}>{ensNameData}</Title>
                         <span>
                             <Text style={{ marginRight: 10 }}>{formattedAddress}</Text>
                             {/*<Text style={{ padding: '5px 10px', fontSize: '11px', borderRadius: '10px', color: 'rgb(83, 100, 113)', background: 'rgb(239, 243, 244)'}}>Follows You</Text>*/}
                         </span>
                       </>
                       : <span>
                             <Text style={{ fontWeight: 'bold' }}>{formattedAddress}</Text>
                            {/*<Text code>Follows You</Text>*/}
                         </span>
                   }
               </div>
             </div>

               <Button shape={'round'}>Follow</Button>
             </div>

              </a>
           </Link>

          <div style={{ display: 'flex', flexDirection: 'column' }}>

          <Divider style={{ margin: 10, padding: 0}} />

             <Text style={{ lineHeight: 1}}>Documenting the singularity.Digital minds are here.
                        AGI is coming.</Text>

               <article style={{ display: 'flex' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', marginRight: 10 }}>
                        <Title level={4} style={{ fontWeight: 'bold', padding: 0, margin: 0, paddingTop: 10 }} >100</Title>
                        <Text>Following</Text>
                    </span>

                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <Title level={4} style={{ fontWeight: 'bold', padding: 0, margin: 0, paddingTop: 10 }} >100</ Title>
                        <Text>Followers</Text>
                    </span>
                </article>

                 <article style={{ display: 'flex', alignItems: 'center' }}>
                     <span style={{ display: 'flex', marginRight: 10 }}>
                        <Avatar size={'small'} style={{ border: '1px solid white' }} />
                        <Avatar size={'small'} style={{ border: '1px solid white', marginLeft: '-10px' }}  />
                        <Avatar size={'small'} style={{ border: '1px solid white', marginLeft: '-10px' }} />
                     </span>
                            
                            {/*<span style={{ display: 'flex', flexDirection: 'column', marginTop: 10, flex: 1 }}>
                        <Text style={{ lineHeight: 1, fontSize: '.7rem'}}>Followed by</Text>
                        <Text style={{ lineHeight: 1, color: 'gray', fontSize: '.7rem' }}>gAIs, poko18, and 601 others you follow</Text>
                     </span>*/}
                 </article>
                        
              </div>
          </article>
      </section>
    </ProfilePopOverStyles>
  )
}

export default ProfilePopOver
