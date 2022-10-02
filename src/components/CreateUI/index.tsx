import React, { useState } from 'react'

// MUI
import {
  // alpha,
  // Button,
  Box,
  Backdrop,
  FormControl,
  InputLabel,
  // lighten,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  // styled,
  TextField,
  // useTheme,
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

// LAYOUT ICONS
import { TbRectangleVertical, TbSquare } from 'react-icons/tb'
import { MdOutlineCropLandscape } from 'react-icons/md'

const BoxModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function CreateUI({ isOpen = true, onClose }) {
  // const [confirmLoading, setConfirmLoading] = useState(false)
  const [prompt, setPrompt] = useState()
  // const [creationShape, setCreationShape] = useState('square')
  // const [creationHeight, setCreationHeight] = useState(1280)
  // const [creationWidth, setCreationWidth] = useState(1280)
  const [maxCharPercent, setMaxCharPercent] = useState(0)

  const [generator, setGenerator] = useState('stable-diffusion')
  const [size, setSize] = useState('square')

  // const [modalOpen, setModalOpen] = useState(isOpen)

  const handleGeneratorChange = (event: SelectChangeEvent) => {
    setGenerator(event.target.value as string)
  }

  const handleSizeChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string)
  }
  const onChange = e => {
    // console.log('Change:', e.target.value)
    setPrompt(e.target.value)
    setMaxCharPercent(Math.ceil((e.target.value.length / 200) * 100))
    // console.log(maxCharPercent)
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="create-modal"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Box sx={BoxModalStyle}>
        <Box
          key="form-wrapper"
          className="form-wrapper"
          sx={{ display: 'flex' }}
        >
          <Box sx={{ mr: 1 }}>
            <AccountCircleIcon style={{ fontSize: '2rem' }} />
          </Box>

          <Box
            className="form-inner-wrapper"
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ display: 'flex' }}>
              <FormControl className="select-size-form" size="small">
                <InputLabel id="filter-select-label">Size</InputLabel>
                <Select
                  labelId="filter-label"
                  className="filter-select"
                  value={size}
                  label={'Size'}
                  onChange={handleSizeChange}
                  sx={{ width: 150 }}
                >
                  <MenuItem value={'all'}>All</MenuItem>
                  <MenuItem value={'vertical'}>
                    <TbRectangleVertical className="filter-icon" />
                    Vertical 9:16
                  </MenuItem>
                  <MenuItem value={'landscape'}>
                    <MdOutlineCropLandscape className="filter-icon" />
                    Landscape 16:9
                  </MenuItem>
                  <MenuItem value={'square'}>
                    <TbSquare className="filter-icon" />
                    Square 1:1
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className="select-generator-form" size="small">
                <InputLabel id="select-label">Generator</InputLabel>
                <Select
                  labelId="filter-label"
                  className="filter-select"
                  value={generator}
                  label={'Generator'}
                  onChange={handleGeneratorChange}
                  autoWidth
                >
                  <MenuItem value={'eden-clip-x'}>
                    <span
                      style={{
                        background: 'cyan',
                        height: 10,
                        width: 10,
                        marginRight: 10,
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    ></span>
                    Eden Clip X
                  </MenuItem>
                  <MenuItem value={'stable-diffusion'}>
                    <span
                      style={{
                        background: 'red',
                        height: 10,
                        width: 10,
                        marginRight: 10,
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    ></span>
                    Stable Diffusion
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <FormControl>
              <TextField
                className="create-text-area"
                label="Dream what is on your mind?"
                multiline
                maxRows={4}
                value={prompt}
                onChange={onChange}
              />
            </FormControl>
            {maxCharPercent}
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
