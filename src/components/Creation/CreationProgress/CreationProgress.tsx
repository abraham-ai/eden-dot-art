import React from 'react'

// UI
import { Typography } from 'antd'
const { Text } = Typography
import { Progress } from 'antd'

// STYLES
import styled from 'styled-components'

function CircularProgressWithLabel() {
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <Progress variant="determinate" />
      <div
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{`${Math.round(10)}%`}</Text>
      </div>
    </div>
  )
}

const RunningCreationStyles = styled.div`
  .ant-progress-circle .ant-progress-text {
    font-size: 0.85em;
  }
  .ant-progress-inner.ant-progress-circle-gradient {
    font-size: 12px;
  }
`

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
        <RunningCreationStyles id="running-creation">
          {textInput}
          <CircularProgressWithLabel value={status_code} />
        </RunningCreationStyles>
      )
    } else if (status === 'queued') {
      return (
        <RunningCreationStyles id="running-creation">
          {/* {queue_position} */}
          {textInput} <b>(Queue position 1)</b>{' '}
          <CircularProgressWithLabel value={status_code} />
        </RunningCreationStyles>
      )
    } else if (status === 'complete') {
      return null
    } else if (status === 'failed') {
      return (
        <RunningCreationStyles id="running-creation">
          {textInput}
          <CircularProgressWithLabel value={status_code} />
        </RunningCreationStyles>
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
