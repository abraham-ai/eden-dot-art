import React, { useEffect, useState, useCallback, useRef } from 'react'

// NEXT
import { useRouter } from 'next/router'

// MUI
import { Box, Skeleton, styled } from '@mui/material'

// LIBS
import { Palette } from 'react-palette'

// COMPONENTS
import CreatorDashboard from '@/components/CreatorDashboard'
import CreatorProfileAddress from '@/components/CreatorProfileAddress'
import CreationCardMinimal from '@/components/CreationCardMinimal'

// CONSTANTS
// import { NETWORKS } from '../../constants'

const CreatorStyles = styled(Box)(
  () => `
  padding: 0;
  z-index: 10;
  background: #fafafa;
  .creator-banner {
    max-height: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    width: 100%;
    z-index: 50;
  }
  .creator-banner img {
    width: 100%;
  }
  .creator-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
  }
  .creator-body {
    display: flex;
  }
  .creator-profile-info {
    min-width: 300px;
  }
  .creator-profile {
    height: 150px;
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
  .creator-header {
    margin-top: -90px;
    background: white;
  }
  .creator-dashboard-wrapper {
    display: flex;
    justify-content: center;
    background-color: white;
  }
  @media (min-width: 40em) {
    .creator-grid {
      padding: 24px;
      display: grid;
      grid-gap: 36px !important;
      grid-template-columns: repeat(2, 1fr);
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
`,
)

/// 📡 What chain are your contracts deployed to?
// const targetNetwork = NETWORKS.localhost // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

// 🔭 block explorer URL
// const blockExplorer = targetNetwork.blockExplorer

export default function Creator({ creationsState = {} }) {
  // const { url } = useRouteMatch()
  // const { creatorId } = useParams()
  // const location = useLocation()

  {
    /* <Link className='cr-main-link'
  to={{
    pathname: `/creator/${slug(item.address)}/creation/${slug(item.id)}`,
    search: location.search,
  }}>
</Link> */
  }

  const img_url =
    'https://res.cloudinary.com/react-graphql-store/image/upload/v1637370366/abraham-test-image-2_jroico.jpg'

  return (
    <>
      <CreatorStyles>
        <div className="creator-banner">
          <img src={img_url} />
          <Skeleton />
        </div>

        <div className="creator-header">
          <span className="creator-profile">
            <CreatorProfileAddress />
            {/* address={creatorId} */}
            {/* blockExplorer={blockExplorer} */}
            <span className="creator-address">{'Creator Address'}</span>
            {/* creatorId */}
          </span>
          <div className="creator-profile-info">
            <span>Creator profile info</span>
          </div>
          <Palette src={img_url}>
            {({ data, loading, error }) => (
              <div style={{ color: data.lightVibrant }}>
                Text with the vibrant color
              </div>
            )}
          </Palette>
        </div>

        <div className="creator-body">
          <div className="creator-grid-wrapper">
            <div className="creator-dashboard-wrapper">
              <CreatorDashboard />
              {/* creatorAddress={creatorId} */}
            </div>

            <div className="creator-grid">
              {Object.keys(creationsState).map((key, index) => (
                // <span
                //   index={index}
                //   to={{
                //     pathname: `${url}/${slug(creationsState[key].id)}`,
                //     search: location.search,
                //   }}
                //   onClick={console.log('click test!!!')}
                // >
                <CreationCardMinimal
                  className="creation-wrapper"
                  key={index}
                  item={creationsState[key]}
                />
                // </span>
              ))}
            </div>
          </div>
        </div>
      </CreatorStyles>
    </>
  )
}