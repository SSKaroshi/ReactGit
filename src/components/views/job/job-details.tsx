import React from 'react';

import {  Layout, Typography } from 'antd';
import '../../../themes/default/css/job.scss';
import '../../../themes/default/css/global.scss';
import CreateJobSidebar from './create-job-sidebar';

interface JobListDashboardProps{
    renderActiveComponent: () => React.ReactNode;
    activeComponent: string;
    setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const { Header, Sider, Content } = Layout;

const JobListDashboard: React.FC<JobListDashboardProps> = ({renderActiveComponent,activeComponent,setActiveComponent}) => {

    

    return (
        <>
            <Layout className='job-list-layout' >
                <Layout>
                    <Sider width="21%" className='job-list-sider'>
                        <CreateJobSidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                    </Sider>
                    <Content className='job-list-content'>
                        {renderActiveComponent()}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}


export default JobListDashboard;





