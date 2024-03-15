import React, { useEffect, useState } from "react";
import { Layout, Card, Row, Col, Typography, Form, Image } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
// import { setLoading, createPassword } from '../../../store/slices/login/create-password-slice';
import { createPassword, setLoading } from "../../../store/slices/login/login";
import { useAppDispatch } from "../../../hooks/useTypeSelector";
import CommonButton from "../../common/button";
import CommonInput from "../../common/input";
import logo from "../../../assets/xseedLogo.png";
import { useSelector } from "react-redux";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";

const { Content } = Layout;

const CreatePasswordView: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    token: "",
    password: "",
    confirmPassword: "",
  });

  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const loading = useSelector((state: any) => state.login.loading);
  const intl = useIntl();

  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCreatePassword = async (password: string) => {
    dispatch(setLoading(true));
    try {
      await dispatch(createPassword(formData)).unwrap();
      navigate("/login", { state: { passwordFlag: true } });
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        console.log("Token is expired!");
      } else {
        console.error("Error:", error);
      }

      // err
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (token) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        token: token,
      }));
    }
  }, [token]);

  return (
    <Layout className="login-form">
      <Card className="login-container">
        <Row>
          <Content className="login-header">
            <Image src={logo} alt="XSeed Logo" />
            <Typography className="typography-title">
              {intl.formatMessage({
                id: "label.create-password",
                defaultMessage: "Create Password",
              })}
            </Typography>
          </Content>

          <Form
            form={form}
            onFinish={handleCreatePassword}
            validateTrigger="onSubmit"
            className="w-100"
          >
            <Col span={24}>
              <Layout className="create-password-Layout">
                <Row>
                  <Col span={1}>
                    <InfoCircleOutlined />
                  </Col>
                  <Col span={23}>
                    <Typography className="create-password-instuctions">
                      {intl.formatMessage({
                        id: "note.create-password-note",
                        defaultMessage:
                          "Your password must be at least 8 characters long and include a combination of uppercase letters",
                      })}
                    </Typography>
                  </Col>
                </Row>
              </Layout>
              <br />
              <br />
              <CommonInput
                size="large"
                type="password"
                name="password"
                placeholder={intl.formatMessage({
                  id: "label.new-password",
                  defaultMessage: "New Password",
                })}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                disabled={loading}
                label={intl.formatMessage({
                  id: "label.new-password",
                  defaultMessage: "New Password",
                })}
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: "validation.enterNewPassword",
                      defaultMessage: "Please enter new password",
                    }),
                  },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/,
                    message: intl.formatMessage({
                      id: "validation.passwordMatch",
                      defaultMessage: "Password does not match the criteria",
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
                name="confirmPassword"
                placeholder={intl.formatMessage({
                  id: "label.re-password",
                  defaultMessage: "Re-enter New Password",
                })}
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
                disabled={loading}
                label={intl.formatMessage({
                  id: "label.re-password",
                  defaultMessage: "Please re-enter password",
                })}
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: "validation.re-enterPassword",
                      defaultMessage: "Please re-enter password",
                    }),
                  },
                  ({
                    getFieldValue,
                  }: {
                    getFieldValue: (name: string) => string;
                  }) => ({
                    validator(_: any, value: string) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        intl.formatMessage({
                          id: "validation.passwordMatch",
                          defaultMessage:
                            "Password does not match the criteria",
                        })
                      );
                    },
                  }),
                ]}
                lg={24}
                md={24}
                sm={24}
                xs={24}
              />

              <CommonButton
                className="w-100 btn-text-center"
                label="Update"
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

export default CreatePasswordView;
