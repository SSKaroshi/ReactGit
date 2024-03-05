
import React, { useState } from 'react';
import { InputNumber } from 'antd';
import '../../themes/default/css/global.scss';

interface SalaryRangePickerProps {
  onSalaryRangeChange: (minSalary: number | null, maxSalary: number | null) => void;
  allowMinDecimal?: boolean;
  allowMaxDecimal?: boolean;
}

const NumberRangePicker: React.FC<SalaryRangePickerProps> = ({ onSalaryRangeChange, allowMinDecimal = true, allowMaxDecimal = true }) => {
  const [minSalary, setMinSalary] = useState<number | null>(null);
  const [maxSalary, setMaxSalary] = useState<number | null>(null);
  const [minError, setMinError] = useState<string | null>(null);
  const [maxError, setMaxError] = useState<string | null>(null);

  const handleMinSalaryChange = (value: number | null) => {
    setMinSalary(value);
    setMinError(null);
    handleSubmit();
    if (!allowMinDecimal && value !== null && value % 1 !== 0) {
      setMinError('Min Salary must be an integer value');
    }
  };

  const handleMaxSalaryChange = (value: number | null) => {
    setMaxSalary(value);
    setMaxError(null);
    handleSubmit();
    if (!allowMaxDecimal && value !== null && value % 1 !== 0) {
      setMaxError('Max Salary must be an integer value');
    }
  };

  const handleSubmit = () => {
    if (!minSalary) {
      setMinError('Min Salary is required');
    }
    if (!maxSalary) {
      setMaxError('Max Salary is required');
    }

    if (minSalary && maxSalary) {
      if (minSalary >= maxSalary) {
        setMinError('Min Salary must be less than Max Salary');
        setMaxError('Max Salary must be greater than Min Salary');
        return;
      }
      onSalaryRangeChange(minSalary, maxSalary);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div >
        <label>Min Salary:</label>
        <InputNumber
          className='w-100'
          value={minSalary}
          onChange={handleMinSalaryChange}
          step={allowMinDecimal ? 0.01 : 1}
        />
        {minError && <p error-message>{minError}</p>}
      </div>
      <div style={{ minWidth: '250px', position: 'relative' }}>
        <label>Max Salary:</label>
        <InputNumber
          className='w-100'
          value={maxSalary}
          onChange={handleMaxSalaryChange}
          step={allowMaxDecimal ? 0.01 : 1}
        />
        {maxError && <p className='error-message'>{maxError}</p>}
      </div>
    </div>
  );
};

export default NumberRangePicker;

