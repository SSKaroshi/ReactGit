
import React from "react"
import { AutoComplete, Col, Form, Input, Typography } from "antd";
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import '../../themes/default/css/global.scss';
import { SearchOutlined } from '@ant-design/icons';

interface SearchBarProps extends AutoCompleteProps { 
    label?:string;
    lg?:number;
    md:number;
    sm:number;
    xs:number;
    name:string;    
    rules?: any[]; 
}

const AutoplaceComplete: React.FC<SearchBarProps> = ({ lg,sm,md,xs,label,name,rules,...AutoCompleteProps }) => {

    return (
        <>
        <Col className="gutter-row" xs={xs} sm={sm} md={md} lg={lg}>
        <Typography className='Typo-label'>{label}</Typography>
            <Form.Item name={name} rules={rules}>
                <AutoComplete
                id={label}
                    notFoundContent="No match found"
                    {...AutoCompleteProps}
                >
                    <Input
                        className="auto-complete"
                        suffix={<SearchOutlined className="search-icon" />}
                    />

                </AutoComplete>
            </Form.Item>
            </Col>

        </>
    );
}


export default AutoplaceComplete;