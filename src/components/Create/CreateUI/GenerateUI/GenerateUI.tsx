import React, { useState, useEffect } from "react";

// ANTD
import { Button, Form, message } from "antd";

// FETCH
import axios from "axios";

// HOOKS
import { useGeneratorInfo } from '@/hooks/useGeneratorInfo'

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

const GeneratorUI = ({generatorName} : {generatorName: string}) => {
  const [form] = Form.useForm();

  const [values, setValues] = useState({});
  const [generating, setGenerating] = useState<boolean>(false);
  const [showOptional, setShowOptional] = useState<boolean>(false);
  const {versionId, requiredParameters, optionalParameters} = useGeneratorInfo(generatorName);

  const allParameters = [...requiredParameters, ...optionalParameters];
  
  const getConfig = (config: any) => {
    Object.keys(requiredParameters).forEach((key) => {
      const name = requiredParameters[key].name;
      if (config[name] === undefined) {
        config[name] = requiredParameters[key].default;
      }
    });
    Object.keys(optionalParameters).forEach((key) => {
      const name = optionalParameters[key].name;
      if (config[name] === undefined) {
        config[name] = optionalParameters[key].default;
      }
    });
    return config;
  }

  const validateConfig = (values: any) => {
    for (const v in values) {
      if (!values[v]) {
        continue;
      }
      const param = allParameters.find((parameter: any) => parameter.name === v);
      if (param.minLength) {
        if (values[v].length < param.minLength) {
          message.error(`Error: ${v} must have at least ${param.minLength} elements`);
          return false;
        }
      }
      if (param.maxLength) {
        if (values[v].length >= param.maxLength) {
          message.error(`Error: ${v} must have no more than ${param.maxLength} elements`);
          return false;
        }
      }
    }
    return true;
  }

  const handleFinish = (formValues: any) => {
    setValues(formValues);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const requestCreation = async (values: any) => {
    
      setGenerating(true);
    
      if (!validateConfig(values)) {
        setGenerating(false);
        return;
      }

      try {
        const config = getConfig(values);
        const response = await axios.post("/api/generate", {
          generatorName: generatorName,
          config: config,
        });
        const newTaskId = response.data.taskId;
        message.success(`Task ${newTaskId} started.`);
      } 
      catch (error: any) {
        // console.log(error)
        if (error.message) {
          message.error(`Error: ${error.message}`);
        } else {
          message.error(`Error: ${error.response.data.error}`);
        }
      }

      setGenerating(false);
    };

    if (Object.keys(values).length > 0) {
      requestCreation(values);
    }

  }, [values]);
  
  const renderFormFields = (parameters: any) => {
    return Object.keys(parameters).map((key) => {
      return (
        <div key={key} style={{paddingBottom: 5, marginBottom: 10, borderBottom: "1px solid #ccc"}}>
          {parameters[key].allowedValues.length > 0 ? (
            <OptionParameter key={key} form={form} parameter={parameters[key]} />
          ) : (
            <>
              {typeof parameters[key].default === "number" ? (
                <SliderParameter key={key} form={form} parameter={parameters[key]} />
              ) : (
                <>
                  {parameters[key].mediaUpload ? (
                    <UploadParameter key={key} form={form} parameter={parameters[key]} />
                  ) : (
                    <StringParameter key={key} form={form} parameter={parameters[key]} />
                  )}
                </>
              )}                  
            </>
          )}
        </div>
      )
    });
  };
  
  return (
    <div>
      
      <div style={{backgroundColor: "#eee", padding: 10, borderRadius: 10, marginBottom: 10, width: "90%"}}>
        <h2>/{generatorName}</h2>
        <h3>version: <span style={{color: "gray"}}>{versionId}</span></h3>
      </div>

      <div style={{padding:10}}>
        <Form
          form={form}
          name="generate"
          onFinish={handleFinish}
        >
          {renderFormFields(requiredParameters)}
          <h3 style={{padding: 5}}>
            {optionalParameters.length > 0 && (
              <>
              {showOptional ? (
                <Button onClick={() => setShowOptional(false)}><UpCircleOutlined/>Hide optional settings</Button>
              ) : (
                <Button onClick={() => setShowOptional(true)}><DownCircleOutlined/>Show optional settings</Button>
              )}
              </>
            )}
          </h3>
          {showOptional && renderFormFields(optionalParameters)}
          <Form.Item>
            <Button
              type="primary"
              icon={<RightCircleOutlined />} 
              htmlType="submit"
              loading={generating}
              disabled={generating}
              size="large"
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default GeneratorUI;
