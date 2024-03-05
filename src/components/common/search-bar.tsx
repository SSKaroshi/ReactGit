import React from 'react';
import { Input} from 'antd';
import {SearchProps} from 'antd/lib/input';
import { SearchOutlined } from '@ant-design/icons';


interface InputSearchProps extends SearchProps{
}

const InputSearch: React.FC<InputSearchProps> = ({  ...SearchProps}) => {
  return (
    <Input
      suffix={<SearchOutlined className='search-icon' />}
      {...SearchProps}
    />
  );
};

export default InputSearch;