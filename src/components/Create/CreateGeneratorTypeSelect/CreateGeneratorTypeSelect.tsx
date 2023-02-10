import React, { useState } from 'react'

// ANTD
import { Form, Select, Menu } from 'antd'
const { item } = Menu

// ICONS
import { BsGear } from 'react-icons/bs'

// STYLES
import styled from 'styled-components'

const CreateGeneretorTypeSelectStyles = styled.section`
  > div {
    border-radius: 20px;
    margin: 20px 0 0 0;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
  #select-creation-type {
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: flex-start;
    color: #8c7cf0;
  }

  #select-creation-type > div {
    padding: 0 0 0 10px;
    display: flex;
    align-items: center;
  }

  div > div > svg {
    height: 100%;
    position: relative;
    color: #8c7cf0;
    margin: 0 0 0 8px;
  }
`

export default function CreateGeneratorTypeSelect() {
  const [generatorType, setGeneratorType] = useState('1')

  const handleChange = event => {
    setGeneratorType(event.target.value)
  }

  return (
    <CreateGeneretorTypeSelectStyles>
      <Form style={{ margin: 10, minWidth: 120, display: 'flex' }}>
        <BsGear className="create-icon" />

        <Select
          labelId="select-generator-type"
          id="select-generator-type"
          value={generatorType}
          label="Creation Type"
          onChange={handleChange}
        >
          <item value={1}>Stable Diffusion</item>
          <item value={2}>Stable Diffusion V2</item>
          <item value={3}>Eden Clip-X</item>
        </Select>
      </Form>
    </CreateGeneretorTypeSelectStyles>
  )
}
