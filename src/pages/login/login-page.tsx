// LoginContainer.tsx - Business Logic Component
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'antd';
import { useIntl } from 'react-intl';
import LoginView from '../../components/views/login/login-view';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setLoading } from "../../store/slices/authSlice";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
 const [form] = Form.useForm();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const passwordChanged = searchParams.get("passwordChanged") === "true";
 // const useintl = useIntl();
  const [showSuccessMessage, setShowSuccessMessage] = useState(passwordChanged);

  const [errorMessage, setErrorMessage] = useState(""); // State for error message


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

      await form.validateFields();  // extra

      const response = await axios.post(
        "http://localhost:9898/auth/login",
        formData
      );
      const accessToken = response.data;
      dispatch(setAccessToken(accessToken));
      console.log("Access Token:", accessToken);
    } catch (error:any)
    
    // {
    //   if (error.response && error.response.status === 403) {
    //     console.log("User not found or incorrect password");
    //   } else {
    //     console.error("Error:", error);
    //   }
    // } 
    {
      if (error.response && error.response.status === 403) {
        setErrorMessage("User not found or incorrect password"); // Update error message
      } else {
        console.error("Error:", error);
      }
    }
    
    finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <LoginView
      showSuccessMessage={showSuccessMessage}
      loading={loading}
      errorMessage={errorMessage} 
      formData={formData}
      passwordChanged={passwordChanged}
      handleChange={handleChange}
      handleLogin={handleLogin}
      handleForgotPasswordClick={handleForgotPasswordClick}
      onFinish={onFinish}
    />
  );
};

export default LoginPage;



/*
import React from 'react'

const loginPage = () => {
  return (
    <div>login-page</div>
  )
}

export default loginPage

*/