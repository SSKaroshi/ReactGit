import React from 'react';
import CommonSidebarButton from '../../common/sidebar-common-button';
import '../../../themes/default/css/job.scss';
import '../../../themes/default/css/global.scss';

interface JobListSidebarProps {
  activeComponent: string;
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const CreateJobSidebar: React.FC<JobListSidebarProps> = ({ activeComponent, setActiveComponent }) => {
  return (
    <div className='job-list-sider'>

      <CommonSidebarButton lg={24}
        className={`job-list-box ${activeComponent === 'JobDetails' ? 'active' : ''}`}
        onClick={() => setActiveComponent('JobDetails')}
        label='Job Details' subLabel='Update your job details'
      />

      <CommonSidebarButton lg={24}
        className={`job-list-box ${activeComponent === 'HiringWorkflow' ? 'active' : ''}`}
        onClick={() => setActiveComponent('HiringWorkflow')}
        label='Hiring workflow' subLabel='Choose your preferred workflow with this job'
      />

      <CommonSidebarButton lg={24}
        className={`job-list-box ${activeComponent === 'AttractCandidates' ? 'active' : ''}`}
        onClick={() => setActiveComponent('AttractCandidates')}
        label='Attract candidates' subLabel='Share job and attract applicants'
      />
    </div>
  );
};

export default CreateJobSidebar;
