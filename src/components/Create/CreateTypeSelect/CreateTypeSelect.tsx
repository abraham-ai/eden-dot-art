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
          id="select-creation-type"
          value={creationType}
          onChange={handleChange}
        >
          <Item key={1}>Text 2 Image</Item>
          <Item key={2}>Text 2 Video</Item>
          <Item key={3}>Image 2 Image</Item>
        </Select>
      </Form>
    </CreateTypeSelectStyles>
  )
}
