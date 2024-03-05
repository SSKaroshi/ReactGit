import React, { useState } from 'react';
import { DatePicker, Row } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { formatDate } from '../../utils/date-utils';
import '../../themes/default/css/global.scss';

interface DateRangePickerProps {
  onDateRangeChange: (startDate: Dayjs | null, endDate: Dayjs | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [startError, setStartError] = useState<string | null>(null);
  const [endError, setEndError] = useState<string | null>(null);

  const handleStartDateChange = (date: Dayjs | null) => {
    setStartDate(date);
    setStartError(null);
    handleSubmit();
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    setEndDate(date);
    setEndError(null);
    handleSubmit();
  };

  const handleSubmit = () => {
    if (!startDate) {
      setStartError('Start Date is required');
    }
    if (!endDate) {
      setEndError('End Date is required');
    }

    if (startDate && endDate) {
      if (startDate.isAfter(endDate)) {
        setStartError('Start Date must be before End Date');
        setEndError('End Date must be after Start Date');
        return;
      }
      onDateRangeChange(startDate, endDate);
    }
  };

  const disabledStartDate = (current: Dayjs | undefined) => {
    return current && endDate ? current.isAfter(endDate) : false;
  };

  const disabledEndDate = (current: Dayjs | undefined) => {
    return current && startDate ? current.isBefore(startDate) : false;
  };

  return (
    <Row>
      <div style={{ display: 'flex' }}>
        <div className='start-date-range'>
          <label>Start Date:</label>
          <DatePicker
            className='w-100'
            value={startDate ? dayjs(startDate.toDate()) : null}
            onChange={handleStartDateChange}
            format={(value) => formatDate(value.toDate())} 
          />
          {startError && <p className='error-message'>{startError}</p>}
        </div>
        <div className='w-70'>
          <label>End Date:</label>
          <DatePicker
           className='w-100'
            value={endDate ? dayjs(endDate.toDate()) : null}
            onChange={handleEndDateChange}
            format={(value) => formatDate(value.toDate())} 
            disabledDate={disabledEndDate}
            
          />
          {endError && <p className='error-message'>{endError}</p>}
        </div>
      </div>
    </Row>
  );
};

export default DateRangePicker;