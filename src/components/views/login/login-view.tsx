// LoginView.tsx - UI Component
import React from "react";
import { Layout, Card, Row, Col, Typography, Form, Image, Alert } from 'antd';
import { Link } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import "../../../themes/default/css/global.scss";
import "../../../themes/default/css/login.scss";
import logo from "../../../assets/xseedLogo.png";
import { useIntl } from "react-intl";
import CommonButton from "../../common/button";
import CommonInput from "../../common/input";

interface LoginViewProps {
  showSuccessMessage: boolean;
  loading: boolean;
  errorMessage : string;
  formData: { username: string; password: string };
  passwordChanged: boolean;
  handleChange: (name: string, value: string) => void;
  handleLogin: () => void;
  handleForgotPasswordClick: () => void;
  onFinish: (values: { username: string; password: string }) => void;
}

const LoginView: React.FC<LoginViewProps> = ({
  showSuccessMessage,
  loading,
  errorMessage,
  formData,
  passwordChanged,
  handleChange,
  handleLogin,
  handleForgotPasswordClick,
  onFinish,
}) => {
  const [form] = Form.useForm(); 
  const useintl = useIntl();

  const emailValidationRules = [
    {
      required: true,
      message: "Please input your email!"
    },
    {
      // validator: (_: any, value: { split: (arg0: string) => [any, any]; length: number; }) => {
        validator: (_:any, value:any) => {
        if (!value) return Promise.resolve();
        const [localPart, domain] = value.split("@");
        if (!localPart || !domain) {
          return Promise.reject("Please enter a valid email address");
        }
        if (value.length > 320) {
          return Promise.reject("Email address cannot exceed 320 characters");
        }
        const [, tld] = domain.split(".");
        if (!tld || tld.length < 2) {
          return Promise.reject("Please enter a valid email address");
        }
        return Promise.resolve();
      },
    },
  ];


  const passwordValidationRules = [
    { 
        required: true, 
        message: 'Please enter your password' 
    },
    { 
        validator: (_:any, value:any) => {
            if (!value) {
                return Promise.resolve();
            } else if (value.length < 6 || value.length > 30) {
                return Promise.reject('Please enter a valid password');
            } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value)) {
                return Promise.reject('Please enter a valid password');
            } else {
                return Promise.resolve();
            }
        },
    },
  ];

  return (
    <Layout className="login-page">
      {showSuccessMessage && (
        <Alert
          message="Password changed successfully!"
          type="success"
          showIcon
          style={{ marginBottom: "20px", marginTop: "-60px" }}
        />
      )}
       {errorMessage && ( // Render error message
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          style={{ marginBottom: "20px", marginTop: "-60px" }}
        />
      )}
      <Card className="custom-login-container">
        <Row>
          <Content className="custom-login-header">
            <Image src={logo}  alt="XSeed Logo"  />
            <br />
            <br />
{/*  className="w-40"     style={{ width: "130px" }}   */}
            {/* <Typography className="typography-title-2">
              {useintl.formatMessage({ id: "label.login" })}
            </Typography> */}

            <Typography className='Typo-header login-title' > {useintl.formatMessage({ id: "label.login" })}</Typography>

            <br />
          </Content>
          <Form
            form={form}
            onFinish={onFinish}
            //  onSubmit={handleLogin}
            validateTrigger="onSubmit"
            className="login-content-size"
          >
            <Col span={24}>
              {/* <Typography className="Typo-emailpass space">
                {useintl.formatMessage({ id: "label.email" })}
              </Typography> */}
            
                <CommonInput
                   size="large"
                  type="email"
                  name="username"
                  placeholder={useintl.formatMessage({
                    id: "placeholder.email",
                  })}
                  value={formData.username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("username", e.target.value)
                  }
                  disabled={loading}
                  // 
                  lg={24}
                  label={useintl.formatMessage({ id: "label.email" })}
                  rules={emailValidationRules}
                />
            
              {/* <Typography className="Typo-emailpass space">
                {useintl.formatMessage({ id: "label.password" })}
              </Typography> */}
            
                <CommonInput
                   size="large"
                  type="password"
                  name="password"
                  placeholder={useintl.formatMessage({
                    id: "placeholder.password",
                  })}
                  value={formData.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("password", e.target.value)
                  }
                  disabled={loading}
                  // 
                  lg={24}
                  label={useintl.formatMessage({ id: "label.password" })}
                  rules={passwordValidationRules}
                />
            

              <Typography
                className="Typo-label link"
                onClick={handleForgotPasswordClick}
              >
                <Link to="/forgotPasswordPage">
                  {useintl.formatMessage({ id: "link.forgotPassword" })}
                </Link>
              </Typography>

              <CommonButton
                className="login-content-size"
                label={useintl.formatMessage({ id: "button.signIn" })}
                type="primary"
                size="large"
                isSubmit
                //  onClick={handleLogin}
                htmlType="submit"
                disabled={loading}
                lg={24}
              />
            </Col>
          </Form>
        </Row>
      </Card>
    </Layout>
  );
};

export default LoginView;




/*
<Form.Item 
                name="username"
                rules={[
                  { 
                      required: true, 
                      message: "Please input your email!" 
                  },
                  {
                      validator: (_, value) => {
                          if (!value) return Promise.resolve();
                          const [localPart, domain] = value.split("@");
                          if (!localPart || !domain) {
                              return Promise.reject("Please enter a valid email address");
                          }
                          if (value.length > 320) {
                              return Promise.reject("Email address cannot exceed 320 characters");
                          }
                          const [, tld] = domain.split(".");
                          if (!tld || tld.length < 2) {
                              return Promise.reject("Please enter a valid email address");
                          }
                          return Promise.resolve();
                      },
                  },
              ]}
              >

*/

/*
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Card, Form, Typography, Row, Image, Col, Alert } from "antd";
import { Content } from "antd/es/layout/layout";

import "../../../themes/default/css/global.scss";
import "../../../themes/default/css/login.scss";
import logo from "../../../assets/xseedLogo.png";

import { useIntl } from "react-intl";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setLoading } from "../../../store/slices/authSlice";
import CommonButton from "../../common/button";
import CommonInput from "../../common/input";

const LoginView: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const passwordChanged = searchParams.get("passwordChanged") === "true";
  const useintl = useIntl();
  const [showSuccessMessage, setShowSuccessMessage] = useState(passwordChanged);

  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.auth.loading);

  const [formData, setFormData] = useState({ username: "", password: "" });
  
  useEffect(() => {
    if (passwordChanged) {
      setShowSuccessMessage(true);
      const timeoutId = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1800);

      return () => clearTimeout(timeoutId);
    }
  }, [passwordChanged]);

  const handleForgotPasswordClick = () => {
    navigate("/forgotpasswordpage");
  };

  const onFinish = (values: { username: string; password: string }) => {
    handleLogin();
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        "http://localhost:9898/auth/login",
        formData
      );
      const accessToken = response.data;
      dispatch(setAccessToken(accessToken));
      console.log("Access Token:", accessToken);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Layout className="login-page">
      {showSuccessMessage && (
        <Alert
          message="Password changed successfully!"
          type="success"
          showIcon
          style={{ marginBottom: "20px", marginTop: "-60px" }}
        />
      )}
      <Card className="custom-login-container">
        <Row>
          <Content className="custom-login-header">
            <Image src={logo} alt="XSeed Logo" style={{ width: "130px" }} />
            <br />
            <br />
            <Typography className="typography-title-2">
              {useintl.formatMessage({ id: "label.login" })}
            </Typography>
            <br />
          </Content>
          <Form
            form={form}
            onFinish={onFinish}
            //  onSubmit={handleLogin}
            validateTrigger="onSubmit"
            className="login-content-size"
          >
            <Col span={24}>
              <Typography className="Typo-emailpass space">
                {useintl.formatMessage({ id: "label.email" })}
              </Typography>
              <Form.Item
                name="username"
                rules={[
                  { 
                      required: true, 
                      message: "Please input your email!" 
                  },
                  {
                      validator: (_, value) => {
                          if (!value) return Promise.resolve();
              

                          const [localPart, domain] = value.split("@");
              
                          if (!localPart || !domain) {
                              return Promise.reject("Please enter a valid email address");
                          }

                          if (value.length > 320) {
                              return Promise.reject("Email address cannot exceed 320 characters");
                          }

                          const [, tld] = domain.split(".");
                          if (!tld || tld.length < 2) {
                              return Promise.reject("Please enter a valid email address");
                          }

                          return Promise.resolve();
                      },
                  },
              ]}
              
              
              
              
              >
                <CommonInput
                   size="large"
                  type="email"
                  name="username"
                  placeholder={useintl.formatMessage({
                    id: "placeholder.email",
                  })}
                 
                  value={formData.username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("username", e.target.value)
                  }
                  disabled={loading}
                  lg={24}
                />
              </Form.Item>
              <Typography className="Typo-emailpass space">
                {useintl.formatMessage({ id: "label.password" })}
              </Typography>
              <Form.Item
                name="password"
                rules={[
                  { 
                      required: true, 
                      message: 'Please enter your password' 
                  },
                  { 
                      validator: (_, value) => {
                          if (!value) {
                              return Promise.resolve();
                          } else if (value.length < 6 || value.length > 30) {
                              return Promise.reject('Please enter a valid password');
                          } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value)) {
                              return Promise.reject('Please enter a valid password');
                          } else {
                              return Promise.resolve();
                          }
                      },
                  },
              ]}
                   
              >
                <CommonInput
                   size="large"
                  type="password"
                  name="password"
                  placeholder={useintl.formatMessage({
                    id: "placeholder.password",
                  })}
                  value={formData.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("password", e.target.value)
                  }
                  disabled={loading}
                  lg={24}
                />
              </Form.Item>

              <Typography
                className="Typo-emailpass link"
                onClick={handleForgotPasswordClick}
              >
                <Link to="/forgotPasswordPage">
                  {useintl.formatMessage({ id: "link.forgotPassword" })}
                </Link>
              </Typography>

              <CommonButton
                className="login-content-size"
                label={useintl.formatMessage({ id: "button.signIn" })}
                type="primary"
                size="large"
                isSubmit
                //  onClick={handleLogin}
                htmlType="submit"
                disabled={loading}
                lg={24}
              />
            </Col>
          </Form>
        </Row>
      </Card>
    </Layout>
  );
};

export default LoginView;
*/





/*
import React from 'react'
import { useIntl } from 'react-intl';

const LoginView = () => {
  const useintl = useIntl();
  
  return (
    <div>{useintl.formatMessage({ id: "label.login" })}
    </div>
  )
}


export default LoginView

*/
