import React, { useState } from 'react'

// ANTD
import { Form, Input, Col, Row, Button } from 'antd'
import type { FormInstance } from 'antd/lib/form/Form'

// ICONS
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

interface StringParameterProps {
  form: FormInstance
  parameter: {
    label: string
    name: string
    isRequired: boolean
    description: string
    minLength?: number
    default: string | string[]
  }
}

const StringParameter = ({ form, parameter }: StringParameterProps) => {
  const [value, setValue] = useState(parameter.default)
  const [values, setValues] = useState(
    new Array(parameter.minLength || 1).fill(parameter.default),
  )

  const handleAddInput = () => {
    setValues([...values, ''])
  }

  const handleChange = (newValue: string[]) => {
    setValues(newValue)
    form.setFieldsValue({ [parameter.name]: newValue })
  }

  // const onChange = (newValue: string) => {
  //   setValue(newValue);
  // };

  const isArray = Array.isArray(parameter.default)

  return (
    <>
      {isArray ? (
        <>
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
            <>
              {values.map((value, index) => (
                <Row key={index}>
                  <Col span={10}>
                    <Input
                      value={value}
                      onChange={event => {
                        const newValues = [...values]
                        newValues[index] = event.target.value
                        handleChange(newValues)
                      }}
                    />
                  </Col>
                  <Col span={2}>
                    {values.length > (parameter.minLength || 1) && (
                      <Button
                        onClick={() => {
                          const newValues = [...values]
                          newValues.splice(index, 1)
                          handleChange(newValues)
                        }}
                      >
                        <MinusOutlined />
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
              <Row>
                <Col>
                  <Button onClick={handleAddInput}>
                    <PlusOutlined />
                  </Button>
                </Col>
              </Row>
            </>
          </Form.Item>
          <Row>
            <Col>
              <span style={{ color: 'gray' }}>{parameter.description}</span>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Col span={10}>
              <Form.Item
                style={{ marginBottom: 5 }}
                label={parameter.label}
                name={parameter.name}
                // initialValue={parameter.default}
                rules={[
                  {
                    required: parameter.isRequired,
                    message: `${parameter.label} required`,
                  },
                ]}
              >
                <Input
                  value={value}
                  onChange={event => {
                    setValue(event.target.value)
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <span style={{ color: 'gray' }}>{parameter.description}</span>
          </Row>
        </>
      )}
    </>
  )
}

export default StringParameter
