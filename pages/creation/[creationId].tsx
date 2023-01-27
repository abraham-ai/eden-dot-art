import { useEffect, useState } from 'react';

// NEXTJS
import Link from 'next/link'

// ROUTING
import { useRouter } from 'next/router';

// REDUX
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { batch } from 'react-redux';
import {
	incrementRunningCreationCount,
  decrementRunningCreationCount,
  setIsRunningFalse,
  setIsRunningTrue,
} from '@/redux/slices/creationsSlice';

// CSS
import styled from 'styled-components';

// COMPONENTS
// import CreationSocial from '@/components/Creation/CreationSocial/CreationSocial'
// import CreationShare from '@/components/Creation/CreationShare/CreationShare'
// import RunningCreation from '@/components/Creation/CreationProgress/CreationProgress'
// import CreatorAddress from '@/components/Creator/CreatorAddress/CreatorAddress'

// LIBS
// import Skeleton from 'react-loading-skeleton'; // , { SkeletonTheme } 
import 'react-loading-skeleton/dist/skeleton.css';

// UI
import { Image, Card, Skeleton } from 'antd';

// ICONS
// import { SyncOutlined } from '@ant-design/icons';
import { HiSparkles } from 'react-icons/hi';
import { AiFillFire } from 'react-icons/ai';

// CONSTANTS
// const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions';

// UTILS
import shaURL from '@/util/shaURL';
// import time_ago from '@/util/time_ago';

// TYPES
type SizeType = 'default' | 'small' | 'large';
type ButtonShapeType = 'circle' | 'square' | 'round' | 'default';
type AvatarShapeType = 'circle' | 'square';

const CreationStyle = styled.article`
  padding: 0 0 20px 0;
  .cr-card {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto !important;
    min-width: 100%;
    min-height: 198px;
    /* min-height: 450px; */
    position: relative;
    transition: 300ms;
    border-radius: 16px;
    overflow: hidden;
    /* margin: 0 0 30px; */
    /* border: 1px solid #dbdbdb; */
    /* background: white; */
  }
  .cr-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important;
    cursor: pointer;
  }
  .cr-card .ant-card-body {
    padding: 0;
  }
  .cr-main-link {
    width: 100%;
    height: 100%;
    position: absolute;
    background: yellow;
    z-index: 0;
    left: 0;
    top: 0;
  }
  .ant-image-preview-operations > li:nth-child(4) {
    display: none !important;
  }
  .ant-image-preview-operations > li:nth-child(5) {
    display: none !important;
  }
  .cr-main-row {
    display: flex;
  }
  .cr-img-wrapper {
    /* height: 0; */
    min-width: 100%;
    /* padding-bottom: 100%; */
    /* min-height: 240px; */
    position: relative;
  }
  .cr-img-wrapper > span {
    display: block;
    top: 0;
    width: 100%;
    position: absolute;
    height: 100%;
  }
  .cr-img-wrapper.hover .overlay-wrapper {
    /* background: #0000002d; */
    background-color: #00112d6b !important;
    /* #005effa8 */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .cr-img-wrapper .overlay-wrapper {
    position: absolute;
    top: 0;
    z-index: 90;
    display: none;
  }
  .overlay-buttons {
    display: none;
    flex: 0;
    justify-content: flex-end;
    align-items: center;
    padding: 15px;
    position: absolute;
    bottom: 0;
    z-index: 95;
    width: 100%;
  }
  .cr-img-wrapper.hover .overlay-buttons {
    display: flex;
  }
  .overlay-buttons .ant-btn.children {
    margin: 0 10px 0 0;
  }
  .overlay-buttons .buynow,
  .overlay-buttons .recreate {
  }
  .ant-image {
    z-index: 10;
    width: 100%;
  }
  .ant-image:hover {
    transition: ease-in-out;
  }
  .ant-image:hover {
    /* background-color: rgba(0, 0, 0, 0.03) !important; */
    background-color: #005effa8 !important;
    /* box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important; */
  }
  .ant-image-mask:hover {
    opacity: 0.25;
  }
  .cr-status {
    display: flex;
    flex: 1;
  }
  .cr-text {
    font-size: 1.65em;
    text-align: start;
    line-height: 1.2em;
    padding: 24px 16px;
    min-height: 105px;
    font-weight: 600;
    color: #14133a;
  }
  .cr-info {
    /* padding: 10px; */
    flex: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  .cr-creator {
    font-size: 1.4em;
    display: flex;
    flex: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .cr-img-wrapper .overlay-wrapper .cr-status .cr-text .ant-typography {
    color: white !important;
    font-size: 18px;
    line-height: 1;
  }
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
  .social-buttons-wrapper {
    display: flex;
    flex: 0;
    padding-left: 25px;
    justify-content: flex-end;
  }
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
    /* border-bottom: 1px solid #eff3f4; */
    /* background: white; */
    padding-top: 10px;
    border: none;
    margin-bottom: 15px;
    flex: 1;
    max-width: unset;
    :hover {
      transform: unset;
      box-shadow: unset !important;
      cursor: pointer;
    }
    .cr-text {
      padding: 16px 16px 0 16px;
      font-size: 18px;
      font-weight: 600;
    }
    .cr-buttons {
      height: 54px;
      /* background: yellow; */
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
`;

export default function Creation({
//   onFilterChange = () => null,
//   onMint = () => null,
  item = {
    id: '63877cb82e7cdbe5f534a05a',
    text_input: 'Jesus and Santa kissing',
    sha: "aa8cca280108dcdb8830a9f886026f50a25b8f51fb88a1dcc425abe3b4502b62",
    date: "2022-11-30T15:54:32.843Z",
    source: {
        id: "2",
        address: '0x0000000000000000000000000000000000000000',
        handle: '@abraham',
        type: 'discord',
        __typename: "Source"
    },
    statistics: {
        burned_by_me: false,
        burns: 0,
        praised_by_me: false,
        praises: 0,
        __typename: 'Statistics'
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
        '41ba5a909f1fbd8c95a93bfa61d1a1a08fb5654281ffc73b7fbec20f3c88ebb'
    ],
    __typename: "Creation"
  },
  size = 'regular',
//   mint,
//   mintButton,
}) {
  // hooks
  const { width } = useWindowDimensions();
  
	// const router = useRouter();
  // const { pathname, query, asPath } = router;

  // hover stats
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  // INIT REDUX
  const dispatch = useAppDispatch();
  const { creations, isRunning } = useAppSelector(state => state.creations);
  // isCreationRunning

  const sort_by = useAppSelector(state => state.sort.value);
  // const filter_by = useAppSelector(state => state.filter.value);

  const { text_input, source, statistics } = item;
  const { address } = source;

  // FUNCTIONS
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  function currentStat(sort_by) {
    let currentStat;
    switch (sort_by) {
      case 'new':
        currentStat = null;
        break;
      case 'burn':
        currentStat = (
          <div className='current-stat'>
            <span className='social-icon burn'>
              <AiFillFire size='24px' />
            </span>
            <span className='count'>{statistics.burned_by_me}</span>
          </div>
        );
        break;
      case 'praise':
        currentStat = (
          <div className='current-stat'>
            <span className='social-icon praise'>
              <HiSparkles size='24px' />
            </span>
            <span className='count'>{statistics.praised_by_me}</span>
          </div>
        );
        break;
    }
    return currentStat;
  }

  useEffect(() => {
    // DEBUG
    // console.log('useEffect Creation Component');
    // console.log({ item });
    // console.log(`PRAISED BY ME: ${item.stats.praised_by_me}`);
    // console.log(`BURNED BY ME: ${item.stats.burned_by_me}`);
    // console.log(item.status_code);
    // console.log(isCreationRunning); // bool
    // console.log({ isRunning }); // object
    // console.log(`IS-CREATION-RUNNING: ${isCreationRunning}`);
    // console.log(`IS-RUNNING: ${isRunning[item._id]}`);

    if (item.status === 'running' && typeof isRunning[item.id] === 'undefined') {
    //   console.log(`CREATION COUNT SHOULD INCREASE AND SET TO TRUE!!!!!!`);

      dispatch(setIsRunningTrue(item.id));
      dispatch(incrementRunningCreationCount());
    } else if (item.status_code === 100 && item.status === 'complete' && isRunning[item.id] === true) {
      // && isRunning[item._id] === true) {
    //   console.log(`CREATION COUNT SHOULD DECREASE AND SET TO FALSE!!!!!!`);
      batch(() => {
        dispatch(setIsRunningFalse(item.id));
        dispatch(decrementRunningCreationCount());
      });
    }

    // else if (item.status_code < 100 && isRunning[item._id] === false) {
    //   batch(() => {
    //     dispatch(setIsRunningTrue(item._id));
    //     // dispatch(incrementRunningCreationCount());
    //   });
    // }
  }, [item, dispatch, isRunning, creations]);

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

  {/* {sha ? (
<Link className='cr-main-link'
href={`/creation/${sha}`}
/>) : null } */}

  return (
    <CreationStyle id="creation">
      <Card className={`cr-card ${size}`}>

        {width < 560 ? (
          <div className='cr-content'>
            <Link className='cr-account-link' href={`/creator/${address}`}>
              <span className='cr-eth-url'>{address}</span>
            </Link>
          </div>
        ) : null}

        {/* <CreatorAddress address={address} /> */}

        <div className={isHovering ? 'hover cr-img-wrapper' : 'cr-img-wrapper'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="cr-img-wrapper">
            <Image
              className='cr-img'
              alt={text_input}
              src={shaURL(item)}
              preview={{ visible: false }}
              onClick={() => setVisible(true)}
            />
          </div>
        </div>

        <div className="creation-current-stat">{currentStat(sort_by)}</div>
      </Card>
    </CreationStyle>
  );
}


// {isAvailable(item) 
//   ? 
//     <div className="cr-img-wrapper">
//       <Image
//         className='cr-img'
//         alt={text_input}
//         src={shaURL(item)}
//         preview={{ visible: false }}
//         onClick={() => setVisible(true)}
//       />
//     </div>
//   : 
//     <span>test</span>
//   }



      //   <div className={isHovering ? 'hover cr-img-wrapper' : 'cr-img-wrapper'}
      //   onMouseOver={handleMouseOver}
      //   onMouseOut={handleMouseOut}
      // >
      //   {isAvailable(item) ? (
      //     item.status !== 'failed' ? (
      //       <div className="cr-img-wrapper">
      //         <Image
      //           className='cr-img'
      //           alt={text_input}
      //           src={shaURL(item)}
      //           preview={{ visible: false }}
      //           onClick={() => setVisible(true)}
      //         />
      //       </div>
      //     ) : (
      //       <Image
      //         className="cr-img"
      //         alt={text_input}
      //         src="error"
      //         fallback="data:image/png;base64,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"
      //       />
      //     )
      //   ) : (
      //     <Skeleton.Avatar
      //       shape={'circle'}
      //       className='avatar-skeleton'
      //       size='large'
      //     />
      //   )}
      // </div>