import type { ReactElement } from 'react'
import { useState } from 'react'

// NEXTJS
// import Image from 'next/image'
// import Link from 'next/link'

// ROUTING
// import { useRouter } from 'next/router'

// LAYOUTS
import NavLayout from 'src/layouts/NavLayout'

// CSS
import { CreationStyles } from './CreationStyles'

// COMPONENTS
// import CreationCard from '@/components/Creation/CreationCard/CreationCard'
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
} from 'antd'
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
// import { BiUserPlus } from 'react-icons/bi'
import { HiOutlineArrowNarrowUp, HiOutlineFingerPrint } from 'react-icons/hi' // HiCommandLine
import { MdOutlineDateRange } from 'react-icons/md'
import { BsFillBookmarkFill, BsAspectRatio } from 'react-icons/bs'
import { SlSizeFullscreen } from 'react-icons/sl'

// CONSTANTS
// const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'

// HOOKS
// import useWindowDimensions from '@/hooks/useWindowDimensions'

// UTILS
import shaURL from '@/util/shaURL'
import { formatAddress } from '@/util/address'
import time_ago from '@/util/time_ago'

// TYPES
// type SizeType = 'default' | 'small' | 'large'
// type ButtonShapeType = 'circle' | 'square' | 'round' | 'default'
// type AvatarShapeType = 'circle' | 'square'

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

import { RelatedCreationsStyles } from './RelatedCreationsStyles'

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

        <button className="cr-search-more">
          <Text>Search More</Text>
          <HiOutlineArrowNarrowUp className="search-icon" />
        </button>
      </Row>

      <Row className="cr-related-creations">
        {relatedCreationsArray.map((el, i) => {
          return (
            <Row key={i} className="cr-related-creation">
              <span>{el.toString()}</span>
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
  // const { width } = useWindowDimensions()

  // const router = useRouter();
  // const { pathname, query, asPath } = router;

  // hover stats
  const [isHovering, setIsHovering] = useState(true)

  // const { sort_by, filter_by } = context;

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
    <CreationStyles id="creation-wrapper">
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
    </CreationStyles>
  )
}

Creation.getLayout = function getLayout(page: ReactElement, props) {
  return <NavLayout {...props}>{page}</NavLayout>
}
