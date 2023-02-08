import React, { useState } from 'react'

// COMPONENTS
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ICONS
import { BsGear } from 'react-icons/bs'

// MUI
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

  const handleChange = (event: SelectChangeEvent) => {
    setGeneratorType(event.target.value)
  }

  return (
    <CreateGeneretorTypeSelectStyles>
      <FormControl sx={{ m: 1, minWidth: 120, display: 'flex' }}>
        {/* <InputLabel id="demo-simple-select-helper-label">
          Creation Type
        </InputLabel> */}

        <BsGear className="create-icon" />

        <Select
          labelId="select-generator-type"
          id="select-generator-type"
          value={generatorType}
          label="" // Creation Type
          onChange={handleChange}
        >
          <MenuItem value={1}>Stable Diffusion</MenuItem>
          <MenuItem value={2}>Stable Diffusion V2</MenuItem>
          <MenuItem value={3}>Eden Clip-X</MenuItem>
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
    </CreateGeneretorTypeSelectStyles>
  )
}
