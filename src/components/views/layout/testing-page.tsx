import React from 'react';
import CommonLayout from './layout';
import NavigationBar from '../navbar/navbar';
import ActionBar from './header';
import JobListDashboard from '../job/job-details';



const MyPage: React.FC = () => (
  <CommonLayout
    headerComponents={[<NavigationBar key="navbar" />, <ActionBar key="actionbar" />,]}
    contentComponents={[<JobListDashboard key='job-create'/>]}
    footerComponent={[]}
  />
);

export default MyPage;
