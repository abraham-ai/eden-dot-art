import { useState } from 'react'

// ANTD
import { Form, Col, Row, Slider, InputNumber } from 'antd'
import type { FormInstance } from 'antd/lib/form/Form'

interface SliderParameterProps {
  form: FormInstance
  parameter: {
    label: string
    name: string
    minimum: number
    maximum: number
    step: number
    isRequired: boolean
    description: string
    minLength?: number
    default: string | string[]
  }
}

const SliderParameter = ({ form, parameter }: SliderParameterProps) => {
  const [value, setValue] = useState<number>(Number(parameter.default))

  const onChange = (newValue: number | null) => {
    if (newValue !== null) {
      setValue(newValue)
      form.setFieldsValue({ [parameter.name]: newValue })
    }
  }

  return (
    <>
      <Row>
        <Col span={8}>
          <Form.Item
            style={{ marginBottom: 5 }}
            label={parameter.label}
            name={parameter.name}
            initialValue={parameter.default}
            rules={[
              {
                required: parameter.isRequired,
                message: `${parameter.label} required`,
              },
            ]}
          >
            <Slider
              value={value}
              min={parameter.minimum}
              max={parameter.maximum}
              step={parameter.step ? parameter.step : 1}
              onChange={(newValue: number) => setValue(newValue)}
            />
          </Form.Item>
        </Col>
        <Col style={{ marginLeft: 10 }}>
          <InputNumber
            value={value}
            min={parameter.minimum}
            max={parameter.maximum}
            onChange={onChange}
          />
        </Col>
      </Row>
      <Row>
        <span style={{ color: 'gray' }}>{parameter.description}</span>
      </Row>
    </>
  )
}

export default SliderParameter
