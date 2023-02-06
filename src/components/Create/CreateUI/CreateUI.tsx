import React from 'react' // useState, useCallback

// REDUX
import { setSnackbarVisible } from '@/redux/slices/snackbarSlice'
import { setModalVisible } from '@/redux/slices/modalSlice'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'

// ANTD
import {
  Form,
  Modal,
  Button,
  Snackbar,
} from 'antd'

// ICONS
// import IconButton
// import CloseIcon

// ACCOUNT
import Blockies from 'react-blockies'

// COMPONENTS
import EdenTabs from '@/components/Create/CreateUI/EdenTabs/EdenTabs'
// import CreateTypeSelect from '@/components/CreateTypeSelect'
// import CreateGeneratorTypeSelect from '@/components/CreateGeneratorTypeSelect'

// LAYOUT ICONS
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import { TbRectangleVertical, TbSquare } from 'react-icons/tb'
import {
  // MdOutlineCropLandscape,
  // MdOutlinePhotoSizeSelectLarge,
} from 'react-icons/md'
// import { BsGear } from 'react-icons/bs'

// HTTP
// const serverUrl = process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY

// STYLES
import styled from 'styled-components'

const CreateUIStyles = styled.section`
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
      margin-top: 18px;
    }

    .divider {
      border: 1px solid lightgray;
      margin-bottom: 10px;
      margin-top: -2px;
    }

    .create-icon {
      color: #8C7CF0; 
      font-size: 1.3rem;
      margin: 0 8px 0 0;
    }

    .close-icon-wrapper:hover {
      cursor: pointer;
      z-index: 50;
    }

    .close-icon {
      color: white;
    }

    .close-icon:hover {
      cursor: pointer;
    }

    .x-button-wrapper {
      display: flex; 
      justify-content: space-between;
    }

    .x-button {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      min-width: 50px;
    }

    .account-wrapper {
      margin-right: 10px;
    }

    .form-inner-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }

    #create-text-area {
      min-height: 100px; 
      border: none;
      color: black;
      font-Size: 1.2rem;
      margin-top: 30px;
      font-weight: 500;
    }
`

export default function CreateUI({ isOpen }) {
  // const [prompt, setPrompt] = useState('')
  // const [creationShape] = useState('square') // setCreationShape
  // const [creationHeight] = useState(512) // setCreationHeight
  // const [creationWidth] = useState(512) // setCreationWidth
  // const [maxCharPercent, setMaxCharPercent] = useState(0)

  const dispatch = useAppDispatch()

  // const authToken = useAppSelector(state => state.token.value)
  const appAddress = useAppSelector(state => state.address.value)
  const isModalVisible = useAppSelector(state => state.modal.isModalVisible)
  const isSnackbarVisible = useAppSelector(state => state.snackbar.visible)
  const snackbarMessage = useAppSelector(state => state.snackbar.value)

  // const { address } = useAccount()

  // const generator_name = 'stable-diffusion'

  // console.log({ authToken })

  // const handleModalClose = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  // ) => {
  //   console.log('handleModalClose!')
  //   console.log(event)
  //   setModalOpen(false)
  // }

  // const [confirmLoading, setConfirmLoading] = useState(false)

  // const apiKey = document.querySelector("input[name=apiKey]").value;
  // const apiSecret = document.querySelector("input[name=apiSecret]").value;
  // if (!apiKey || !apiSecret) {
  //   alert("Please enter your API key and secret in the first tab");
  //   return;
  // }
  // const authData = {"apiKey": apiKey, "apiSecret": apiSecret};

  // const [generator, setGenerator] = useState('stable-diffusion')
  // const [size, setSize] = useState('square')

  // const handleGeneratorChange = (event: SelectChangeEvent) => {
  //   setGenerator(event.target.value as string)
  // }

  // const handleSizeChange = (event: SelectChangeEvent) => {
  //   setSize(event.target.value as string)
  // }

  // const onChange = e => {
  //   // console.log('Change:', e.target.value)
  //   setPrompt(e.target.value)
  //   setMaxCharPercent(Math.ceil((e.target.value.length / 200) * 100))
  //   // console.log(maxCharPercent)
  // }

  // const sendNotification = (type, data) => {
  //   return Snackbar[type]({
  //     ...data,
  //     placement: 'bottomRight',
  //   })
  // }

  // const submitPrediction = useCallback(
  //   async (config, resultId) => {
  //     resultId ? resultId : resultId

  //     const request = {
  //       token: authToken,
  //       application: 'eden',
  //       generator_name: generator_name,
  //       config: config,
  //       metadata: null,
  //     }

  //     return request

  //     // start prediction
  //     // const response = await axios.post(GATEWAY_URL + '/request', request)
  //     // const prediction_id = response.data

  //     // console.log(`job submitted, task id ${prediction_id}`)
  //     // document.querySelector('progressReal2Real')

  //     // update progress text span
  //     // let progress = document.querySelector(`#progress${resultId}`)
  //     // progress.innerHTML = `Generating ${prediction_id}...`

  //     // poll every few seconds for update to the job
  //     // var refreshIntervalId = setInterval(async function () {
  //     //   let response = await axios.post(GATEWAY_URL + '/fetch', {
  //     //     taskIds: [prediction_id],
  //     //   })
  //     //   let { status, output } = response.data[0]

  //     //   console.log(response)

  //     //   if (status === 'complete') {
  //     //     let outputUrl = `${MINIO_URL}/${MINIO_BUCKET}/${output}`
  //     //     document.querySelector(`#result${resultId}`).src = outputUrl
  //     //     let progress = document.querySelector(`#progress${resultId}`)
  //     //     progress.innerHTML = `Done: <a href="${outputUrl}">${outputUrl}</a>`
  //     //     console.log('done', outputUrl)
  //     //     clearInterval(refreshIntervalId)
  //     //   } else if (status === 'failed') {
  //     //     console.log('failed')
  //     //     clearInterval(refreshIntervalId)
  //     //   }
  //     //   console.log("let's go!", refreshIntervalId)
  //     // }, 2000)
  //   },
  //   [authToken],
  // )

  // const handleSubmit = useCallback(
  //   async (token, prompt, creationWidth, creationHeight, creationShape) => {
  //     // values,
  //     // address,
  //     // let text_input = values.textInput;
  //     // console.log('VALUES')
  //     // console.log({ values })
  //     // console.log(creationWidth, creationHeight)

  //     const config = {
  //       mode: 'generate',
  //       text_input: prompt,
  //       seed: 1e8 * Math.random(),
  //       sampler: 'euler_ancestral',
  //       scale: 12.0,
  //       steps: 50,
  //       width: creationWidth,
  //       height: creationHeight,
  //     }

  //     // eden-clipx

  //     // console.log('TEXT-INPUT: ' + text_input)

  //     await submitPrediction(config, 'Generate')

  //     // const results =
  //     await axios // address is parsed from the JWT token
  //       .post(serverUrl + '/request_creation', {
  //         token: token,
  //         source: 'eden',
  //         generator_name: generator_name,
  //         config: config,
  //       })
  //       .then(() => {
  //         // response
  //         //console.log(response)
  //         // dispatch(setIsCreationRunningTrue())
  //         sendNotification('success', {
  //           message: 'Request Submitted.',
  //           description: `Eden will dream a ${creationShape} creation: ${prompt}`,
  //         })
  //       })
  //       .catch(error => {
  //         // console.log(error)
  //         // console.log(error.response)
  //         // onReset()
  //         setPrompt('')
  //         sendNotification('error', {
  //           message: 'Failed to Submit Request!',
  //           description: `${error.response.data}`,
  //         })
  //       })
  //   },
  //   [submitPrediction],
  // )

  // const handleSnackbarClick = () => {
  //   dispatch(setSnackbarVisible(true))
  // }

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway' && event) {
      return
      dispatch(setSnackbarVisible(false))
    }
    dispatch(setSnackbarVisible(false))
  }

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleSnackbarClose}>
        UNDO
      </Button>
      <Button
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
        icon={'close'}
      >
        
      </Button>
    </>
  )

  return isOpen ? (
    <Modal
      className="create-modal"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalVisible}
      onCancel={() => dispatch(setModalVisible(false))}
      style={{ background: 'rgba(0, 0, 0, 0.65)' }}
    >
      <CreateUIStyles>
        <>
          <div
            className="close-icon-wrapper"
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px',
              color: 'black',
            }}
          >
            <Button
              className="close-icon"
              onClick={() => dispatch(setModalVisible(false))}
            />
          </div>

          <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  height: '90%',
                  maxWidth: '90%',
                  maxHeight: '90%',
                  background: 'white',
                  border: '2px solid #000',
                  padding: '10px',
                  borderRadius: '20px',
                }}>
            <div
              key="form-wrapper"
              className="form-wrapper"
              style={{ display: 'flex', flex: 1, height: '100%' }}
            >
              <div
                style={{ display: 'flex', flexDirection: 'column', width: '100%', overflow: 'scroll' }}
              >
                {/* <Box className="x-button-wrapper">
                  <Button className="x-button">X</Button>
                </Box> */}

                <div style={{ display: 'flex' }}>
                  <div
                    className="account-wrapper"
                    style={{
                      borderRadius: '50%',
                      overflow: 'hidden',
                      minHeight: '48px',
                      minWidth: '48px',
                      maxHeight: '48px',
                      maxWidth: '48px',
                      margin: '25px 0 0 10px',
                    }}
                  >
                    <Blockies seed={appAddress} scale={6} />
                  </div>
                  {/* <AccountCircleIcon style={{ fontSize: '2rem' }} /> */}

                  <div className="form-inner-wrapper">
                    {/* <Box sx={{ display: 'flex', mb: 2 }}>
                    <CreateTypeSelect />
                  </Box> */}

                    <EdenTabs />

                    {/* <FormControl sx={{ border: 'none' }}>
                      <TextField
                        id="create-text-area"
                        label="Create what is on your mind?"
                        multiline
                        maxRows={4}
                        value={prompt}
                        onChange={onChange}
                        variant="filled"
                      />
                    </FormControl> */}

                    {/* <CreateGeneratorTypeSelect /> */}

                    {/* <div className="divider"></div> */}

                    {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flex: 1 }}>
                        <MdOutlinePhotoSizeSelectLarge className="create-icon" /> */}
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
                    {/* </Box>

                      <Box sx={{ mr: 2 }}>{maxCharPercent}</Box>

                      <Button
                        // type="submit"
                        disabled={prompt.length > 0 ? false : true}
                        variant="contained"
                        onClick={() =>
                          handleSubmit(
                            authToken,
                            prompt,
                            creationWidth,
                            creationHeight,
                            creationShape,
                          )
                        }
                        sx={{ borderRadius: '20px' }}
                      >
                        Create
                      </Button> 
                    </Box> */}

                    <Snackbar
                      open={isSnackbarVisible}
                      autoHideDuration={6000}
                      onClose={handleSnackbarClose}
                      message={snackbarMessage}
                      action={action}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </CreateUIStyles>
    </Modal>
  ) : null
}
