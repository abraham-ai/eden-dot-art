import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

// NEXTJS
// import Image from 'next/image'
// import Link from 'next/link'

// ROUTING
// import { useRouter } from 'next/router'

// LAYOUTS
import NavLayout from 'src/layouts/NavLayout'

// CSS
import styled from 'styled-components'

// COMPONENTS
// import CreationCardMinimal from '@/components/Creation/CreationCardMinimal/CreationCardMinimal'
// import CreationSocial from '@/components/Creation/CreationSocial/CreationSocial'
// import CreationShare from '@/components/Creation/CreationShare/CreationShare'
// import RunningCreation from '@/components/Creation/CreationProgress/CreationProgress'
// import CreatorAddress from '@/components/Creator/CreatorAddress/CreatorAddress'
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// LIBS
// import Skeleton from 'react-loading-skeleton'; // , { SkeletonTheme }
// import 'react-loading-skeleton/dist/skeleton.css'
import Blockies from 'react-blockies'

// ANTD
import {
  Avatar,
  Divider,
  Row,
  Col,
  Tag,
  Typography,
  Button,
  Popover,
} from 'antd' // Skeleton,
const { Title, Text } = Typography

// ICONS
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaStar, FaRetweet, FaRegStar } from 'react-icons/fa'
import { SearchOutlined } from '@ant-design/icons'
import { IoIosShareAlt } from 'react-icons/io'
// import { SyncOutlined } from '@ant-design/icons';
// iSparkles,
// import { AiFillEye } from 'react-icons/ai'
// import { AiFillFire } from 'react-icons/ai'
import { HiOutlineArrowNarrowUp, HiOutlineFingerPrint } from 'react-icons/hi' // HiCommandLine
import { MdOutlineDateRange } from 'react-icons/md'
import { BiUserPlus } from 'react-icons/bi'
import { BsFillBookmarkFill, BsAspectRatio } from 'react-icons/bs'
import { SlSizeFullscreen } from 'react-icons/sl'

// CONSTANTS
// const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions'

// UTILS
import shaURL from '@/util/shaURL'
import { formatAddress } from '@/util/address'
import time_ago from '@/util/time_ago'

// TYPES
type SizeType = 'default' | 'small' | 'large'
type ButtonShapeType = 'circle' | 'square' | 'round' | 'default'
type AvatarShapeType = 'circle' | 'square'

const CreationStyle = styled.article`
  padding: 0 0 20px 0;
  margin-top: 60px;
  // background: pink;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  /*** CREATION ***/
  .creation {
    display: flex;
    // background: blue;
  }
  @media (max-width: 1400px) {
    .creation {
      display: flex;
      flex-direction: column;
    }
  }
  /*** CR-POST ***/
  .cr-post {
    width: 100%;
    // flex-flow: unset;
    flex-direction: column;
  }
  @media (max-width: 930px) {
    .cr-post {
      min-width: unset;
      flex-flow: wrap;
    }
  }
  /*** CR-CARD ***/
  .cr-card {
    display: flex;
    justify-content: center;
    flex: 1 1 auto !important;
    // min-width: 100%;
    // min-width: 1200px;
    min-height: 198px;
    /* min-height: 450px; */
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    margin: 20px;
    max-height: 700px;
    /* border: 1px solid #dbdbdb; */
    // transition: 300ms;
    // background: turquoise;
  }
  // .cr-card:hover {
  //   transform: translateY(-4px);
  //   box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important;
  //   cursor: pointer;
  // }
  .cr-card .ant-card-body {
    padding: 0;
    display: flex;
  }
  /*** CR-MAIN LINK ***/
  .cr-main-link {
    width: 100%;
    height: 100%;
    position: absolute;
    background: yellow;
    z-index: 0;
    left: 0;
    top: 0;
  }
  .cr-main-row {
    display: flex;
  }
  /*** CR-IMG WRAPPER MAIN***/
  .cr-img-wrapper.main {
    /* height: 0; */
    // min-width: 100%;
    /* padding-bottom: 100%; */
    /* min-height: 240px; */
    position: relative;
    z-index: 70;
  }
  .cr-img-wrapper > span {
    display: block;
    top: 0;
    width: 100%;
    position: absolute;
    height: 100%;
  }
  /*** CR-IMG WRAPPER BACKGROUND ***/
  .cr-img-wrapper.background {
    display: flex;
    justify-content: center;
    position: absolute;
    height: 120%;
    width: 120%;
    min-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    filter: blur(1.5rem);
    z-index: 0;
    background: black;
  }
  .cr-img-wrapper.background img {
    width: 100%;
    opacity: 0.3;
    margin: 0;
    padding: 0;
  }
  /*** CR-IMAGE ***/
  .cr-image {
    z-index: 10;
    width: 100%;
    background: yellow;
    border: 4px solid black;
  }

  // .ant-image:hover {
  //   transition: ease-in-out;
  // }
  // .ant-image:hover {
  //   /* background-color: rgba(0, 0, 0, 0.03) !important; */
  //   background-color: #005effa8 !important;
  //   /* box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important; */
  // }
  // .ant-image-mask:hover {
  //   opacity: 0.25;
  // }
  .cr-status {
    display: flex;
    flex: 1;
  }
  /*** CR-MAIN ***/
  .cr-main {
    z-index: 10;
    width: 100%;
    // min-width: 544px;
    // max-width: 544px;
    // background: yellow;
    // border: 4px solid black;
    // padding-top: 50px;
    padding: 0 0 0 20px;
    margin-right: 10px;
  }
  @media (max-width: 930px) {
    .cr-main {
      display: flex;
      flex: 1;
      flex-direction: column;
      width: 100%;
      min-width: unset;
      max-width: unset;
      margin: 0 20px;
      padding: 0;
    }
  }
  /*** CR-MAIN-HEADER ***/ 
  .cr-main-header {
    // background: lime; 
    display: flex; 
    align-items: center;
  }
  @media (max-width: 1400px) {
    .cr-main-header {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  /*** CR-TEXT ***/
  .cr-text {
    font-size: 1.65em;
    text-align: start;
    line-height: 1.2em;
    padding: 24px 16px;
    min-height: 105px;
    font-weight: 600;
    color: #14133a;
  }
  /*** CR-INFO ***/
  .cr-info {
    /* padding: 10px; */
    flex: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  /** CR-CREATOR **/
  .cr-creator {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    font-size: 1.4em;
    flex: 1;
  }
  @media (max-width: 930px ) {
    .cr-creator {
      flex: 1;
      align-items: center;
      justify-content: flex-start;
    }
  }
  /*** CR-CREATOR PROFILE ***/
  .cr-creator-profile {
    margin: 0 10px 0 0;
    // background: red;
  }
  /*** CR-CREATOR-NAME WRAPPER ***/
  .cr-creator-name-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  /*** CR-CREATOR-NAME ***/
  .cr-creator-name {
    font-size: 1rem;
    font-weight: 600;
  }
  @media (max-width: 930px) {
    .cr-creator-name {

    }
  }
  /*** CR-BUTTONS ***/
  .cr-buttons {
    display: flex;
    flex: 1;
    /* padding-bottom: 25px; */
    font-size: 1.2em;
  }
  .cr-card.regular .cr-buttons > div {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
  .cr-stats {
    display: flex;
  }
  .cr-icon {
    display: flex;
    align-items: flex-start;
    font-size: 2em;
  }
  .cr-eth-url {
    font-size: 0.8em;
  }
  .cr-separator {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
  .cr-time-ago {
    display: flex;
    flex: 0;
    min-width: 50px;
    color: white;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    padding: 15px 15px 0 15px;
  }
  .ant-skeleton-element {
    display: inline-block;
    min-width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
  }
  .ant-skeleton-image {
    width: 100%;
    height: 100%;
    /* animation: skeleton-loading 1s linear infinite alternate; */
  }
  /*** CR-SOCIALS ***/
  .cr-socials {
    max-width: 40px; 
    min-width: 40px;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex: 0;
    align-items: center; 
    justify-content: flex-end;
    flex-direction: column;
    margin: 0 20px;
    z-index: 70;
  }
  .cr-socials .cr-social {
    text-align: center;
    align-items: center;
    margin-bottom: 20px;
  }
  /*** CR-SOCIAL BUTTON **/
  .cr-social .btn {
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  /*** CR-SOCIAL ICON **/
  .cr-social .icon {
    color: white;
    min-height: 32px;
    min-width: 32px;
    filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.4));
  }
  /*** CR-SOCIAL TEXT **/
  .cr-social .text {
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-shadow: 1px 1px 2px black;
  }
  /*** CR-PROPERTIES WRAPPER ***/
  .cr-properties-wrapper {
    margin-top: 10px;
  }
  @media (max-width: 930px) {
    .cr-properties-wrapper {
      display: flex;
      // background: orange;
      flex-direction: column;
      width: 100%;
    }
  }
  @media only screen and (max-width: 930px) {
    flex-direction: column;
  }
  /*** CR-PROPERTY ***/
  .cr-property {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    // background: cyan;
  }
  @media only screen and (max-width: 930px) {
    .cr-property {
      width: 100%;
    }
  }
  /*** CR-PROPERTY TYPE ***/
  .cr-property-type {
    display: flex;
    align-items: center;
  }
  .cr-property .icon {
    font-size: 1.2rem;
  }
  .cr-property .ant-typography {
    font-size: 1rem;
    margin-left: 5px;
  }
  /*** CR-PARENT ***/
  button.cr-parent.ant-btn-link.ant-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px 10px 10px 10px;
    // background: red;
  }
  .cr-parent .text {
    font-size: 1rem;
  }
  .cr-parent .icon {
    margin-right: 5px;
    font-size: 1rem;
  }
  /*** CR-PARENT CREATION ***/
  button.cr-parent.ant-btn-link.ant-btn img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }
  /*** CR-RELATED ***/
  .cr-related {
    // background: orange;
  }
  .cr-related h3 {
    margin: 0;
  }
  /*** CR-RELATED SEARCH MORE ***/
  .cr-search-more {
    // background: pink;
    display: flex;
    align-items: center;
  }
  .cr-search-more .search-icon {
    font-size: 1.2rem;
    transform: rotate(40deg);
    margin-left: 5px;
    // background: blue;
  }
  /*** CR-RELATED CREATIONS ***/
  .cr-related-creations {
    display: grid;
    grid: auto-flow / 200px 200px;
    grid-gap: 20px;
    flex: 1;
    margin-top: 20px;
    // flex-direction: column;
    // margin-top: 10px;
    // background: orange;
    overflow: hidden;
  }
  @media (max-width: 930px) {
    .cr-related-creations {
      grid: auto-flow / 1fr 1fr;
    }
  }
  /*** CR-RELATED CREATION ***/
  .cr-related-creation {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 0 15px 0;
    // background: yellow;
  }
  .cr-related-creation:hover {
    cursor: pointer;
  }
  /*** CR-RELATED CREATION IMG ***/
  .cr-related-creation-img {
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 200px;
  }
  @media (max-width: 930px) {
    .cr-related-creation-img {
      max-width: unset;
    }
  }
  .cr-related-creation-img img {
    border-radius: 5px;
    width: 100%;
    margin-right: 10px;
  }
  /*** CREATIONS MINI **/
  #creations.mini {
    grid-template-columns: repeat(7, 1fr);
  }
  .cr-card.mini {
    max-width: 150px;
    min-height: 200px;
    min-width: unset;
  }
  #creations.mini .cr-buttons {
    flex-direction: column;
  }
  /*** CR-CARD MINI CR-BUTTON ***/
  #creations.mini .cr-buttons > div {
    display: flex;
    flex-direction: column;
  }
  #creations.mini .cr-card.mini .cr-text {
    font-size: 14px;
    min-height: 95px;
    line-height: 1em;
  }
  #creations.mini .cr-eth-url > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  #creations.mini .cr-eth-url .ant-typography {
    padding: 8px 0 0 0;
  }
  .current-stat {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 0 0 10px;
  }
  .social-icon {
    display: flex;
    align-items: center;
  }
  .creation-current-stat .count {
    font-weight: 600;
  }
  .creation-current-stat .social-icon.praise svg {
    color: rgb(121, 75, 196);
    border-color: rgb(121, 75, 196);
  }
  .creation-current-stat .social-icon.burn svg {
    color: rgb(249, 4, 128);
    border-color: rgb(249, 4, 128);
  }

  @media only screen and (max-width: 560px) {
      padding-top: 10px;
      border: none;
      margin-bottom: 15px;
      flex: 1;
      max-width: unset;

      .cr-text {
        padding: 16px 16px 0 16px;
        font-size: 18px;
        font-weight: 600;
      }
      .cr-buttons {
        height: 54px;
      }
      .social-buttons-wrapper {
        height: 54px;
        align-items: center;
        justify-content: flex-start;
        padding-left: 16px;
      }
      .social-buttons-wrapper > span {
        display: flex;
        flex: 2;
        justify-content: flex-end;
        padding-right: 16px;
      }
    }
  }
`

const singleCreation = {
  id: '63877cb82e7cdbe5f534a05a',
  text_input: 'Jesus and Santa kissing',
  sha: 'aa8cca280108dcdb8830a9f886026f50a25b8f51fb88a1dcc425abe3b4502b62',
  date: '2022-11-30T15:54:32.843Z',
  source: {
    id: '2',
    address: '0x0000000000000000000000000000000000000000',
    handle: '@abraham',
    type: 'discord',
    __typename: 'Source',
  },
  statistics: {
    burned_by_me: false,
    burns: 0,
    praised_by_me: false,
    praises: 0,
    __typename: 'Statistics',
  },
  status: 'complete',
  status_code: 100,
  intermediate_sha: [
    '70748316b09f36c86d0b448a14a9b919aafac3a01be88262f59cb1c27ac33cdd',
    'a5e7c4810b3ea086edf02a470c6da00f8a2e994074dc839ae04226f5dd81ce12',
    '2301810161d15d1e9f281e3b8e437e78b5df5e1d2d9c39c52c3e88d708404a2f',
    'c4fea572f51b9a1835d507d34624fe038c5611e4033d6d123a5ec06ad064bcea',
    '2b241b327e474c3983d559fe2124d364cf244adad35621993bf6fa161cdd1bf7',
    '86cbf3ffe870a0af2229f3d4426102873252fa5e97c07184255da0bb21246ce2',
    '03e0636c17c19d348c36d80c9cfab1182948cc9e32a8b4dabb165ec1c166c2d0',
    '89fa4ad744e646db4e90061a3d65e295328f1f3fc145cbcd0d384864e9a46410',
    'fc22158e1e4d062ccc72a3fbce11c51c864f2891dc27e29efc3dff972c8c81b0',
    '0062f27ff02fe47f0c09d2356ece43fcb2948c4846cd9db37d4450a19e950ecc',
    'f372cd9fd7149c439a8def1bc37e37700345cdb2d3012673bdbe6a2bd218a913',
    'ceff54eb5ec5c6126c1e4406c677481db3a1997fbdf89158ad5bea3dcb2e5728',
    '20780c1c6b751cd6666de457d9ab2117b8bc2e5c38a85e566ebf63ac3ab9c706',
    '2888950490ab6098f44b2a95db52c00f769016bfb07413facb79395c3c8b01f1',
    'f416fd203f9da925908d9585ec9460967e522de3382bfcad5970e9198047c86c',
    '41ba5a909f1fbd8c95a93bfa61d1a1a08fb5654281ffc73b7fbec20f3c88ebb',
  ],
  __typename: 'Creation',
}

const RelatedCreationsStyles = styled.section`
  margin-top: 20px;
  z-index: 10;
  // min-width: 544px;
  max-width: 544px;
  padding: 0 20px;
  // margin-right: 10px;

  @media (max-width: 930px) {
    max-width: unset;
  }

  /*** CR-RELATED HEADER ***/
  .cr-related-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 930px) {
    .cr-related-header {
      flex-flow: unset;
    }
  }

  @media (max-width: 930px) {
    margin: 20px 20px 0 20px;
    padding: 0;
    // background: lime;
  }
`

const RelatedCreations = ({ item = singleCreation }) => {
  const length = 20
  const relatedCreationsArray = [...Array(length)].map(() => {
    return { value: 0 }
  })

  return (
    <RelatedCreationsStyles id="cr-related-wrapper">
      <Row className="cr-related-header">
        <span style={{ display: 'flex' }}>
          <SearchOutlined
            style={{ color: 'black', fontSize: '1.5rem', marginRight: 10 }}
          />
          <Title level={3}>Related Creations</Title>
        </span>

        <Button className="cr-search-more" shape="round" size="large">
          <Text>Search More</Text>
          <HiOutlineArrowNarrowUp className="search-icon" />
        </Button>
      </Row>

      <Row className="cr-related-creations">
        {relatedCreationsArray.map((el, i) => {
          return (
            <Row key={i} className="cr-related-creation">
              <span className="cr-related-creation-img">
                <img src={shaURL(item)} />
              </span>
              <Col style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontWeight: 600 }}>{item.text_input}</Text>
                <Text style={{ color: '#717171' }}>
                  {formatAddress(item.source.address)}
                </Text>
                <Row style={{ display: 'flex', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#717171',
                      marginRight: 10,
                    }}
                  >
                    <FaRegStar
                      className="icon"
                      style={{ marginRight: 5, color: '#717171' }}
                    />
                    <Text style={{ color: '#717171' }}>{100}</Text>
                  </span>
                  <span
                    className="cr-related-creation-date"
                    style={{ color: '#717171' }}
                  >
                    {time_ago(item.date)}
                  </span>
                </Row>
              </Col>
            </Row>
          )
        })}
      </Row>
    </RelatedCreationsStyles>
  )
}

{
  /* <Text>{item.text_input}</Text>
<Text>{item.source.address}</Text>
<span style={{ display: 'flex' }}>
    <FaStar className='icon' />
    <Text>{100}</Text>
</span> */
}

export default function Creation({
  //   onFilterChange = () => null,
  //   onMint = () => null,
  item = singleCreation,
  size = 'regular',
  //   mint,
  //   mintButton,
}) {
  // hooks
  const { width } = useWindowDimensions()

  // const router = useRouter();
  // const { pathname, query, asPath } = router;

  // hover stats
  const [isHovering, setIsHovering] = useState(true)
  // const [visible, setVisible] = useState(true);

  // const sort_by = useAppSelector(state => state.sort.value);
  // const filter_by = useAppSelector(state => state.filter.value);

  const { text_input } = item
  // source, statistics
  // const { address } = source;

  // FUNCTIONS
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  // function currentStat(sort_by) {
  //   let currentStat;
  //   switch (sort_by) {
  //     case 'new':
  //       currentStat = null;
  //       break;
  //     case 'burn':
  //       currentStat = (
  //         <div className='current-stat'>
  //           <span className='social-icon burn'>
  //             <AiFillFire size='24px' />
  //           </span>
  //           <span className='count'>{statistics.burned_by_me}</span>
  //         </div>
  //       );
  //       break;
  //     case 'praise':
  //       currentStat = (
  //         <div className='current-stat'>
  //           <span className='social-icon praise'>
  //             <HiSparkles size='24px' />
  //           </span>
  //           <span className='count'>{statistics.praised_by_me}</span>
  //         </div>
  //       );
  //       break;
  //   }
  //   return currentStat;
  // }

  // DEBUG
  // console.log({ item });
  // console.log(`${window?.appConfig?.ABRAHAM_IPFS}/${item.sha}/${item.eden_task_id}`);
  // console.log(item.text_input);
  // console.log(item.stats.burned_by_me);
  // console.log(item.stats.praised_by_me);
  // console.log(item);
  // console.log(item.sha);

  // const isAvailable = item =>
  //   item.status === 'pending' || (item.status === 'running' && item.status_code === 0) ? false : true;

  // _id, sha

  const isParent = true

  {
    /* {sha ? (
<Link className='cr-main-link'
href={`/creation/${sha}`}
/>) : null } */
  }

  return (
    <CreationStyle id="creation-wrapper">
      <Col className="creation">
        <Row className="cr-post">
          <div className={`cr-card ${size}`}>
            <div
              className={isHovering ? 'hover cr-img-wrapper' : 'cr-img-wrapper'}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="cr-img-wrapper main">
                <img
                  className="cr-img"
                  alt={text_input}
                  src={shaURL(item)}
                  // loader={'loading'}
                />
              </div>

              <div className="cr-img-wrapper background">
                <img
                  style={{ width: '100%' }}
                  className="cr-img"
                  alt={text_input}
                  src={shaURL(item)}
                  // loader={'loading'}
                />
              </div>
            </div>

            <Col className="cr-socials">
              <span className="cr-social like">
                <Button className="btn" shape="circle" type="text">
                  <FaStar className="icon" />
                  <Text className="text">303</Text>
                </Button>
              </span>
              <span className="cr-social remix">
                <Button className="btn" shape="circle" type="text">
                  <FaRetweet className="icon" />
                  <Text className="text">310</Text>
                </Button>
              </span>
              {/* <span className='cr-social views'>
                <Button className='btn' shape='circle' type='text'>
                  <AiFillEye className='icon' />
                  <Text className='text'>310</Text>
                </Button>
              </span> */}
              <span className="cr-social bookmark">
                <Button className="btn" shape="circle" type="text">
                  <BsFillBookmarkFill className="icon" />
                  <Text className="text">Save</Text>
                </Button>
              </span>
              <span className="cr-social share">
                <Button className="btn" shape="circle" type="text">
                  <IoIosShareAlt className="icon" />
                  <Text className="text">Share</Text>
                </Button>
              </span>
              <span className="cr-social share">
                <Button className="btn" shape="circle" type="text">
                  <FiMoreHorizontal className="icon" />
                </Button>
              </span>
            </Col>
          </div>

          <section className="cr-main">
            <Row style={{ display: 'flex', flexDirection: 'column' }}>
              <Text style={{ color: 'purple', fontWeight: 600 }}>
                {'/dream'}
              </Text>
              <Title level={4} style={{ margin: 0 }}>
                {item.text_input}
              </Title>
            </Row>

            <Divider />

            <Row className="cr-main-header">
              <Row className="cr-creator">
                <Popover
                  content={<ProfilePopOver profileAddress={'0x000000000'} />}
                  placement="bottomLeft"
                >
                  <Avatar
                    className="cr-creator-profile"
                    icon={<Blockies seed={item.source.address} scale={6} />}
                  />
                </Popover>

                <Row className="cr-creator-name-wrapper">
                  <Title
                    className="cr-creator-name"
                    level={3}
                    style={{ margin: 0 }}
                  >
                    {formatAddress(item.source.address)}
                  </Title>
                  <Row>
                    <Text>{formatAddress(item.source.address)}</Text>
                    <Text style={{ marginLeft: 20 }}>
                      {time_ago(item.date)}
                    </Text>
                  </Row>
                </Row>
              </Row>

              {/* <Button 
                  className='cr-follow-btn'
                    onClick={() => null}
                    shape='round'
                    size='large'
                    icon={<BiUserPlus style={{ marginRight: 10, minWidth: 20, fontSize: '1.4rem' }} />} 
                    style={{ display: 'flex', alignItems: 'center'}}
                >
                  Follow
                </Button> */}

              <Row className="cr-properties-wrapper">
                <Tag className="cr-property">
                  <span className="cr-property-type">
                    <MdOutlineDateRange className="icon" />
                    <Text>Date</Text>
                  </span>
                  <Text>{time_ago(item.date)}</Text>
                </Tag>
                <Tag className="cr-property">
                  <span className="cr-property-type">
                    <SlSizeFullscreen className="icon" />
                    <Text>Size</Text>
                  </span>
                  <Text>{'512 x 512'}</Text>
                </Tag>
                <Tag className="cr-property">
                  <span className="cr-property-type">
                    <BsAspectRatio className="icon" />
                    <Text>Command</Text>
                  </span>
                  <Text>/dream</Text>
                </Tag>
                <Tag className="cr-property">
                  <span className="cr-property-type">
                    <BsAspectRatio className="icon" />
                    <Text>Shape</Text>
                  </span>
                  <Text>square</Text>
                </Tag>
              </Row>
            </Row>

            {isParent ? (
              <Button className="cr-parent" type="link">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <HiOutlineFingerPrint className="icon" />
                  <Text className="text">Parent</Text>
                </span>
                <img src={shaURL(item)} />
              </Button>
            ) : null}

            {/* { width <= 930 ? null :  <RelatedCreations /> }     */}
          </section>
        </Row>

        {/* { width <= 930 ? <RelatedCreations /> : null } */}
        {/* { width <= 930 ? null :  <RelatedCreations /> }  */}
        <RelatedCreations />
      </Col>
    </CreationStyle>
  )
}

Creation.getLayout = function getLayout(page: ReactElement, props) {
  return <NavLayout {...props}>{page}</NavLayout>
}
