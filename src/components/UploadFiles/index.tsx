import React, { useState } from 'react'

// MUI
// Button
import { Container } from '@mui/material'

// interface UploaderProps {
//   fileType?: string | AcceptedFileType[]
// }

// enum AcceptedFileType {
//   Text = '.txt',
//   Gif = '.gif',
//   Jpeg = '.jpg',
//   Png = '.png',
//   Doc = '.doc',
//   Pdf = '.pdf',
//   AllImages = 'image/*',
//   AllVideos = 'video/*',
//   AllAudios = 'audio/*',
// }

// props: UploaderProps
const UploadFile = () => {
  // const { fileType } = props
  // const acceptedFormats: string | AcceptedFileType[] =
  //   typeof fileType === 'string'
  //     ? fileType
  //     : Array.isArray(fileType)
  //     ? fileType?.join(',')
  //     : AcceptedFileType.Text

  // USE STATE
  // const [files, setFiles] = useState<File | undefined>(undefined)
  //state for checking file size
  const [fileSize, setFileSize] = useState(true)
  // for file upload progress message
  const [fileUploadProgress, setFileUploadProgress] = useState(false)
  //for displaying response message
  const [fileUploadResponse, setFileUploadResponse] = useState(null)
  //base end point url
  const FILE_UPLOAD_BASE_ENDPOINT = 'http://localhost:8282'

  // const uploadFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // setFiles(event.target.files)
  //   // setFiles(event?.target?.files?.[0])
  // }

  const fileSubmitHandler = event => {
    event.preventDefault()
    setFileSize(true)
    setFileUploadProgress(true)
    setFileUploadResponse(null)

    const formData = new FormData()

    // for (let i = 0; i < files.length; i++) {
    //   if (files[i].size > 1024) {
    //     setFileSize(false)
    //     setFileUploadProgress(false)
    //     setFileUploadResponse(null)
    //     return
    //   }

    //   formData.append(`files`, files[i])
    // }

    const requestOptions = {
      method: 'POST',
      body: formData,
    }
    fetch(FILE_UPLOAD_BASE_ENDPOINT + '/upload', requestOptions)
      .then(async response => {
        const isJson = response.headers
          .get('content-type')
          ?.includes('application/json')
        const data = isJson && (await response.json())

        // check for error response
        if (!response.ok) {
          // get error message
          const error = (data && data.message) || response.status
          setFileUploadResponse(data.message)
          return Promise.reject(error)
        }

        // console.log(data.message)
        setFileUploadResponse(data.message)
      })
      .catch(error => {
        console.error('Error while uploading file!', error)
      })
    setFileUploadProgress(false)
  }

  return (
    <Container>
      <form onSubmit={fileSubmitHandler}>
        {/* onChange={uploadFileHandler} */}
        <input type="file" multiple />
        <button type="submit">Upload</button>
        {!fileSize && <p style={{ color: 'red' }}>File size exceeded!!</p>}
        {fileUploadProgress && (
          <p style={{ color: 'red' }}>Uploading File(s)</p>
        )}
        {fileUploadResponse != null && (
          <p style={{ color: 'green' }}>{fileUploadResponse}</p>
        )}
      </form>
      {/* {Array.from(files).map((file, index) => {
        return (
          <span key={index} className={`upload-image-wrapper-${index}`}>
            <img
              className={`uploaded-image uploaded-image-${index}`}
              src={file ? URL.createObjectURL(file) : null}
            />
          </span>
        )
      })} */}
    </Container>
  )
}
export default UploadFile
