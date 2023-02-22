import React, { useState } from 'react'

// ANTD
import { Form } from 'antd'

// HOOKS
import { useGeneratorInfo } from '@/hooks/useGeneratorInfo'

// EDEN COMPONENTS
import ImageResult from '@/components/Media/ImageResult/ImageResult'
import VideoResult from '@/components/Media/VideoResult/VideoResult'
import AudioResult from '@/components/Media/AudioResult/AudioResult'

import OptionParameter from '@/components/Parameters/OptionParameter/OptionParameter'
import UploadParameter from '@/components/Parameters/UploadParameter/UploadParameter'
import StringParameter from '@/components/Parameters/StringParameter/StringParameter'
import SliderParameter from '@/components/Parameters/SliderParameter/SliderParameter'

// ICONS
import {
  RightCircleOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
} from '@ant-design/icons'

const GeneratorInterface = ({
  generatorName,
  mediaType,
  handleGenerate,
}: {
  generatorName: string
  mediaType: string
  handleGenerate: Function
}) => {
  const [form] = Form.useForm()
  const width = Form.useWatch('width', form)
  const height = Form.useWatch('height', form)

  const [resultUrl] = useState<string>('')
  const [generating] = useState<boolean>(false)
  const [message] = useState<string | null>(null)
  const [showOptional, setShowOptional] = useState<boolean>(false)
  const { versionId, requiredParameters, optionalParameters } =
    useGeneratorInfo(generatorName)

  // const getConfig = (config: any) => {
  //   Object.keys(requiredParameters).forEach(key => {
  //     const name = requiredParameters[key].name
  //     if (config[name] === undefined) {
  //       config[name] = requiredParameters[key].defaultValue
  //     }
  //   })
  //   Object.keys(optionalParameters).forEach(key => {
  //     const name = optionalParameters[key].name
  //     if (config[name] === undefined) {
  //       config[name] = optionalParameters[key].defaultValue
  //     }
  //   })
  //   return config
  // }

  const renderFormFields = (parameters: any) => {
    return Object.keys(parameters).map(key => {
      return (
        <div
          key={key}
          style={{
            paddingBottom: 5,
            marginBottom: 10,
            borderBottom: '1px solid #ccc',
          }}
        >
          {parameters[key].allowedValues.length > 0 ? (
            <OptionParameter
              key={key}
              form={form}
              parameter={parameters[key]}
            />
          ) : (
            <>
              {typeof parameters[key].defaultValue === 'number' ? (
                <SliderParameter
                  key={key}
                  form={form}
                  parameter={parameters[key]}
                />
              ) : (
                <>
                  {parameters[key].mediaUpload ? (
                    <UploadParameter
                      key={key}
                      form={form}
                      parameter={parameters[key]}
                    />
                  ) : (
                    <StringParameter
                      key={key}
                      form={form}
                      parameter={parameters[key]}
                    />
                  )}
                </>
              )}
            </>
          )}
        </div>
      )
    })
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: '#eee',
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          width: '90%',
        }}
      >
        <h2>/{generatorName}</h2>
        <h3>
          version: <span style={{ color: 'gray' }}>{versionId}</span>
        </h3>
      </div>

      <div style={{ padding: 10 }}>
        <Form form={form} name="generate" onFinish={handleGenerate}>
          {renderFormFields(requiredParameters)}
          <h3 style={{ padding: 5 }}>
            {showOptional ? (
              <button onClick={() => setShowOptional(false)}>
                <UpCircleOutlined />
                Hide optional settings
              </button>
            ) : (
              <button onClick={() => setShowOptional(true)}>
                <DownCircleOutlined />
                Show optional settings
              </button>
            )}
          </h3>
          {showOptional && renderFormFields(optionalParameters)}
          <Form.Item>
            <button
              // type="primary"
              htmlType="submit"
              // loading={generating}
              // disabled={generating}
            >
              <RightCircleOutlined />
              Create
            </button>
          </Form.Item>
        </Form>
        {generating && message && <p>{message}</p>}
        {resultUrl && (
          <>
            {mediaType == 'image' && (
              <ImageResult
                resultUrl={resultUrl}
                width={width}
                height={height}
              />
            )}
            {mediaType == 'video' && <VideoResult resultUrl={resultUrl} />}
            {mediaType == 'audio' && <AudioResult resultUrl={resultUrl} />}
          </>
        )}
      </div>
    </div>
  )
}

export default GeneratorInterface
