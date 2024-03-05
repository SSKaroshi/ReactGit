import React from 'react';
import { Layout } from 'antd';

interface FooterProps {
 
}
const FooterBar: React.FC<FooterProps> = () => {
  return (
    <Layout.Footer style={{background:'aqua',padding:0}}>
       <h1>Footer</h1>
    </Layout.Footer>
  );
};

export default FooterBar;
