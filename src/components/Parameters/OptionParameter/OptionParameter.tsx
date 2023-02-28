import { useState } from 'react'

// ANTD
import { Form, Select, Row, Col, Switch } from 'antd'

// TYPES
import { ParameterType } from '@/interfaces/ParameterType'

const OptionParameter = ({
  form,
  parameter,
}: {
  form: any
  parameter: ParameterType
}) => {
  const { allowedValues, name, label, isRequired, description } = parameter
  const [value, setValue] = useState(parameter.default)
  const options = Object.keys(allowedValues).map(key => {
    return {
      value: allowedValues[key],
      label: allowedValues[key],
    }
  })

  const onChange = (newValue: number | null) => {
    if (newValue !== null) {
      setValue(newValue)
      form.setFieldsValue({ [name]: newValue })
    }
  }

  // true as the string "true" and false as the string "false"
  // Previous Type Error: Type 'boolean' is not assignable to type 'string'
  const onSwitchChange = (newValue: boolean) => {
    setValue(newValue ? 'true' : 'false')
    form.setFieldsValue({ [name]: newValue })
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Form.Item
            style={{ marginBottom: 5 }}
            label={label}
            name={name}
            initialValue={parameter.default}
            rules={[
              {
                required: isRequired,
                message: `${label} required`,
              },
            ]}
          >
            {typeof parameter.default === 'boolean' ? (
              <Switch
                checked={
                  typeof value === 'boolean' && value === 'true' ? true : false
                }
                onChange={onSwitchChange}
              />
            ) : (
              <Select
                value={value}
                style={{ width: '40%' }}
                options={options}
                onChange={onChange}
              />
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <span style={{ color: 'gray' }}>{description}</span>
      </Row>
    </>
  )
}

export default OptionParameter
