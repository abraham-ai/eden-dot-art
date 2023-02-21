import React, { useState } from 'react'

// ANTD
import { Form, Menu, Select } from 'antd'
const { Item } = Menu

// STYLES
import { CreateTypeSelectStyles } from './CreateTypeSelectStyles'

export default function SelectLabels() {
  const [creationType, setCreationType] = useState('1')

  const handleChange = event => {
    setCreationType(event.target.value)
  }

  return (
    <CreateTypeSelectStyles>
      <Form style={{ margin: 10, minWidth: 120 }}>
        <Select
          labelId="select-creation-type"
          id="select-creation-type"
          value={creationType}
          label="" // Creation Type
          onChange={handleChange}
        >
          <Item value={1}>Text 2 Image</Item>
          <Item value={2}>Text 2 Video</Item>
          <Item value={3}>Image 2 Image</Item>
        </Select>
      </Form>
    </CreateTypeSelectStyles>
  )
}
