import * as React from 'react'

// ANTD
import { Card, CardContent, CardMedia, Typography } from 'antd'
const { Text } = Typography

// UTILS
import shaURL from '@/util/shaURL'

// STYLES
import { CreationCardMediaStyles } from './CreationCardMediaStyles'

// ICONS
// SkipPrevious
// PlayArrow
// SkipNext

export default function CreationCardMedia({ creation }) {
  const { address, text_input } = creation
  const { origin, author_name } = creation.source

  const currentUserName = origin === 'discord' ? author_name : address

  return (
    <CreationCardMediaStyles>
      <Card className="cr-card">
        <div className="cr-card-inner">
          <CardContent className="cr-card-content">
            <Text>Live From Space</Text>
            <Text>{currentUserName}</Text>
          </CardContent>

          <div className="cr-card-actions-wrapper">
            <button aria-label="previous">
              {'Previous'}
              {/* <SkipPreviousIcon /> */}
            </button>
            <button aria-label="play/pause">
              {'Play'}
              {/* <PlayArrowIcon style={{ height: 38, width: 38 }} /> */}
            </button>
            <button aria-label="next">
              {'Next'}
              {/* <SkipNextIcon /> */}
            </button>
          </div>
        </div>
        <CardMedia
          className="cr-card-media"
          component="img"
          image={shaURL(creation)}
          alt={text_input}
        />
      </Card>
    </CreationCardMediaStyles>
  )
}
