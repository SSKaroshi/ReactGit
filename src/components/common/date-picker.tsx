
import React from 'react';
import { Col, DatePicker, Form, Typography } from 'antd';
import '../../themes/default/css/global.scss';
import dayjs from 'dayjs';
import { Dayjs } from 'dayjs'; 

interface DynamicDatePickerProps {
  placeholder?: string;
  [key: string]: any;
  md:number;
  sm:number;
  xs:number;
  label?:string;
}

interface CommonDatePickerProps extends DynamicDatePickerProps {
  className?: string;
  lg: number;
  label?: string;
  onChange: (date: Dayjs | null, dateString: string) => void;
  value?: Dayjs | null; 
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({ lg, label, className = "input-type", onChange, value,sm,md,xs, ...datePickerProps }) => {
  const handleDatePickerChange = (date: Dayjs | null, dateString: string) => {
    onChange(date, dateString);
  };

  return (
    <Col className="gutter-row" xs={xs} sm={sm} md={md} lg={lg}>
      <Typography className='Typo-label'>{label}</Typography>
      <Form.Item>
        <DatePicker
          className='common-datepicker'
          value={value ? dayjs(value) : null} 
          onChange={handleDatePickerChange}
          {...datePickerProps}
        />
      </Form.Item>
    </Col>
  );
};

export default CommonDatePicker;
