import React, { useState } from 'react'

// COMPONENTS
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// MUI
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

  const handleChange = (event: SelectChangeEvent) => {
    setCreationType(event.target.value)
  }

  return (
    <CreateTypeSelectStyles>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel id="demo-simple-select-helper-label">
          Creation Type
        </InputLabel> */}
        <Select
          labelId="select-creation-type"
          id="select-creation-type"
          value={creationType}
          label="" // Creation Type
          onChange={handleChange}
        >
          <MenuItem value={1}>Text 2 Image</MenuItem>
          <MenuItem value={2}>Text 2 Video</MenuItem>
          <MenuItem value={3}>Image 2 Image</MenuItem>
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
    </CreateTypeSelectStyles>
  )
}
