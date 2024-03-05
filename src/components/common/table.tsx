import React from 'react';
import { Table, TableProps } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface CommonTableProps extends TableProps<any> {
  columns: ColumnsType<any>;
  data: any[];
}

const CommonTable: React.FC<CommonTableProps> = ({ columns, data, ...rest }) => {
  return <Table columns={columns} dataSource={data} bordered {...rest} />;
};

export default CommonTable;
