import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { Avatar, Tooltip } from 'antd';
import { DownOutlined,ShareAltOutlined,UserOutlined,AntDesignOutlined } from '@ant-design/icons';
import '../../../themes/default/css/layout.scss';
import '../../../themes/default/css/global.scss';

 const { Header } = Layout;

const ActionBar: React.FC = () => {
  const [step, setStep] = useState(1);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName:any) => {
    setActiveButton(buttonName);
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleDiscard = () => {
    setStep(1);
  };

  const renderActionBar = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className='create-job-actionbar'>
              <h1>Job</h1>
              <h3 className='job-count'>0</h3>
            </div>
            <Button type="primary" onClick={handleNext}>Add Job</Button>
          </>
        );
      case 2:
        return (
          <>
              <h1>New Job</h1>
            <div className='create-job-actionbar'>
            <Button type='default' className='mr-10'>Discard</Button>
            <Button type="primary" onClick={handleNext}>Create & Next</Button>
            </div>
          </>
        );
      case 3:
        return (
          <>
              <h1>Java Developer</h1>   
            <Button type="primary" onClick={handleNext}>Go to Job</Button> 
          </>
        );
      case 4:
        return (
          <>
          <div className='create-job-actionbar'>
            <h1>Java Developer</h1>
            <h3 className='btn-actionbar'>ID:2131</h3>
            <h3 className='btn-actionbar'><DownOutlined /></h3>
          </div>
          <div className='create-job-actionbar'>
          <Button
            type="default"
            className={`work-flow-btn ${activeButton === 'workflow' ? 'active' : ''}`}
            onClick={() => handleButtonClick('workflow')}
          >
            Workflow
          </Button>
    
          <Button
            type="default"
            className={`job-detail-btn ${activeButton === 'jobDetail' ? 'active' : ''}`}
            onClick={() => handleButtonClick('jobDetail')}
          >
            Job Detail
          </Button>
          </div>
    
          <div className='create-job-actionbar'>
    
          <Avatar.Group
          maxCount={2}
          size="small"
          className='mr-10'
        >
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
          <Avatar>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar icon={<UserOutlined />} />
          </Tooltip>
          <Avatar icon={<AntDesignOutlined />} />
        </Avatar.Group>
    
          <Button type='default' className='mr-10'><ShareAltOutlined /></Button>
          <Button type="primary" onClick={handleDiscard}> Add Candidate <DownOutlined /></Button> 
          </div>
        </>
        );
      default:
        return null;
    }
  };

  return (
    <Header className='actionbar-header'>
      {renderActionBar()}
    </Header>

  );
};

export default ActionBar;

