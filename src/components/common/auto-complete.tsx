
import React from "react"
import { AutoComplete, Col, Form, Input, Typography } from "antd";
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import '../../themes/default/css/global.scss';
import { SearchOutlined } from '@ant-design/icons';

interface SearchBarProps extends AutoCompleteProps { 
    label?:string;
    lg?:number;
}

const AutoplaceComplete: React.FC<SearchBarProps> = ({ lg,label,...AutoCompleteProps }) => {

    return (
        <>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={lg}>
        <Typography className='Typo-label'>{label}</Typography>
            <Form.Item>
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