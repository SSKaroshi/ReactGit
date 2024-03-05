
import React from 'react';
import { Col, DatePicker, Form, Typography } from 'antd';
import '../../themes/default/css/global.scss';

interface DynamicDatePickerProps {
  placeholder?: string;
  [key: string]: any;
}

interface CommonDatePickerProps extends DynamicDatePickerProps {
  className?: string;
  lg:number;
  label?:string;
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({ lg,label,className = "input-type", ...datePickerProps }) => {
  return (

    <Col className="gutter-row" xs={24} sm={12} md={8} lg={lg}>
      <Typography className='Typo-label'>{label}</Typography>
      <Form.Item>
        <DatePicker
          className='common-datepicker'
          {...datePickerProps}
        />
      </Form.Item>
    </Col>

  );
};

export default CommonDatePicker;

