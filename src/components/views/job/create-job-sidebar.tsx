import React from 'react';
import CommonSidebarButton from '../../common/sidebar-common-button';
import '../../../themes/default/css/job.scss';
import '../../../themes/default/css/global.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypeSelector';
import { RootState } from '../../../store/store';
import { setActiveComponent } from '../../../store/slices/job/job-creation';

const CreateJobSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeComponent = useAppSelector((state: RootState) => state.createJob.activeComponent);
  return (
    <div className='job-list-sider'>
      <CommonSidebarButton md={8} sm={12} xs={24} lg={24}
        className={`job-list-box ${activeComponent === 'JobDetails' ? 'active' : ''}`}
        onClick={() => dispatch(setActiveComponent('JobDetails'))}
        label='Job Details' subLabel='Update your job details'  />

      <CommonSidebarButton  lg={24} md={8} sm={12} xs={24}
        className={`job-list-box ${activeComponent === 'HiringWorkflow' ? 'active' : ''}`}
        onClick={() => dispatch(setActiveComponent('HiringWorkflow'))}
        label='Hiring workflow' subLabel='Choose your preferred workflow with this job'  />

      <CommonSidebarButton lg={24} md={8} sm={12} xs={24}
        className={`job-list-box ${activeComponent === 'AttractCandidates' ? 'active' : ''}`}
        onClick={() => dispatch(setActiveComponent('AttractCandidates'))}
        label='Attract candidates' subLabel='Share job and attract applicants'  />
    </div>
  );
};

export default CreateJobSidebar;
