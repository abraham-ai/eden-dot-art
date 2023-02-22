import React, { useState, useEffect, useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// WAGMI
import { useAccount } from 'wagmi'

// ANTD
import { Button, Tooltip } from 'antd'

// FETCH
import axios from 'axios'
const serverUrl = process.env.EDEN_API_URL

// ICONS
import { AiFillFire, AiOutlineFire } from 'react-icons/ai'
import { HiSparkles, HiOutlineSparkles } from 'react-icons/hi'
// HiShare, HiOutlineShare,
// import { ShareAltOutlined } from '@ant-design/icons'
// import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons'

// STYLES
import { CreationSocialStyles } from './CreationSocialStyles'

export default function CreationSocial({
  creationBurns,
  creationPraises,
  creationSha,
  praisedByMe,
  burnedByMe,
}) {
  //   const navMode = width < 718 ? 'inline' : 'horizontal';

  const [burns, setBurns] = useState(creationBurns)
  const [praises, setPraises] = useState(creationPraises)
  const [isPraised, setIsPraised] = useState(praisedByMe)
  const [isBurned, setIsBurned] = useState(burnedByMe)

  const { address } = useAccount()

  const context = useContext(AppContext)
  const { isWeb3WalletConnected } = context

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
    // console.log(' Praise Handler ')
    let praiseOpperation = ''
    // console.log({ isPraised })

    if (isPraised === true && praises > 0) {
      setPraises(praises - 1)
      praiseOpperation = 'decrease'
      setIsPraised(false)
    } else if (isPraised === false) {
      setPraises(praises + 1)
      praiseOpperation = 'increase'
      setIsPraised(true)
    }

    // console.log({ praiseOpperation })

    const results = await axios.post(serverUrl + '/update_stats', {
      creation: creationSha,
      stat: 'praise',
      opperation: praiseOpperation,
      address: address,
    })

    // console.log({ results })
    setPraises(results.data.praise)
  }

  async function burnHandler() {
    if (!address) {
      return
    }
    // console.log('Burn Handler')
    let burnOpperation = ''
    // console.log({ isBurned })

    if (isBurned === true && burns > 0) {
      setBurns(burns - 1)
      burnOpperation = 'decrease'
      setIsBurned(false)
    } else if (isBurned === false) {
      setBurns(burns + 1)
      burnOpperation = 'increase'
      setIsBurned(true)
    }

    // console.log({ burnOpperation })

    const results = await axios.post(serverUrl + '/update_stats', {
      creation: creationSha,
      stat: 'burn',
      opperation: burnOpperation,
      address: address,
    })

    // console.log({ results })
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
