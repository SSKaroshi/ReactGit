import React from 'react';
import CommonLayout from './layout';
import NavigationBar from '../navbar/navbar';
import ActionBar from './header';
import FooterBar from './footer';
import JobListDashboardBusinessLogic from '../../../pages/job/job-creation';


const MyPage: React.FC = () => (
  <CommonLayout
    headerComponents={[<NavigationBar key="navbar" />, <ActionBar key="actionbar" />,]}
    contentComponents={[<JobListDashboardBusinessLogic key='job-create'/>]}
    footerComponent={[]}
  />
);

export default MyPage;
