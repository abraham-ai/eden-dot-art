import React from 'react'

// ANTD
import { Typography, Progress } from 'antd'
const { Text } = Typography

// STYLES
import { CreationProgressLabelStyles } from './CreationProgressLabelStyles'
import { CreationProgressStyles } from './CreationProgressStyles'

function CircularProgressWithLabel() {
  return (
    <CreationProgressLabelStyles>
      <Progress variant="determinate" />
      <div className="progress-label-wrapper">
        <Text>{`${Math.round(10)}%`}</Text>
      </div>
    </CreationProgressLabelStyles>
  )
}

interface Creation {
  status: string
  status_code: number
  _id: string
  textInput: string
}

export default function CreationProgress({
  status,
  status_code,
  textInput,
}: Creation) {
  function RunningCreations() {
    if (status === 'running' && status_code < 100) {
      return (
        <CreationProgressStyles id="running-creation">
          {textInput}
          <CircularProgressWithLabel value={status_code} />
        </CreationProgressStyles>
      )
    } else if (status === 'queued') {
      return (
        <CreationProgressStyles id="running-creation">
          {/* {queue_position} */}
          {textInput} <b>(Queue position 1)</b>{' '}
          <CircularProgressWithLabel value={status_code} />
        </CreationProgressStyles>
      )
    } else if (status === 'complete') {
      return null
    } else if (status === 'failed') {
      return (
        <CreationProgressStyles id="running-creation">
          {textInput}
          <CircularProgressWithLabel value={status_code} />
        </CreationProgressStyles>
      )
    } else if (status_code === 0) {
      return null
    } else if (status_code === 100) {
      return null
    } else {
      return <span>{JSON.stringify(status_code)}</span>
    }
  }
  return RunningCreations()
}
