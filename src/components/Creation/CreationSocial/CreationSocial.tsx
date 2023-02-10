import React, { useEffect, useState } from 'react'

// CSS
import styled from 'styled-components'

// WAGMI
import { useAccount } from 'wagmi'

// COMPONENTS
import { CreationShare } from '@/components/CreationShare/CreationShare'

// ANTD
import { Button, Tooltip } from 'antd'

// ICONS
import { AiFillFire, AiOutlineFire } from 'react-icons/ai'
import { HiSparkles, HiOutlineSparkles } from 'react-icons/hi'
// HiShare, HiOutlineShare,
// import { ShareAltOutlined } from '@ant-design/icons'
// import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons'

// HOOKS
import useWindowDimensions from '../../../hooks/useWindowDimensions'

// HTTP
const axios = require('axios')
const serverUrl = process.env.EDEN_API_URL

const CreationSocialStyles = styled.nav`
  display: flex;
  flex: 1;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    align-items: center;
    font-size: 1.5em;
  }
  li {
    list-style: none;
    display: flex;
    padding: 0 10px;
    align-items: center;
    font-size: 18px;
  }
  li a {
    color: #14133a;
  }
  li:first-child {
    padding: 0 20px 0 0;
    margin: 0;
  }
  .social-icon-count {
    font-size: 14px;
  }
  .cr-burn,
  .cr-praise,
  .cr-share {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 50%;
    max-width: 35px;
  }
  .cr-burn .social-icon,
  .cr-praise .social-icon,
  .cr-share .social-icon {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: none;
    max-width: 20px;
    max-height: 20px;
    min-height: 20px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
  }
  .cr-share .ant-typography {
    margin: 0 !important;
  }
  .cr-share .ant-typography-copy {
    display: flex !important;
    align-items: center;
    color: rgba(0, 0, 0, 0.85);
  }
  .cr-share .ant-typography-copy:hover {
    color: rgb(82, 196, 26);
  }
  .ant-tooltip-open.ant-typography-copy-success:focus {
    color: rgb(82, 196, 26);
  }
  .ant-typography-copy.ant-typography-copy-success {
    color: rgb(82, 196, 26);
  }
  .cr-share .social-icon {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: black !important;
  }
  .cr-burn,
  .cr-praise {
    /* margin-right: 6px; */
  }
  .cr-burn:focus,
  .cr-praise:focus {
    color: unset;
  }
  .cr-burn .social-icon:hover,
  .cr-praise .social-icon:hover,
  .cr-share .social-icon:hover {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: none;
    min-width: 30px;
    min-height: 30px;
  }
  .cr-burn.disabled .social-icon:hover,
  .cr-praise.disabled .social-icon:hover {
    cursor: not-allowed;
  }
  .cr-burn .social-icon:hover {
    background: #fececb;
    color: rgb(249, 4, 128);
  }
  .cr-burn.is-active .social-icon {
    color: rgb(249, 4, 128);
    border-color: rgb(249, 4, 128);
  }
  .cr-burn.is-active ~ .social-icon-count {
    color: rgb(249, 4, 128);
  }
  .cr-praise .social-icon:hover {
    background: #f0dbff;
  }
  .cr-praise.is-active .social-icon {
    color: rgb(121, 75, 196);
    border-color: rgb(121, 75, 196);
  }
  .cr-praise.is-active ~ .social-icon-count {
    color: rgb(121, 75, 196);
  }
  .cr-share:hover .social-icon {
    background: #d9fcc3;
  }
  .cr-share:focus {
  }
  .ant-btn.disabled:hover {
    color: unset;
    border-color: unset;
  }
  .cr-burn.disabled .social-icon:hover,
  .cr-praise.disabled .social-icon:hover {
    background: none;
    color: unset;
  }
  .social-buttons-wrapper {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 0 0 0 40px;
  }
  .single-button-wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 50px;
  }
  .single-button-wrapper.share {
    justify-content: flex-end;
    width: 40px;
  }
  .cr-burn svg,
  .cr-praise svg,
  .cr-share svg {
    min-width: 20px !important;
    min-height: 20px !important;
    max-height: 22px;
    max-width: 22px;
    transform: translate(1px);
  }
  .cr-praise svg {
    height: 20px;
  }
  @media only screen and (max-width: 718px) {
    .cr-burn,
    .cr-praise,
    .cr-share {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      border: none;
      height: 40px;
      width: 40px;
      max-width: 40px;
      max-height: 40px;
      border-radius: 0;
      font-size: 2em;
      overflow: hidden;
      text-align: center;
      border-radius: 50% !important;
      min-height: 35px;
      min-width: 35px;
    }
    .cr-burn .social-icon:hover,
    .cr-praise .social-icon:hover,
    .cr-share .social-icon:hover {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      border: none;
      max-width: 45px;
      max-height: 45px;
    }
    .cr-burn span,
    .cr-praise span,
    .cr-share span {
      padding: 0;
      font-size: 24px;
    }
    .social-buttons-wrapper > span {
      display: flex;
      flex: 2;
      justify-content: flex-end;
      padding-right: 16px;
    }
  }
`

export default function CreationSocial({
  creatorAddress,
  creationID,
  creationTextInput,
  creationBurns,
  creationPraises,
  creationSha,
  praisedByMe,
  burnedByMe,
}) {
  const { width } = useWindowDimensions()

  //   const navMode = width < 718 ? 'inline' : 'horizontal';

  const [burns, setBurns] = useState(creationBurns)
  const [praises, setPraises] = useState(creationPraises)
  const [isShared, setIsShared] = useState(false)
  const [isPraised, setIsPraised] = useState(praisedByMe)
  const [isBurned, setIsBurned] = useState(burnedByMe)

  const { address } = useAccount()

  // DEBUG
  // console.log({ creationTextInput });
  // console.log({ creationBurns });
  // console.log({ creationPraises });
  // console.log({ burnedByMe });
  // console.log({ praisedByMe });
  // console.log({ isPraised });
  // console.log({ isBurned });

  useEffect(() => {
    setIsBurned(burnedByMe)
    setIsPraised(praisedByMe)
    setBurns(creationBurns)
    setPraises(creationPraises)
  }, [praisedByMe, burnedByMe, creationBurns, creationPraises])

  async function praiseHandler() {
    if (!address) {
      return
    }
    console.log(' Praise Handler ')
    let praiseOpperation = ''
    console.log({ isPraised })

    if (isPraised === true && praises > 0) {
      setPraises(praises - 1)
      praiseOpperation = 'decrease'
      setIsPraised(false)
    } else if (isPraised === false) {
      setPraises(praises + 1)
      praiseOpperation = 'increase'
      setIsPraised(true)
    }

    console.log({ praiseOpperation })

    const results = await axios.post(serverUrl + '/update_stats', {
      creation: creationSha,
      stat: 'praise',
      opperation: praiseOpperation,
      address: address,
    })

    console.log({ results })
    setPraises(results.data.praise)
  }

  async function burnHandler() {
    if (!address) {
      return
    }
    console.log('Burn Handler')
    let burnOpperation = ''
    console.log({ isBurned })

    if (isBurned === true && burns > 0) {
      setBurns(burns - 1)
      burnOpperation = 'decrease'
      setIsBurned(false)
    } else if (isBurned === false) {
      setBurns(burns + 1)
      burnOpperation = 'increase'
      setIsBurned(true)
    }

    console.log({ burnOpperation })

    const results = await axios.post(serverUrl + '/update_stats', {
      creation: creationSha,
      stat: 'burn',
      opperation: burnOpperation,
      address: address,
    })

    console.log({ results })
    setBurns(results.data.burn)
  }

  let praiseClasses, burnClasses
  if (isWeb3WalletConnected) {
    praiseClasses = isPraised ? 'cr-praise is-active' : 'cr-praise'
    burnClasses = isBurned ? 'cr-burn is-active' : 'cr-burn'
  } else {
    praiseClasses = 'cr-praise disabled'
    burnClasses = 'cr-burn disabled'
  }

  // DEBUG
  // console.log({ isPraised, isBurned, creationTextInput });
  // console.log({ isWeb3WalletConnected });
  // console.log({ praiseClasses });
  // console.log({ burnClasses });

  const isTooltipVisible = isWeb3WalletConnected ? null : false

  let burnCount, praiseCount
  if ((isWeb3WalletConnected && isPraised) || isBurned) {
    // console.log('show social based on address count');
    burnCount =
      burns > 1 ? <span className="social-icon-count">{burns}</span> : null
    praiseCount =
      praises > 1 ? <span className="social-icon-count">{praises}</span> : null
  } else {
    // console.log('show social based on public count');
    burnCount =
      burns > 0 ? <span className="social-icon-count">{burns}</span> : null
    praiseCount =
      praises > 0 ? <span className="social-icon-count">{praises}</span> : null
  }

  return (
    <CreationSocialStyles id="social-buttons">
      <div className="single-button-wrapper">
        <Tooltip
          placement="bottom"
          title={'praise'}
          defaultVisible={isTooltipVisible}
          mouseEnterDelay={0.8}
        >
          <Button className={praiseClasses} onClick={() => praiseHandler()}>
            <span className="social-icon">
              {isPraised ? (
                <HiSparkles size="36px" />
              ) : (
                <HiOutlineSparkles size="36px" />
              )}
            </span>
          </Button>
        </Tooltip>
        {praiseCount}
      </div>

      <div className="single-button-wrapper">
        <Tooltip
          placement="bottom"
          title={'burn'}
          defaultVisible={isTooltipVisible}
          mouseEnterDelay={0.8}
        >
          <Button className={burnClasses} onClick={() => burnHandler()}>
            <span className="social-icon">
              {isBurned ? <AiFillFire /> : <AiOutlineFire />}
            </span>
          </Button>
        </Tooltip>
        {burnCount}
      </div>
      {/* <CreationShare creationSha={creationSha} /> */}
      {/* <span className="single-button-wrapper share">
        <Button className="cr-share" onClick={() => setIsShared(!isShared)}>
          <Paragraph
            copyable={{
              text: `${window?.appConfig?.ABRAHAM_SELF}/creation/${creationSha}`,
              icon: [<HiOutlineShare key="copy-icon" size="36px" />, <HiShare key="copied-icon" />],
              placement: 'bottom',
              tooltips: ['copy link', 'link copied!'],
            }}
          />
        </Button>
      </span> */}
    </CreationSocialStyles>
  )
}
