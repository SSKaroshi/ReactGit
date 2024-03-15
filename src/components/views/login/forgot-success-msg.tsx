import React from "react";
import { Card, Col, Divider, Layout, Row, Typography } from "antd";
import logo from "../../../assets/xseedLogo.png";
import { Link, useLocation } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { useIntl } from "react-intl";

const ForgotSuccessMsgView = () => {
  const location = useLocation();
  const email = location.state && location.state.email;
  const intl = useIntl();

  return (
    <Layout className="login-form">
      <Card className="login-container">
        <Row>
          <Content className="login-header">
            <img src={logo} alt="XSeed Logo" className="logo-image" />          
            <Typography className="typography-title">{intl.formatMessage({ id: "label.inbox" })}</Typography>
          </Content>
          <Divider />
          <Row className="success-msg-content">
            <Col span={24}>
              <Typography className="typography-title-3 login-header">
                Password reset link has been sent to {email}
              </Typography>
              <Typography className="Typo-emailpass login-header">
                If you don't receive an email, please check your spam folder
              </Typography>
              <Layout className="login-forgotpass ant-Layout">
                <Typography className="Typo-label">
                  <Link to={"/forgot-password"}>{intl.formatMessage({ id: "link.return" })}</Link>
                </Typography>
              </Layout>
            </Col>
          </Row>
        </Row>
      </Card>
    </Layout>
  );
};

export default ForgotSuccessMsgView;
