import * as React from 'react'

// ANTD
import { Card, CardContent, CardMedia, Typography } from 'antd'
const { Text } = Typography

// UTILS
import shaURL from '@/util/shaURL'

// ICONS
// SkipPrevious
// PlayArrow
// SkipNext

export default function CreationCardMedia({ creation }) {
  const { address, text_input } = creation
  const { origin, author_name } = creation.source

  const currentUserName = origin === 'discord' ? author_name : address

  return (
    <Card style={{ display: 'flex', maxWidth: 350 }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}
        >
          <Text>Live From Space</Text>
          <Text>{currentUserName}</Text>
        </CardContent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 10,
            paddingBottom: 1,
          }}
        >
          <button aria-label="previous">
            {'Previous'}
            {/* <SkipPreviousIcon /> */}
          </button>
          <button aria-label="play/pause">
            {'Play'}
            {/* <PlayArrowIcon style={{ height: 38, width: 38 }} /> */}
          </button>
          <button aria-label="next">
            {'next'}
            {/* <SkipNextIcon /> */}
          </button>
        </div>
      </div>
      <CardMedia
        component="img"
        style={{ width: 100, maxHeight: 100 }}
        image={shaURL(creation)}
        alt={text_input}
      />
    </Card>
  )
}
