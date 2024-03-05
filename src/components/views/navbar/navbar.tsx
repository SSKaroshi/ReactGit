
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
        <Menu className='navbar-menu' theme='dark' mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[activeKey]} onClick={handleMenuClick}>
        <img src={xseed} alt="Logo" className="navbar-logo" />
          {/* <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Jobs</Menu.Item>
          <Menu.Item key="3">Candidates</Menu.Item>
          <Menu.Item key="4">Source</Menu.Item>
          <Menu.Item key="5">Reports</Menu.Item> */}
          <Menu.Item key="1" className={activeKey === '1' ? 'active-menu-item' : undefined}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" className={activeKey === '2' ? 'active-menu-item' : undefined}>
            Jobs
          </Menu.Item>
          <Menu.Item key="3" style={activeKey === '3' ? { backgroundColor: 'yellow' } : undefined}>
            Candidates
          </Menu.Item>
          <Menu.Item key="4" style={activeKey === '4' ? { backgroundColor: 'yellow' } : undefined}>
            Source
          </Menu.Item>
          <Menu.Item key="5" style={activeKey === '5' ? { backgroundColor: 'yellow' } : undefined}>
            Reports
          </Menu.Item>
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


