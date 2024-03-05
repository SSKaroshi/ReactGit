import React from "react";
import AutoplaceComplete from "../../common/auto-complete";
import '../../../themes/default/css/global.scss';
import { Form, Row, Typography } from "antd";
import CommonDropdown from "../../common/drodown";
import CommonInput from "../../common/input";
import CommonDatePicker from "../../common/date-picker";
import CommonTextArea from "../../common/text-area";


const JobListView: React.FC = () => {

    const onChange = () => {
        console.log("on change");

    }

    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
    ];
    return (
        <>

            <Typography className='Typo-header'>Job Details</Typography>

            <Form name="myResponsiveForm">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                    <AutoplaceComplete lg={12} label="Job Title" placeholder={'Search'} />

                    <CommonDropdown options={dropdownOptions} onChange={onChange} lg={6} label="Job Type" />

                    <CommonInput lg={6} placeholder={"Job Code"} label="Job Code" type="text"></CommonInput>

                    <CommonInput lg={12} placeholder={"Company name"} label="Company Name" type="text"></CommonInput>

                    <CommonDropdown options={dropdownOptions} onChange={onChange} lg={12} label="MSP/VMS" />

                    <CommonInput lg={12} placeholder={"Client Name"} label="Client Name" type="text"></CommonInput>

                    <CommonInput lg={6} placeholder={"No Of Openings"} label="No Of Openings" type="text"></CommonInput>

                    <CommonInput lg={6} placeholder={"Max Submissions"} label="Max Submissions" type="text"></CommonInput>

                    <CommonInput lg={4} placeholder={"Client Bill Rate"} label="Client Bill Rate" type="text"></CommonInput>

                    <CommonDropdown placeholder={'USD'} options={dropdownOptions} onChange={onChange} lg={4} />

                    <CommonDropdown placeholder={'Hourly'} options={dropdownOptions} onChange={onChange} lg={4} />

                    <CommonInput lg={4} placeholder={"Minimum Pay Rate"} label="Minimum Pay Rate" type="text"></CommonInput>

                    <CommonDropdown placeholder={'USD'} options={dropdownOptions} onChange={onChange} lg={4} />

                    <CommonDropdown placeholder={'Hourly'} options={dropdownOptions} onChange={onChange} lg={4} />

                    <CommonDatePicker lg={6} label="Requirement Open Date" />

                    <CommonDatePicker lg={6} label="Requirement Close Date" />

                    <CommonDatePicker lg={6} label="Contract Start Date" />

                    <CommonDatePicker lg={6} label="Contract End Date" />

                    <CommonInput lg={12} placeholder={"Duration"} label="Duration" type="text"></CommonInput>

                    <CommonDropdown placeholder={'Open'} options={dropdownOptions} onChange={onChange} lg={12} label="Status" />

                    <AutoplaceComplete lg={12} label={"Country"} placeholder={'Search'}   ></AutoplaceComplete>

                    <CommonDropdown placeholder={'State'} options={dropdownOptions} onChange={onChange} lg={6} label="State" />

                    <CommonDropdown placeholder={'City'} options={dropdownOptions} onChange={onChange} lg={6} label="City" />

                    <CommonTextArea label="Job description & Skills" onChange={onChange} lg={24} />

                    <CommonDropdown placeholder={'Skills'} options={dropdownOptions} onChange={onChange} lg={12} label="Skills" />

                </Row>

            </Form>




        </>
    );
}

export default JobListView;