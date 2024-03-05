
import React from 'react';
import { Col, Form, Input, Typography } from 'antd';
import { InputProps } from 'antd/lib/input';
import '../../themes/default/css/global.scss'

interface InputFieldProps extends InputProps {
  label?: string;
  name?: string;
  rules?: any[];
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder: string;
  lg: number ;
  // lg?: number ;
}

const CommonInput: React.FC<InputFieldProps> = ({ lg, label, name, rules, type, placeholder, ...inputProps }) => {
  // console.log(lg);
  // lg=24;
  // md=24;
  // sm=12;
  // xs=24;
  return (

    <Col className="gutter-row" xs={24} sm={12} md={8} lg={lg}>
      <Typography className='Typo-label'>{label}</Typography>
      <Form.Item name={name} rules={rules}>
        <Input id={label} type={type} placeholder={placeholder} {...inputProps} />
      </Form.Item>
    </Col>
  );
};

export default CommonInput;

