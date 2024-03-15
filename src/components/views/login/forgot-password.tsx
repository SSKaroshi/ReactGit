import React, { useState } from "react";
import { Layout, Card, Form, Typography, Row, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../../../themes/default/css/login.scss";
import CommonButton from "../../common/button";
import CommonInput from "../../common/input";
import logo from "../../../assets/xseedLogo.png";
import { Content } from "antd/es/layout/layout";
import { useAppDispatch } from "../../../hooks/useTypeSelector";
import { useSelector } from "react-redux";
import {
  forgotPassword,
  setLoading,
} from "../../../store/slices/login/login";
import { useIntl } from "react-intl";

const { Item } = Form;
const ForgotPasswordView: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({ username: "" });
  const dispatch = useAppDispatch();
  const loading = useSelector((state: any) => state.login.loading);
  const intl = useIntl();

  const handleChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleLogin = async () => {
    dispatch(setLoading(true));
    try {
      await dispatch(forgotPassword(formData)).unwrap();
      navigate("/success-msg", { state: { email: formData.username } });
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
      } else {
        console.error("Error:", error);
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Layout className="login-form">
      <Card className="login-container">
        <Row>
          <Content className="login-header">
            <img src={logo} alt="XSeed Logo" className="logo-image" />
            <Typography className="typography-title">
              {intl.formatMessage({ id: "label.reset-password" })}
            </Typography>
          </Content>

          <Form
            form={form}
            onFinish={handleLogin}
            layout="vertical"
            className="w-100"
            validateTrigger="onSubmit"
          >
            <CommonInput
              size="large"
              type="email"
              name="username"
              placeholder="Enter your email ID"
              onChange={(e) => handleChange("username", e.target.value)}
              value={formData.username}
              disabled={loading}
              label="Email address"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: "validation.enterEmail" }),
                },
                {
                  pattern:
                    /^(?=.{1,50}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: intl.formatMessage({
                    id: "validation.enterRegisteredEmail",
                  }),
                },
              ]}
              lg={24}
              md={24}
              sm={24}
              xs={24}
            />

            <CommonButton
              className="w-100 btn-text-center"
              label="Reset Password"
              type="primary"
              isSubmit
              size="large"
              lg={24}
              md={24}
              sm={24}
              xs={24}
            />

            <Divider />
            <Item className="login-title">
              <Typography className="Typo-label">
                <Link to={"/login"}>
                  {intl.formatMessage({ id: "link.signIn" })}
                </Link>
              </Typography>
            </Item>
          </Form>
        </Row>
      </Card>
    </Layout>
  );
};

export default ForgotPasswordView;
