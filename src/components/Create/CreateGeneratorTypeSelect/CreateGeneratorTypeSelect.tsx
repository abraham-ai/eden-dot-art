import React, { useState } from 'react'

// ANTD
import { Form, Select, Menu } from 'antd'
const { Item } = Menu

// ICONS
import { BsGear } from 'react-icons/bs'

// STYLES
import { CreateGeneratorTypeSelectStyles } from './CreateGeneratorTypeSelectStyles'

export default function CreateGeneratorTypeSelect() {
  const [generatorType, setGeneratorType] = useState('1')

  const handleChange = event => {
    setGeneratorType(event.target.value)
  }

  return (
    <CreateGeneratorTypeSelectStyles>
      <Form style={{ margin: 10, minWidth: 120, display: 'flex' }}>
        <BsGear className="create-icon" />

        <Select
          className="select-generator-type"
          value={generatorType}
          // label="Creation Type"
          onChange={handleChange}
        >
          <Item key={1}>Stable Diffusion</Item>
          <Item key={2}>Stable Diffusion V2</Item>
          <Item key={3}>Eden Clip-X</Item>
        </Select>
      </Form>
    </CreateGeneratorTypeSelectStyles>
  )
}
