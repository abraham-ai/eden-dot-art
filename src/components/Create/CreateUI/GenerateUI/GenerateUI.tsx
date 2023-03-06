import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from 'react'
import { AxiosError } from 'axios'

// ANTD
import { Button, Form, message } from 'antd'
import type { FormInstance } from 'antd/lib/form/Form'
const { Item } = Form

// HOOKS
import useGeneratorInfo from '@/hooks/useGeneratorInfo'
import useGenerateUI from '@/hooks/useGenerateUI'
import AppContext from '@/context/AppContext/AppContext'

// EDEN COMPONENTS
import OptionParameter from '@/components/Parameters/OptionParameter/OptionParameter'
import UploadParameter from '@/components/Parameters/UploadParameter/UploadParameter'
import StringParameter from '@/components/Parameters/StringParameter/StringParameter'
import SliderParameter from '@/components/Parameters/SliderParameter/SliderParameter'

import {
  RightCircleOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
} from '@ant-design/icons'

// TYPES
import Config from '@/interfaces/Config'
import { ParameterType } from '@/interfaces/ParameterType'
type ParameterList = ParameterType[]

const GeneratorUI = ({ generatorName }: { generatorName: string }) => {
  const [form] = Form.useForm()
  const [values, setValues] = useState({})
  const [generating, setGenerating] = useState<boolean>(false)
  const [showOptional, setShowOptional] = useState<boolean>(false)
  const { setIsCreateUIModalOpen } = useContext(AppContext)
  const { requiredParameters, optionalParameters } =
    useGeneratorInfo(generatorName)

  // const allParameters = useMemo(() => {
  //   const params: ParameterList = []

  //   if (Array.isArray(allParameters)) {
  //     Object.keys(allParameters).forEach(key => {
  //       const parameter = allParameters[key]
  //       params.push({
  //         id: parameter.id,
  //         name: parameter.name,
  //         value: parameter.values[0],
  //         selectedValue: parameter.values[0],
  //         allowedValues: parameter.allowedValues || [],
  //       })
  //     })
  //   }

  //   return params
  // }, [])

  const allParameters: ParameterList = useMemo(
    () => [...requiredParameters, ...optionalParameters],
    [requiredParameters, optionalParameters],
  )

  const renderFormFields = (parameters: ParameterType[]) => {
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
              {typeof parameters[key].default === 'number' ? (
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

  const getConfig = useCallback(
    (config: Config) => {
      // console.log('USE-CALLBACK: GET CONFIG')
      requiredParameters.forEach(parameter => {
        const name = parameter.name
        if (config[name] === undefined) {
          config[name] = parameter.value
        }
      })
      optionalParameters.forEach(parameter => {
        const name = parameter.name
        if (config[name] === undefined) {
          config[name] = parameter.value
        }
      })
      return config
    },
    [optionalParameters, requiredParameters],
  )

  const validateConfig = useCallback(
    (values: Config) => {
      for (const v in values) {
        if (!values[v]) {
          continue
        }
        const param = allParameters.find(
          (parameter: ParameterType) => parameter.name === v,
        )
        if (param?.minLength) {
          if (values[v].length < param.minLength) {
            message.error(
              `Error: ${v} must have at least ${param.minLength} elements`,
            )
            return false
          }
        }
        if (param?.maxLength) {
          if (values[v].length >= param.maxLength) {
            message.error(
              `Error: ${v} must have no more than ${param.maxLength} elements`,
            )
            return false
          }
        }
      }
      return true
    },
    [allParameters],
  )

  const handleFinish = (formValues: FormInstance) => {
    setValues(formValues)
  }

  useEffect(() => {
    const validateCreation = async values => {
      setGenerating(true)
      if (!validateConfig(values)) {
        setGenerating(false)
        return
      }
    }
    if (Object.keys(values).length > 0) {
      validateCreation(values)
    }
  }, [values, generatorName, getConfig, validateConfig])

  // const handleGeneration = useCallback(
  //   result => {
  //     // console.log("received", result);
  //     if (typeof result !== 'undefined') {
  //       // console.log("not undefined")
  //       if (result.error) {
  //         // console.log("ERROR", result.error)
  //         // Handle Error here
  //       } else {
  //         // Handle Success here
  //         // console.log("success")
  //         form.resetFields()
  //         setGenerating(false)
  //         setIsCreateUIModalOpen(false)
  //       }
  //     }
  //   },
  //   [form, setIsCreateUIModalOpen],
  // )

  const onSubmit = useCallback(async () => {
    let validValues
    try {
      validValues = await form.validateFields()
      setValues(validValues)
    } catch (errorInfo) {
      return
    }

    const stringValues = { ...validValues }
    for (const key in stringValues) {
      if (typeof stringValues[key] === 'bigint') {
        stringValues[key] = stringValues[key].toString()
      }
    }

    const config = getConfig(stringValues)
    // console.log("run", config);

    try {
      const response = await useGenerateUI(generatorName, values, config)
      const taskId = response.data.taskId
      form.resetFields()
      setGenerating(false)
      setIsCreateUIModalOpen(false)
      message.success(`Task ${taskId} started.`)
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.message) {
          message.error(`Error: ${error.message}`)
        } else {
          message.error(`Error: ${error.response.data.error}`)
        }
      }
      setGenerating(false)
    }
  }, [generatorName, form, getConfig, values, setIsCreateUIModalOpen])

  return (
    <div>
      <div style={{ padding: 10 }}>
        <Form form={form} name="generate" onFinish={handleFinish}>
          {renderFormFields(requiredParameters)}
          <h3 style={{ padding: 5 }}>
            {optionalParameters.length > 0 && (
              <>
                {showOptional ? (
                  <Button onClick={() => setShowOptional(false)}>
                    <UpCircleOutlined />
                    Hide optional settings
                  </Button>
                ) : (
                  <Button onClick={() => setShowOptional(true)}>
                    <DownCircleOutlined />
                    Show optional settings
                  </Button>
                )}
              </>
            )}
          </h3>
          {showOptional && renderFormFields(optionalParameters)}
          <Item>
            <Button
              htmlType="submit"
              onClick={onSubmit}
              loading={generating}
              disabled={generating}
              size="large"
            >
              <RightCircleOutlined />
              Create
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  )
}

export default GeneratorUI
