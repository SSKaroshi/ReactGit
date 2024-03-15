
import React, { useState } from 'react';
import { Flex, Layout } from 'antd';
import xseed from '../../../assets/xseed.svg';
import '../../../themes/default/css/navbar.scss';
import { Avatar, Space, Dropdown, Menu } from 'antd'; 
import { UserOutlined, BellOutlined } from '@ant-design/icons'; 

const NavigationBar: React.FC = () => {
  const iconOptions = [ 
    { label: 'Profile', value: 'Profile' },
    { label: 'Logout', value: 'Logout' },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [activeKey, setActiveKey] = useState<string>('1');
  const handleDropdownVisibleChange = (visible: boolean) => {
    setShowDropdown(visible);
  };

  const handleMenuClick = (item: any) => {
    if (item.key === 'Logout') {
      
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      {iconOptions.map(option => (
        <Menu.Item key={option.value}>{option.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Layout style={{background:'#001529'}}>
      <Space className='navbar-container'>
        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} onClick={handleMenuClick}>
        <img src={xseed} alt="Logo" className="navbar-logo" />
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Jobs</Menu.Item>
          <Menu.Item key="3">Candidates</Menu.Item>
          <Menu.Item key="4">Source</Menu.Item>
          <Menu.Item key="5">Reports</Menu.Item>
        </Menu>
        <Space className='navbar-icon'>
          <Avatar icon={<BellOutlined />} />
          <Dropdown
            overlay={menu}
            onOpenChange={handleDropdownVisibleChange}
            open={showDropdown}
            trigger={['click']}
          >
            <Avatar icon={<UserOutlined className='user-profile-icon'/>} />
          </Dropdown>
        </Space>
      </Space>
    </Layout>
  );
};

export default NavigationBar;


