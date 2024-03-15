import React from 'react';
import { Col, Form, Input, Typography } from 'antd';
import { SearchProps } from 'antd/lib/input';
import { SearchOutlined } from '@ant-design/icons';
import '../../themes/default/css/global.scss'


interface InputSearchProps extends SearchProps {
  label?: string;
  name?: string;
  rules?: any[];
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

const InputSearch: React.FC<InputSearchProps> = ({ lg,sm,md,xs, label, name, rules,...SearchProps }) => {
  return (

    <Col className="gutter-row" xs={xs} sm={sm} md={md} lg={lg}>
      <Typography className='Typo-label'>{label}</Typography>
      <Form.Item name={name} rules={rules}>
        <Input
          suffix={<SearchOutlined className='search-icon' />}
          {...SearchProps}
        />
      </Form.Item>
    </Col>


  );
};

export default InputSearch;