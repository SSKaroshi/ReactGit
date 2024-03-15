import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import '../../themes/default/css/job.scss';
import '../../themes/default/css/global.scss';

interface SidebarButtonProps extends ButtonProps {
    label?: string;
    subLabel?:string;
    isSubmit?: boolean;
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    onClick?: () => void;
    className?: string;
    lg: number;
    md:number;
    sm:number;
    xs:number;
}



const CommonSidebarButton: React.FC<SidebarButtonProps> = ({ label,subLabel, isSubmit, type, onClick, className, lg,sm,md,xs, ...ButtonProps }) => {

    return (
        <Col className="gutter-row" xs={xs} sm={sm} md={md} lg={lg}>
            <Button id={label} type={type}  onClick={onClick} className={`${className}`} {...ButtonProps}>
                <Row>
                    <Col>
                        <Typography className='side-bar-typo-header'> {label}</Typography>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Typography className='side-bar-typo-label'>{subLabel}</Typography>
                    </Col>
                </Row>
            </Button>
        </Col>
    );
}

export default CommonSidebarButton;