import React, { useState } from 'react'

// ANTD
import { Form, Menu, Select } from 'antd'
const { Item } = Menu

// STYLES
import styled from 'styled-components'

const CreateTypeSelectStyles = styled.section`
  > div {
    border: 1px solid #8c7cf0;
    border-radius: 20px;
    margin: 0 10px;
  }
  #select-creation-type {
    padding: 0 0 0 10px;
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
