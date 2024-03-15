import React from 'react';
import { Button, Col } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import '../../themes/default/css/global.scss';

interface CustomButtonProps extends ButtonProps {
  label?: string;
  isSubmit?: boolean;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined ;
  onClick?: () => void;
  className?: string;
  lg:number;
  md:number;
  sm:number;
  xs:number;
}

const CommonButton: React.FC<CustomButtonProps> = ({ label, isSubmit, type, onClick,className,lg,sm,md,xs, ...ButtonProps }) => {
  const buttonType = isSubmit ? 'submit' : 'button';

  return (
    <Col className="gutter-row" xs={xs} sm={sm} md={md} lg={lg}>
      <Button id={label}  type={type} htmlType={buttonType} onClick={onClick} className={`button ${className}`} {...ButtonProps}>
        {label}
      </Button>
    </Col>
      
  );
};

export default CommonButton;
