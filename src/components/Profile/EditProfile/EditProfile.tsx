import React, { useState } from 'react'

// ANTD
import {
  Alert,
  Button,
  // Checkbox,
  Card,
  Form,
  Input,
  Layout,
  Space,
  Tag,
  Typography,
  // theme,
  Col,
  Row,
  Upload,
} from 'antd'
const { TextArea } = Input
const { Title, Text } = Typography
const { Header, Content } = Layout

// ICONS
import { PlusOutlined } from '@ant-design/icons'

// STYLES
import styled from 'styled-components'

const EditProfileStyles = styled.section`
    /*** EDIT PROFILE ***/
        display: flex;
        flex-direction: column;
    .profile-header {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        font-weight: 600;
    }
    /*** CONTENT ***/
    .content-wrapper {
        display: flex;
        justify-content: center;
        width: 100vw;
    }
    /*** EDIT PROFILE WRAPPER ***/
    .edit-profile-form-wrapper {
        width: 90%;  
        margin-bottom: 100px;
        max-width: 770px;
    }
    /*** PROFILE FORM ***/
    .profile-form {
        display: grid;
        gap: 32px;
    }
    /*** FORM ROW ***/
    .form-row {
        display: flex;
        margin: 20px 0;
    }
    /*** FORM COL ***/
    .form-row .form-info.ant-col {
        display: flex;
        flex-direction: column;
        
    }
    /*** FORM HEADER ***/
    .form-header {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: flex-start;
        margin-right: 20px;
    }
    /** FORM TITLE */
    .form-title {
        display: flex;
        flex: 0;
        font-weight: bold;
        font-size: 1.4rem;
    }
    .form-item > .ant-form-item-row {
        flex-direction: column;
        /*align-items: flex-end;*/
        height: 90px;
    }
    /** FORM INFO **/
    .form-info .ant-form-item-control {
        min-width: 100%;
    }
    /*** FORM-ITEM TEXT-AREA ***/
    .form-item.text-area > .ant-form-item-row {
        height: 330px;
    }
    .form-item.text-area .ant-form-item-label {
        max-height: 30px;
    }
    /*** FORM-ITEM UPLOAD ***/
    .form-item.upload {
        // background: blue; 
        // border: 1px solid blue; 
        flex-flow: column;
        align-items: flex-start; 
        margin: 0;     
    }
    .form-item.upload > .ant-form-item-row {
        height: 140px;
        align-items: flex-start;
        // background: lime;
    }
    .form-item.upload .ant-form-item-control {
        width: 100%;
        max-width: unset;
        min-height: 50px;
        // background: lime;
    }
    .form-item.upload .ant-form-item-row .ant-form-item-label {
        min-height: 30px;
        flex: 0;
    }
    .form-item .ant-form-item-control-input {
        align-items: flex-start;
    }
    /*** UPLOAD SELECT ***/
    .ant-upload.ant-upload-select {
        width: 100%;
        // background: red;
    }
    .ant-upload-wrapper {
        // background: hotpink;  
        width: 100%;
    }
    .ant-upload {
        min-width: 100%;    
    }
    /** FORM LABEL **/
    .form-item .ant-form-item-row .ant-form-item-label {
        display: flex;
        flex: 1;
        width: 100%;
        justify-content: space-between;
        padding: 0;
    }
    .form-item .ant-form-item-row label {
        display: flex;
        flex: 1;
        justify-content: space-between;
    }
    .form-item .ant-form-item-row label .ant-space.form-label-wrapper  {
        display: flex;  
        flex: 1;
        align-items: flex-start;
        height: 30px;
        justify-content: space-between;
        width: 100%;
    }
    .form-label {
        font-size: 1rem; 
        font-weight: bold; 
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
    /** FORM LABEL OPTIONAL **/
    .form-label-optional {
        color: rgba(0, 0, 0, 0.7);
        margin-bottom: 10px;
    }
    /** FORM INPUT **/
    .form-input {
        margin-bottom: 15px;   
     }
    /*** FORM TAG ***/
    .form-tag {
        display: flex;
        margin: 10px 0;
        height: 30px;
        border-radius: 20px;
        align-items: center;
        justify-content: space-between;
        max-width: 230px;
    }
    @media(max-width: 40em) {
        // background: red;
        .form-row {
            flex-direction: column;
            flex-flow: column;
        }
        /*** FORM HEADER ***/
        .form-row .form-header {
            margin: 0;
            flex: 0;    
        }
        /*** FORM COL ***/
        .form-row .form-info.ant-col {
            flex: 0;
            height: auto;
            min-height: unset;
            max-width: 100%;
            padding-bottom: 15px;
            // border: 4px solid red;
        }
        /*** FORM ROW ***/
        .form-item > .ant-form-item-row {
            // background: blue;
            flex-flow: column;
            height: auto;
        }
        .form-item .ant-form-item-row .ant-form-item-label {
            // background: hotpink;
            min-height: 30px;
        }
        /*** FORM HEADER ***/
        .form-row .form-header {
            gap: unset;    
        }
        /*** FORM DESCRIPTION ***/
        .form-header .form-description {
            margin: 0;
            padding: 0;
        }
        /*** FORM-ITEM TEXT-AREA CONTROL ***/
        .form-item.text-area .ant-form-item-control {
            min-width: 100%;
        }
        /*** FORM-INPUT-WRAPPER UPLOAD ***/
        .form-row .form-input-wrapper.upload {
            width: 100%;
            max-width: unset;
            // border: 5px solid yellow;
        }
        /*** FORM-INPUT-WRAPPER UPLOAD LABEL ***/
        .form-item.upload .ant-form-item-row .ant-form-item-label {
            width: 100%;
            max-width: unset;
        }
        /*** FORM SUBMIT ***/
        .form-submit {
            width: 100%; 
            max-width: unset; 
            // background: cyan; 
        }
        /** FORM SUBMIT CONTROL ***/
        .form-submit .ant-form-item-control {
            max-width: unset;   
        }
    @media(min-width: 40em) {
        background: cyan;
    } 
    @media(min-width: 50em) {
        background: orange;
    } 
    @media(min-width: 60em) {
        background: yellow;
    } 
    @media(min-width: 80em) {
        background: purple;
    } 
`

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
                            onChange={(e) => setComponentDisabled(e.target.checked)}
                        >
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
              <Button
                type="primary"
                shape="round"
                size="large"
                block
                style={{ width: '100%' }}
              >
                Save changes
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </EditProfileStyles>
  )
}

export default EditProfile
