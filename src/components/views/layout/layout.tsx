
import React from 'react';
import { Layout } from 'antd';
import '../../../themes/default/css/layout.scss';

const { Header, Content, Footer } = Layout;

interface CommonLayoutProps {
  headerComponents: React.ReactNode[];
  contentComponents: React.ReactNode[];
  footerComponent: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ headerComponents, contentComponents, footerComponent }) => (
  <Layout className='layout'>
    <Header className='layout-header'>
      {headerComponents.map((component, index) => (
        <React.Fragment key={index}>
          {component}
        </React.Fragment>
      ))}
    </Header>
    <Content style={{ textAlign: 'center', background: '#fff' }}>
      {contentComponents.map((component, index) => (
        <React.Fragment key={index}>
          {component}
        </React.Fragment>
      ))}
    </Content>
    <Footer>
      {footerComponent}
    </Footer>
  </Layout>
);

export default CommonLayout;

