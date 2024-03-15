import { useState, useEffect } from "react";
import { Layout, Card, Row, Col, Typography, Form, Image, Alert } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import CommonButton from "../../common/button";
import CommonInput from "../../common/input";
import logo from "../../../assets/xseedLogo.png";
import axios from "axios";
import Cookies from "js-cookie";
import { Content } from "antd/es/layout/layout";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();
  const intl = useIntl();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:9898/auth/login",
        formData
      );
      console.log(response.data);
      const accessToken = response.data;
      Cookies.set("accessToken", accessToken); // Set the access token in a cookie for 1 day , { expires: 1 }
      //sessionStorage.setItem("accessToken", accessToken); // Store the access token in session storage
      navigate("/dashboard");
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        setErrorMessage("User not found or incorrect password.");
      } else {
        setErrorMessage("User not found or incorrect password.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.state && location.state.passwordFlag) {
      setShowSuccessMessage(true);
    }

    const timeoutId = setTimeout(() => {
      setShowSuccessMessage(false);
      navigate(location.pathname, { ...location.state, passwordFlag: false });
    }, 1800);

    return () => clearTimeout(timeoutId);
  }, [location.state, location.pathname]);

  return (
    <Layout className="login-form">
      <Card className="login-container">
        <Row>
        <Content className="login-header">
            <Image src={logo} alt="XSeed Logo" />            
            <Typography className="typography-title">{intl.formatMessage({ id: "label.login",
             defaultMessage: "Log In",
           })}</Typography>
           
          </Content>
          <Form
            form={form}
            onFinish={handleLogin}
            validateTrigger="onSubmit"
            className="w-100"
          >
            <Col span={24}>
              <CommonInput
                size="large"
                type="email"
                name="username"
                placeholder={intl.formatMessage({
                  id: "placeholder.email",
                  defaultMessage: "Enter your email ID",
                })}
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                disabled={loading}
                label={intl.formatMessage({
                  id: "label.email",
                  defaultMessage: "Email",
                })}
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: "validation.enterEmail",
                      defaultMessage: "Default msg",
                    }),
                  },
                  {
                    pattern:
                      /^(?=.{1,50}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: intl.formatMessage({
                      id: "validation.enterRegisteredEmail",
                      defaultMessage: "Default msg",
                    }),
                  },
                ]}
                lg={24}
                md={24}
                sm={24}
                xs={24}
              />
              <CommonInput
                size="large"
                type="password"
                name="password"
                placeholder={intl.formatMessage({
                  id: "placeholder.password",
                  defaultMessage: "Enter Password",
                })}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                disabled={loading}
                label={intl.formatMessage({
                  id: "label.password",
                  defaultMessage: "Password",
                })}
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: "validation.enterPassword",
                      defaultMessage: "Default msg",
                    }),
                  },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/,
                    message: intl.formatMessage({
                      id: "validation.enterCorrectPassword",
                      defaultMessage: "Default msg",
                    }),
                  },
                ]}
                lg={24}
                md={24}
                sm={24}
                xs={24}
              />
              <Form.Item>
                <Typography className="Typo-label link">
                  <Link to={"/forgot-password"}>Forgot password?</Link>
                </Typography>
              </Form.Item>

              <CommonButton
                className="btn-text-center "
                label={intl.formatMessage({
                  id: "button.signIn",
                  defaultMessage: "Sign In",
                })}
                type="primary"
                size="large"
                isSubmit
                htmlType="submit"
                disabled={loading}
                lg={24}
                md={24}
                sm={24}
                xs={24}
              />
            </Col>
          </Form>
        </Row>
      </Card>

      {showSuccessMessage && (
        <Alert
          message="Password changed successfully!"
          type="success"
          showIcon
          className="alertMessage"
        />
      )}

      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          className="alertMessage"
        />
      )}
    </Layout>
  );
};

export default LoginPage;

/*

import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const Dashboard = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        // Check session storage first
        const sessionAccessToken = sessionStorage.getItem("accessToken");
        if (sessionAccessToken) {
            setAccessToken(sessionAccessToken);
        } else {
            // If not in session storage, check cookies
            const cookieAccessToken = Cookies.get("accessToken");
            if (cookieAccessToken) {
                setAccessToken(cookieAccessToken);
            }
        }
    }, []);

    return (
        <div>
            <h3>Welcome to Dashboard!</h3>
            {accessToken && <p>Access Token: {accessToken}</p>}
        </div>
    );
}

export default Dashboard;










import React from "react";

const Dashboard = ()=>{
    return(
        <h3>Welcome to Dashboard!</h3>
    );
}

export default Dashboard
*/
