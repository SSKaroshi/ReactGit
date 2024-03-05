import React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  options: RadioButtonOption[];
  value?: string;
  onChange: (value: string) => void;
}

const CommonRadioButton: React.FC<RadioButtonProps> = ({ options, value, onChange }) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <Radio.Group onChange={handleChange} value={value}>
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default CommonRadioButton;
