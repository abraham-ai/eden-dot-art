import React, { useState } from 'react'

// UI
import { Button, Typography } from 'antd' // Tooltip,
import { HiShare, HiOutlineShare } from 'react-icons/hi'

const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'

const { Paragraph } = Typography

// STYLES
import { CreationShareStyles } from './CreationShareStyles'

export default function CreationSocial({ creationSha }) {
  //   const { width } = useWindowDimensions();
  //   const navMode = width < 718 ? 'inline' : 'horizontal';

  const [isShared, setIsShared] = useState(false)

  return (
    <CreationShareStyles id="cr-share-wrapper">
      <span className="single-button-wrapper share">
        <Button className="cr-share" onClick={() => setIsShared(!isShared)}>
          <Paragraph
            copyable={{
              text: `${PRD_URL}/creation/${creationSha}`,
              icon: [
                <HiOutlineShare key="copy-icon" size="36px" />,
                <HiShare key="copied-icon" />,
              ],
              tooltips: ['copy link', 'link copied!'],
            }}
          />
        </Button>
      </span>
    </CreationShareStyles>
  )
}
