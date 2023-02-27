import React, { useState, useEffect, useCallback, useMemo } from 'react'

// ANTD
import { Button, Form, message } from 'antd'
import type { FormInstance } from 'antd/lib/form/Form'
const { Item } = Form

// FETCH
import axios, { AxiosError } from 'axios'

// HOOKS
import useGeneratorInfo from '@/hooks/useGeneratorInfo'
import useGenerateUI from '@/hooks/useGenerateUI'

// EDEN COMPONENTS
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

// TYPES
import Config from '@/interfaces/Config'
import { ParameterType } from '@/interfaces/ParameterType'
type ParameterList = ParameterType[]

const GeneratorUI = ({ generatorName }: { generatorName: string }) => {
  const [form] = Form.useForm()

  const [values, setValues] = useState({})
  const [generating, setGenerating] = useState<boolean>(false)
  const [showOptional, setShowOptional] = useState<boolean>(false)
  const { versionId, requiredParameters, optionalParameters } =
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
    console.log('FUNCTION: RENDER FORM FIELDS')
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
      console.log('USE-CALLBACK: GET CONFIG')
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
      console.log('USE-CALLBACK: VALIDATE CONFIG')
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
    console.log('FUNCTION: HANDLE FINISH')
    console.log({ formValues })
    setValues(formValues)
  }

  useEffect(() => {
    console.log('USE EFFECT')
    const validateCreation = async values => {
      console.log('USE EFFECT: VALIDATE CREATION')
      // setGenerating(true)

      if (!validateConfig(values)) {
        // setGenerating(false)
        return
      }
    }

    if (Object.keys(values).length > 0) {
      validateCreation(values)
    }
  }, [values, generatorName, getConfig, validateConfig])

  const handleGeneration = useCallback(
    result => {
      console.log('HANDLING SUBMISSION')
      console.log({ result })
      if (typeof result !== 'undefined') {
        if (result.error) {
          // Handle Error here
        } else {
          // Handle Success here
          form.resetFields()
        }
      }
    },
    [form],
  )

  const onSubmit = useCallback(async () => {
    let validValues

    try {
      validValues = await form.validateFields()
      console.log('USE CALLBACK: ON SUBMIT')
      setValues(validValues)
    } catch (errorInfo) {
      return
    }

    console.log({ validValues })

    const stringValues = { ...validValues }

    for (const key in stringValues) {
      if (typeof stringValues[key] === 'bigint') {
        stringValues[key] = stringValues[key].toString()
      }
    }
    console.log({ stringValues })

    const config = getConfig(stringValues)

    const result = await useGenerateUI(generatorName, values, config)
    handleGeneration(result)
  }, [generatorName, form, handleGeneration, getConfig, values])

  console.log('PARAMS BEFORE RETURN')
  console.log({ allParameters })
  console.log({ versionId, requiredParameters, optionalParameters })
  console.log({ values })

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
