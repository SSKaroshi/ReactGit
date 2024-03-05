import React, { useState } from "react"
import JobListDashboard from "../../components/views/job/job-details";
import JobListView from "../../components/views/job/create-job";


const JobListDashboardBusinessLogic: React.FC = () => {

    const [activeComponent, setActiveComponent] = useState('JobDetails');

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'JobDetails':
                return <JobListView />;
            case 'HiringWorkflow':
                return <div>Hiring Workflow Component</div>;
            case 'AttractCandidates':
                return <div>Attract Candidate</div>;
            default:
                return null; 
        }
    };

    return (

        <JobListDashboard
            renderActiveComponent={renderActiveComponent}
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
        />
    );
}

export default JobListDashboardBusinessLogic