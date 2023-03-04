import React, { useState } from 'react'

// ANTD
import {
  Alert,
  Card,
  Form,
  Input,
  Layout,
  Space,
  Tag,
  Typography,
  Col,
  Row,
  Upload,
  Button,
} from 'antd'

const { TextArea } = Input
const { Title, Text } = Typography
const { Header, Content } = Layout

// ICONS
import { PlusOutlined } from '@ant-design/icons'

// STYLES
import { EditProfileStyles } from './EditProfileStyles'

const EditProfile = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false)
  const [isUsernameAvailable] = useState<boolean>(false) // setIsUsernameAvailable

  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setComponentDisabled(disabled)
  }

  const log = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(e);
    return e ? e : null
  }

  return (
    <EditProfileStyles id="edit-profile">
      <Header className="profile-header">
        <Title>Edit Profile</Title>
      </Header>

      <Content className="content-wrapper">
        <Card className="edit-profile-form-wrapper">
          {/*<Checkbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}>
              Form disabled
          </Checkbox>*/}
          <Form
            className="profile-form"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onValuesChange={onFormLayoutChange}
            disabled={componentDisabled}
          >
            <Row className="form-row">
              <Space className="form-header">
                <Text className="form-title">Enter your details</Text>
              </Space>
              <Col className="form-info" span={12}>
                <Form.Item
                  className="form-item"
                  label={
                    <Space className="form-label-wrapper">
                      <Text className="form-label">Name</Text>
                      <Text className="form-label-optional" type="secondary">
                        Optional
                      </Text>
                    </Space>
                  }
                  labelCol={{ span: 24 }}
                  colon={false}
                >
                  <Input className="form-input" size="large" />
                </Form.Item>

                <Form.Item
                  className="form-item"
                  style={{ marginBottom: 15 }}
                  label={
                    <Space className="form-label-wrapper">
                      <Text className="form-label">Username</Text>
                      <Text className="form-label-optional" type="secondary">
                        Optional
                      </Text>
                    </Space>
                  }
                  labelCol={{ span: 24 }}
                  colon={false}
                >
                  <Input
                    className="form-input"
                    style={{ margin: 0 }}
                    prefix={'@'}
                    size="large"
                  />
                </Form.Item>
                {isUsernameAvailable ? (
                  <Alert
                    message={`Username ${'test'} is available`}
                    type="success"
                    style={{ height: 30 }}
                  />
                ) : (
                  <Alert
                    message={`Username ${'test'} is unavailable`}
                    type="error"
                    style={{ height: 30, color: 'red' }}
                  />
                )}
              </Col>
            </Row>

            <Row className="form-row">
              <Col className="form-info" span={12}>
                <Space className="form-header">
                  <Text className="form-title">
                    Receive email notifications
                  </Text>
                  <Text className="form-description">
                    Add your email address to receive notifications about your
                    activity on Eden. This will not be shown on your profile.
                  </Text>
                </Space>
              </Col>
              <Col className="form-info" span={12}>
                <Form.Item
                  className="form-item"
                  label={
                    <Space className="form-label-wrapper">
                      <Text className="form-label">Email</Text>
                    </Space>
                  }
                  labelCol={{ span: 24 }}
                  colon={false}
                >
                  <Input className="form-input" prefix={'@'} size="large" />
                </Form.Item>
              </Col>
            </Row>

            <Row className="form-row">
              <Space className="form-header">
                <Text className="form-title">Add a short bio</Text>
              </Space>
              <Col className="form-info" span={12}>
                <Form.Item
                  className="form-item text-area"
                  label={
                    <Space className="form-label-wrapper text-area">
                      <Text className="form-label">Enter a short bio</Text>
                      <Text className="form-label-optional" type="secondary">
                        Optional
                      </Text>
                    </Space>
                  }
                  labelCol={{ span: 24 }}
                  colon={false}
                >
                  <TextArea
                    className="form-input"
                    style={{ height: 274 }}
                    size="large"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row className="form-row">
              <Col className="form-info" span={12}>
                <Space className="form-header">
                  <Text className="form-title">Upload a profile image</Text>
                  <Text className="form-description">
                    {'Recommended size: 1000x1000px'}
                  </Text>
                  <Text className="form-description">
                    {'JPG, PNG, or GIF.'}
                  </Text>
                  <Text className="form-description">{'10MB max size'}</Text>
                </Space>
              </Col>
              <Col
                className="form-input-wrapper upload"
                span={12}
                style={{ flexFlow: 'column' }}
              >
                <Form.Item
                  className="form-item upload"
                  colon={false}
                  label={
                    <Space className="form-label-wrapper">
                      <Text className="form-label">Upload</Text>
                      <Text className="form-label-optional" type="secondary">
                        Optional
                      </Text>
                    </Space>
                  }
                  valuePropName="fileList"
                >
                  <Upload
                    action="/upload.do"
                    listType="picture-card"
                    style={{ background: 'red' }}
                  >
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

            <Row className="form-row">
              <Col className="form-info" span={12}>
                <Space className="form-header">
                  <Text className="form-title">Upload a cover image</Text>
                  <Text className="form-description">
                    {'Recommended size: 1500x1500px'}
                  </Text>
                  <Text className="form-description">
                    {'JPG, PNG, or GIF.'}
                  </Text>
                  <Text className="form-description">{'10MB max size'}</Text>
                </Space>
              </Col>
              <Col
                className="form-input-wrapper upload"
                span={12}
                style={{ flexFlow: 'column' }}
              >
                <Form.Item
                  className="form-item upload"
                  colon={false}
                  label={
                    <Space className="form-label-wrapper">
                      <Text className="form-label">Upload</Text>
                      <Text className="form-label-optional" type="secondary">
                        Optional
                      </Text>
                    </Space>
                  }
                  valuePropName="fileList"
                >
                  <Upload
                    action="/upload.do"
                    listType="picture-card"
                    style={{ background: 'red' }}
                  >
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

            <Row className="form-row">
              <Col className="form-info" span={12}>
                <Space className="form-header">
                  <Text className="form-title">Verify your profile</Text>
                  <Text>
                    Show the Eden community that your profile is authentic.
                  </Text>
                </Space>
              </Col>
              <Col span={12}>
                <Tag className="form-tag" closable onClose={log}>
                  @custom_username Twitter
                </Tag>
                <Tag className="form-tag" closable onClose={log}>
                  @custom_username Instagram
                </Tag>
              </Col>
            </Row>

            <Row className="form-row" style={{ flexDirection: 'column' }}>
              <Col
                className="form-info"
                span={24}
                style={{ flex: 0, minHeight: 'unset', paddingBottom: 15 }}
              >
                <Space className="form-header">
                  <Text className="form-title">Add links to</Text>
                  <Text className="form-title">your social media profiles</Text>
                </Space>
              </Col>
              <Col span={24} style={{ flex: 1 }}>
                <Input
                  className="form-input"
                  prefix={<>{'Website'}</>}
                  size="large"
                />
                <Input
                  className="form-input"
                  prefix={<>{'Discord'}</>}
                  size="large"
                />
                <Input
                  className="form-input"
                  prefix={<>{'YouTube'}</>}
                  size="large"
                />
                <Input
                  className="form-input"
                  prefix={<>{'Facebook'}</>}
                  size="large"
                />
                <Input
                  className="form-input"
                  prefix={<>{'Twitch'}</>}
                  size="large"
                />
                <Input
                  className="form-input"
                  prefix={<>{'TikTok'}</>}
                  size="large"
                />
                <Input
                  className="form-input"
                  prefix={<>{'Snapchat'}</>}
                  size="large"
                />
              </Col>
            </Row>

            <Form.Item className="form-submit">
              <Button style={{ width: '100%' }}>Save changes</Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </EditProfileStyles>
  )
}

export default EditProfile
