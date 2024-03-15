import React from 'react';

import {  Layout} from 'antd';
import '../../../themes/default/css/job.scss';
import '../../../themes/default/css/global.scss';
import CreateJobSidebar from './create-job-sidebar';
import { useAppSelector } from '../../../hooks/useTypeSelector';
import { RootState } from '../../../store/store';
import JobListView from './create-job';

const {Sider, Content } = Layout;

const JobListDashboard: React.FC = () => {

    const activeComponent = useAppSelector((state: RootState) => state.createJob.activeComponent);

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'JobDetails':
                return <JobListView />;
            case 'HiringWorkflow':
                // return <HiringWorkflow />
                return <div>Attract Candidate</div>;
            case 'AttractCandidates':
                return <div>Attract Candidate</div>;
            default:
                return null;
        }
    };    

    return (
        <>
            <Layout className='job-list-layout' >
                <Layout>
                    <Sider width="21%" className='job-list-sider'>
                        <CreateJobSidebar />
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





