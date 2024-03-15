import React, { useState, useEffect } from "react";
import { Layout, Card, Row, Col, Typography, Form, Image } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import CommonButton from "../../common/button";
import CommonInput from "../../common/input";
import logo from "../../../assets/xseedLogo.png";
import { login, setLoading } from "../../../store/slices/login/login";
import "../../../themes/default/css/global.scss";
import "../../../themes/default/css/login.scss";
import { useAppDispatch } from "../../../hooks/useTypeSelector";

const { Content } = Layout;
const { Item } = Form;

const LoginView: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();
  const intl = useIntl();
   const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const loading = useSelector((state: any) => state.login.loading);
  const [formData, setFormData] = useState({ username: "", password: "" });
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = async () => {
    dispatch(setLoading(true));
    try {
      await dispatch(login(formData)).unwrap();
      navigate("/dashboard");
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        setErrorMessage("Invalid email syntax");
        form.setFields([
          {
            name: "username",
            errors: ["Invalid email db "],
          },
        ]);
      } else {
        setErrorMessage("Invalid password syntax");      
        form.setFields([
          {
            name: "password",
            errors: ["Invalid password db"],
          },
        ]);
      }
    } finally {
      dispatch(setLoading(false));
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
            <Typography className="typography-title">
              {intl.formatMessage({
                id: "label.login",
                defaultMessage: "Log In",
              })}
            </Typography>
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
                    message: intl.formatMessage({ id: "validation.enterEmail" ,
                    defaultMessage: "Default msg", }),
                  },
                  {
                    pattern:
                      /^(?=.{1,50}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                   // /^(?=.{1,50}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?=\.[a-zA-Z]{2,4}$)/,
                    message: intl.formatMessage({ id: "validation.enterRegisteredEmail" ,
                    defaultMessage: "Default msg", }),
                    
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
                    message: intl.formatMessage({ id: "validation.enterPassword" ,
                    defaultMessage: "Default msg", }),
                  },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/,
                    message: intl.formatMessage({ id: "validation.enterCorrectPassword" ,
                    defaultMessage: "Default msg", }),
                    
                  },
                 
                ]}
                lg={24}
                md={24}
                sm={24}
                xs={24}
              />
              <Item>
                <Typography className="Typo-label link">
                  <Link to={"/forgot-password"}>Forgot password?</Link>
                </Typography>
              </Item>

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
    </Layout>
  );
};

export default LoginView;

/*

{showSuccessMessage && (
        <Alert
          message="Password changed successfully!"
          type="success"
          showIcon
          className="alertMessage"
        />
      )}





      // {
                  //   type: "email",
                  //   message: intl.formatMessage({
                  //     id: "validation.enterValidFormat",
                  //     defaultMessage: "Please enter a valid email address.",
                  //   }),
                  // },
                  // {
                  //   validator: (_: any, value: any) => {
                  //     if (errorMessage === "Invalid email or password") {
                  //       return Promise.reject("Invalid email or password");
                  //     }
                  //     return Promise.resolve();
                  //   },
                  // },




                   // {
                  //   type: "password",
                  //   message: intl.formatMessage({
                  //     id: "validation.enterCorrectCredentials",
                  //     defaultMessage: "Please enter a valid email address.",
                  //   }),
                  // },
                  // {
                  //   validator: (_: any, value: any) => {
                  //     if (errorMessage === "Invalid email or password") {
                  //       return Promise.reject("Invalid email or password");
                  //     }
                  //     return Promise.resolve();
                  //   },
                  // },




*/
