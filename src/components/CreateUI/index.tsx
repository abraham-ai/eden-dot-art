import React, { useState } from 'react'

// MUI
import {
  // alpha,
  // Button,
  Box,
  Backdrop,
  FormControl,
  // InputLabel,
  // lighten,
  // MenuItem,
  Modal,
  // Select,
  // SelectChangeEvent,
  styled,
  TextField,
  // Typography,
  Button,
  // useTheme,
} from '@mui/material'

// COMPONENTS
import CreateTypeSelect from '@/components/CreateTypeSelect'
import CreateGeneratorTypeSelect from '@/components/CreateGeneratorTypeSelect'

// LAYOUT ICONS
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import { TbRectangleVertical, TbSquare } from 'react-icons/tb'
import {
  // MdOutlineCropLandscape,
  MdOutlinePhotoSizeSelectLarge,
} from 'react-icons/md'
// import { BsGear } from 'react-icons/bs'

const BoxModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid #000',
  padding: '10px',
  borderRadius: '20px',
  boxShadow: 24,
}

const CreateUIStyles = styled(Box)(
  () => `
    background: red;
    
    .filter-select > div {
      display: flex;
      align-items: center;
    }

    .Mui-focused {
      border: 0 !important;
    }

    label.Mui-focused {
      border: none;
    }

    label {
      color:#536471;
      font-size: 1.2rem;
    }

    .divider {
      border: 1px solid lightgray;
      margin: 10px 0;
    }

    .create-icon {
      color: #8C7CF0; 
      font-size: 1.3rem;
      margin: 0 8px 0 0;
    }
`,
)

export default function CreateUI({ isOpen = true, onClose }) {
  // const [confirmLoading, setConfirmLoading] = useState(false)
  const [prompt, setPrompt] = useState()
  // const [creationShape, setCreationShape] = useState('square')
  // const [creationHeight, setCreationHeight] = useState(1280)
  // const [creationWidth, setCreationWidth] = useState(1280)
  const [maxCharPercent, setMaxCharPercent] = useState(0)

  // const [generator, setGenerator] = useState('stable-diffusion')
  // const [size, setSize] = useState('square')

  // const [modalOpen, setModalOpen] = useState(isOpen)

  // const handleGeneratorChange = (event: SelectChangeEvent) => {
  //   setGenerator(event.target.value as string)
  // }

  // const handleSizeChange = (event: SelectChangeEvent) => {
  //   setSize(event.target.value as string)
  // }

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
      <CreateUIStyles>
        <Box sx={BoxModalStyle}>
          <Box
            key="form-wrapper"
            className="form-wrapper"
            sx={{ display: 'flex', flex: 1 }}
          >
            <Box
              sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  sx={{
                    borderRadius: '50%',
                    width: 50,
                    height: 50,
                    minWidth: 50,
                  }}
                >
                  X
                </Button>
              </Box>

              <Box sx={{ display: 'flex' }}>
                <Box sx={{ mr: 1 }}>
                  <AccountCircleIcon style={{ fontSize: '2rem' }} />
                </Box>

                <Box
                  className="form-inner-wrapper"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <CreateTypeSelect />
                  </Box>

                  <FormControl sx={{ border: 'none' }}>
                    <TextField
                      className="create-text-area"
                      label="Dream what is on your mind?"
                      multiline
                      maxRows={4}
                      value={prompt}
                      onChange={onChange}
                    />
                  </FormControl>

                  <CreateGeneratorTypeSelect />

                  <div className="divider"></div>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flex: 1 }}>
                      <MdOutlinePhotoSizeSelectLarge className="create-icon" />
                      {/* <FormControl className="select-size-form" size="small">
                      <InputLabel id="filter-select-label">Size</InputLabel>
                      <Select
                        labelId="filter-label"
                        className="filter-select"
                        value={size}
                        label={'Size'}
                        onChange={handleSizeChange}
                        sx={{ width: 150, display: 'flex', alignItems: 'center' }}
                      >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'vertical'}>
                          <TbRectangleVertical className="filter-icon" />
                          <Typography sx={{ color: 'black' }}>
                            Vertical 9:16
                          </Typography>
                        </MenuItem>
                        <MenuItem value={'landscape'}>
                          <MdOutlineCropLandscape className="filter-icon" />
                          <Typography sx={{ color: 'black' }}>
                            Landscape 16:9
                          </Typography>
                        </MenuItem>
                        <MenuItem value={'square'}>
                          <TbSquare className="filter-icon" />
                          <Typography sx={{ color: 'black' }}>
                            Square 1:1
                          </Typography>
                        </MenuItem>
                      </Select>
                    </FormControl> */}

                      {/* <BsGear className="create-icon" /> */}

                      {/* <FormControl className="select-generator-form" size="small">
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
                          <Typography sx={{ color: '#111' }}>
                            Stable Diffusion
                          </Typography>
                        </MenuItem>
                      </Select>
                    </FormControl> */}
                    </Box>

                    <Box sx={{ mr: 2 }}>{maxCharPercent}</Box>

                    <Button variant="contained" sx={{ borderRadius: '20px' }}>
                      Create
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </CreateUIStyles>
    </Modal>
  )
}
