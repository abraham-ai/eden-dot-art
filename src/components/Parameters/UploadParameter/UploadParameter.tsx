import { Form, Row, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import { Modal, Upload } from 'antd'
import type { RcFile } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import type { FormInstance } from 'antd/lib/form/Form'

interface UploadParameterProps {
  form: FormInstance
  parameter: {
    label: string
    name: string
    isRequired: boolean
    description: string
    maxLength?: number
    default: string | string[]
  }
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

const UploadParameter = ({ form, parameter }: UploadParameterProps) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState<string>('')
  const [previewTitle, setPreviewTitle] = useState<string>('')

  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [urls, setUrls] = useState<string[]>([])

  const isArray = Array.isArray(parameter.default)
  const maxUploads = isArray ? parameter.maxLength || 3 : 1

  const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
    if (info.file.status === 'error') {
      // Display an error message to the user
      //message.error(`${info.file.name} failed to upload.`);
      // console.log("GOT AN ERROR")
      // console.log(info.file.name)
      // console.log("=-==-===")
      // console.log(info.file.error)
      // console.log("=-==-===!!!")
      message.error(`${info.file.name} failed to upload.`)
      return
    }
    setFileList(info.fileList)
    if (info.file.status === 'done') {
      const newUrls = [...urls, info.file.response.fileUrl]
      form.setFieldsValue({
        [parameter.name]: isArray ? newUrls : newUrls[0],
      })
      setUrls(newUrls)
    }
    if (info.file.status === 'removed') {
      const removedUrl = info.file.response.fileUrl
      const newUrls = urls.filter(url => url !== removedUrl)
      form.setFieldsValue({
        [parameter.name]: isArray ? newUrls : newUrls[0],
      })
      setUrls(newUrls)
    }
  }

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
    )
  }

  return (
    <>
      <Row>
        <Form.Item
          style={{ marginBottom: 5 }}
          label={parameter.label}
          name={parameter.name}
          rules={[
            {
              required: parameter.isRequired,
              message: `${parameter.label} required`,
            },
          ]}
        >
          <Upload
            name="file"
            action="/api/media"
            listType="picture-card"
            fileList={fileList}
            // multiple={isArray}
            onChange={handleChange}
            onPreview={handlePreview}
          >
            {fileList.length >= maxUploads ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>
      </Row>
      <Row>
        <span style={{ color: 'gray' }}>{parameter.description}</span>
      </Row>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  )
}

export default UploadParameter
