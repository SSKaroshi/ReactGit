// import React from 'react';
// import { Select } from 'antd';
// import { SelectValue } from 'antd/lib/select';
// import '../../themes/default/css/global.scss';

// const { Option } = Select;

// enum OptionEnum {
//   Option1 = 'option1',
//   Option2 = 'option2',
//   Option3 = 'option3',
// }
// interface DropdownProps {
//   options: { label: string; value: string }[];
//   value?: (string | OptionEnum)[]; 
//   onChange: (value: (string | OptionEnum)[]) => void; 
//   mode?: 'multiple' | 'tags' | undefined;
// }
// const CommonDropdown: React.FC<DropdownProps> = ({ options, value, onChange, mode }) => {
//   const handleChange = (selectedValue: SelectValue) => {
//     if (selectedValue === undefined) return;

//     const selectedValues = Array.isArray(selectedValue) ?
//       selectedValue.map(option => option.toString()) :
//       [selectedValue.toString()];

//     onChange(selectedValues as (string | OptionEnum)[]); 
//   };
//   return (
//     <Select
//       className='w-25'
//       mode={mode}
//       placeholder="Select"
//       value={value}
//       onChange={handleChange}
//     >
//       {options.map(option => (
//         <Option key={option.value} value={option.value}>
//           {option.label}
//         </Option>
//       ))}
//     </Select>
//   );
// };

// export default CommonDropdown;

import React from 'react';
import { Col, Form, Select, Typography } from 'antd';
import { SelectValue } from 'antd/lib/select';
 import '../../themes/default/css/global.scss';


const { Option } = Select;

enum OptionEnum {
  Option1 = 'option1',
  Option2 = 'option2',
  Option3 = 'option3',
}

interface DropdownProps {
  options: { label: string; value: string }[];
  value?: (string | OptionEnum)[];
  onChange: (value: (string | OptionEnum)[]) => void;
  mode?: 'multiple' | 'tags' | undefined;
  placeholder?: string;
  lg:number;
  label?:string;
  name?: string;
  rules?: any[];
  md:number;
  sm:number;
  xs:number;
}
  

const CommonDropdown: React.FC<DropdownProps> = ({ options, value, onChange, mode, placeholder,lg,md,sm,xs,label,name,rules }) => {
  const handleChange = (selectedValue: SelectValue) => {
    if (selectedValue === undefined) return;

    const selectedValues = Array.isArray(selectedValue) ?
      selectedValue.map(option => option.toString()) :
      [selectedValue.toString()];

    onChange(selectedValues as (string | OptionEnum)[]);
  };

  return (

    <Col className="gutter-row" xs={xs} sm={sm} md={md} lg={lg}>
      <Typography className='Typo-label'>{label}</Typography>
      <Form.Item name={name} rules={rules}>
        <Select
          id={label}
          className='common-dropdown'
          mode={mode}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        >
          {options.map(option => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Col>


  );
};

export default CommonDropdown;