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
  lg: number;
  md:number;
  sm:number;
  xs:number;
}

const CommonInput: React.FC<InputFieldProps> = ({ lg,md,sm,xs, label, name, rules, type, placeholder, ...inputProps }) => {
  return (
    <Col className="gutter-row" xs={xs} sm={sm} md={md} lg={lg}>
      <Typography className='Typo-label'>{label}</Typography>
      <Form.Item name={name} rules={rules}>
        <Input id={label} type={type} placeholder={placeholder} {...inputProps} />
      </Form.Item>
    </Col>
  );
};

export default CommonInput;