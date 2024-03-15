import React, { useEffect, useState } from 'react';
import '../../../themes/default/css/global.scss';
import { Button, Form, Row, Typography } from "antd";
import CommonDropdown from "../../common/drodown";
import CommonInput from "../../common/input";
import CommonDatePicker from "../../common/date-picker";
import CommonTextArea from "../../common/text-area";
import { fetchJobTypes } from '../../../store/slices/job/job-creation';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypeSelector';
import { fetchJobStatus } from '../../../store/slices/job/job-creation';
import { fetchCurrency } from '../../../store/slices/job/job-creation';
import { fetchSkills } from '../../../store/slices/job/job-creation';
import { fetchCountry } from '../../../store/slices/common/common';
import { fetchCompanyDropdown } from '../../../store/slices/job/job-creation';
import { fetchState } from '../../../store/slices/common/common';
import { fetchCity } from '../../../store/slices/common/common';
import { fetchMspVms } from '../../../store/slices/job/job-creation';
import { fetchClients } from '../../../store/slices/job/job-creation';
import { fetchJobPayRate } from '../../../store/slices/job/job-creation';
import { createJob } from '../../../store/slices/job/job-creation';
import dayjs, { Dayjs } from 'dayjs';
import { fetchJobTitles } from '../../../store/slices/job/job-creation';
import { REGEX_ALPHANUMRIC, REGEX_NUMBER } from '../../../utils/validation-pattern-utils';
import { useIntl } from "react-intl";
import { Modal } from 'antd';


const JobListView: React.FC = () => {
    const useintl = useIntl();

    const [selectedCountryId, setSelectedCountryId] = useState<number | null>(null);
    const [selectedStateId, setSelectedStateId] = useState<number | null>(null);
    const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
    const [jobCode, setJobCode] = useState('');
    const [companyId, setCompanyId] = useState<number | null>(null);
    const [jobTitleId, setJobTitleId] = useState<number | null>(null);
    const [vmsMasterId, setVmsMasterId] = useState<number | null>(null);  
    const [clientMasterId, setClientMasterId] = useState<number | null>(null);
    const [numberOfOpenings, setNumberOfOpenings] = useState('');
    const [maxSubmission, setMaxSubmission] = useState('');
    const [billRate, setBillRate] = useState('');
    const [currencyId, setCurrencyId] = useState<number | null>(null);
    const [minimumPayRate, setMinimumPayRate] = useState('');
    const [requirementOpenDate, setRequirementOpenDate] = useState<Dayjs | null>(null); 
    const [requirementCloseDate, setRequirementCloseDate] = useState<Dayjs | null>(null); 
    const [contractStartDate, setContractStartDate] = useState<Dayjs | null>(null); 
    const [contractEndDate, setContractEndDate] = useState<Dayjs | null>(null); 
    const [jobStatusId, setJobStatusId] = useState<number | null>(null);
    // const [skillIds, setSkillIds] = useState<number | null>(null);
    const [skillIds, setSkillIds] = useState<number[]>([]);
    const [cityId, setCityId] = useState<number | null>(null);
    const [stateId, setStateId] = useState<number | null>(null);
    const [countryId, setCountryId] = useState<number | null>(null);
    const [jobTypeId, setJobTypeId] = useState<number | null>(null);
    const [jobPayRateId, setJobPayRateId] = useState<number | null>(null);
    const [jobDescription, setJobDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useAppDispatch();
   
    const jobTypeData = useAppSelector(state =>
        state.createJob.jobtype?.map(jobType => ({
          label: jobType.jobTypeName ?? '',
          value: (jobType.jobtypeId ?? '').toString()
        }))
      );
      
    const jobTitleData = useAppSelector(state =>
        state.createJob.jobtitle?.map(jobTitle => ({
          label: jobTitle.jobTitle ?? '',
          value: (jobTitle.jobTitleId ?? '').toString()
        }))
      );

    const jobStatusData = useAppSelector(state =>
        state.createJob.jobstatus?.map(jobStatus => ({
          label: jobStatus.status ?? '',
          value: (jobStatus.statusId ?? '').toString()
        }))
      );

    const countryData = useAppSelector(state =>
        state.common.country?.map(country => ({
          label: country.countryName ?? '',
          value: (country.countryId ?? '').toString()
        }))
      );
    const stateData = useAppSelector(state =>
        state.common.state?.map(state => ({
          label: state.stateName ?? '',
          value: (state.stateId ?? '').toString()
        }))
      );

    const cityData = useAppSelector(state =>
        state.common.city?.map(city => ({
          label: city.cityName ?? '',
          value: (city.cityId ?? '').toString()
        }))
      );

    const skillData = useAppSelector(state =>
        state.createJob.skill?.map(skill => ({
          label: skill.skills ?? '',
          value: (skill.skillId ?? '').toString()
        }))
      );

    const currencyData = useAppSelector(state =>
        state.createJob.currency?.map(currency => ({
          label: currency.currencyName ?? '',
          value: (currency.currencyId ?? '').toString()
        }))
      );

    const companiesData = useAppSelector(state =>
        state.createJob.companies?.map(company => ({
          label: company.companyName ?? '',
          value: (company.companyDetailsId ?? '').toString()
        }))
      );

    const mspvmsData = useAppSelector(state =>
        state.createJob.mspvms?.map(company => ({
          label: company.vmsName ?? '',
          value: (company.vmsId ?? '').toString()
        }))
      );

    const clientData = useAppSelector(state =>
        state.createJob.client?.map(client => ({
          label: client.clientName ?? '',
          value: (client.clientId ?? '').toString()
        }))
      );

    const payrateData = useAppSelector(state =>
        state.createJob.jobpayrate?.map(client => ({
          label: client.jobPayRateName ?? '',
          value: (client.jobpayrateId ?? '').toString()
        }))
      );
      
      const handleCountryChange = (selectedCountryIds: string[]) => {
        const selectedCountryId = selectedCountryIds.length > 0 ? parseInt(selectedCountryIds[0]) : null;
        setSelectedCountryId(selectedCountryId);
        setCountryId(selectedCountryId);
        if (selectedCountryId !== null) {
          dispatch(fetchState({ countryId: selectedCountryId }));
        }
      };

    const handleStateChange = (selectedStateIds: string[]) => { 
        const selectedStateId = selectedStateIds.length > 0 ? parseInt(selectedStateIds[0]) : null; 
        setSelectedStateId(selectedStateId);
        setStateId(selectedStateId); 
        if (selectedStateId !== null) {
          dispatch(fetchCity({ stateId: selectedStateId }));
        }
      };

    const handleCompanyChange = (selectedCompanyIds: string[]) => { 
        const selectedCompanyId = selectedCompanyIds.length > 0 ? parseInt(selectedCompanyIds[0]) : null; 
        setSelectedCompanyId(selectedCompanyId); 
        setCompanyId(selectedCompanyId);
        if (selectedCompanyId !== null) {
          dispatch(fetchMspVms({ companyDetailsId: selectedCompanyId }));
        }
      };
   

    const handleMspChange = (selectedClientIds: string[]) => { 
        const selectedClientId = selectedClientIds.length > 0 ? parseInt(selectedClientIds[0]) : null; 
        setSelectedCompanyId(selectedClientId);
        setVmsMasterId(selectedClientId); 
        if (selectedClientId !== null) {
          dispatch(fetchClients({ vmsId: selectedClientId }));
        }
      };
    const handleClientChange = (e:any) => {
        setClientMasterId(e);
    }
    const handleCurrencyChange = (e:any) => {
        setCurrencyId(e);
    }
    
    const handleStatusChange = (e:any) => {
        setJobStatusId(e);
    }
   
    const handleSkillChange = (selectedValues: string[]) => {
        const numbers = selectedValues.map(value => parseInt(value, 10));
        setSkillIds(numbers);
      };
    const handleCityChange = (e:any) => {
        setCityId(e);
    }
    const handleJobTypeChange = (e:any) => {
        setJobTypeId(e);
    }
    const handleJobTitleChange = (e:any) => {
        setJobTitleId(e);
        dispatch(fetchJobTypes()) 
    }
    const handlePayRateChange = (e:any) => {
        setJobPayRateId(e);
    }
    const handleDescriptionChange = (e:any) => {
        setJobDescription(e);
    }
    
    const handleRequirementOpenDateChange = (date: Dayjs | null, dateString: string) => {
        setRequirementOpenDate(date);
      };
    const handleRequirementCloseDateChange = (date: Dayjs | null, dateString: string) => {
        setRequirementCloseDate(date);
    };
    const handleContractStartDateChange = (date: Dayjs | null, dateString: string) => {
        setContractStartDate(date);
    };
    const handleContractEndDateChange = (date: Dayjs | null, dateString: string) => {
        setContractEndDate(date);
    };
    
    const onChange = () => {
        console.log();
    }
    const showModal = () => {
        setModalVisible(true);
      };
      
    
    const vmsMasterIdValue: number = vmsMasterId ?? 0
    const jobTitleIdValue: number = jobTitleId !== null ? Number(jobTitleId) : 0;
    const companyIdValue: number = companyId ?? 0
    const clientMasterIdValue: number = clientMasterId !== null ? Number(clientMasterId) : 0;
    const jobTypeIdValue: number = jobTypeId !== null ? Number(jobTypeId) : 0;
    const currencyIdValue: number = currencyId !== null ? Number(currencyId) : 0;
    const countryIdValue: number = countryId ?? 0
    const stateIdValue: number = stateId ?? 0
    const cityIdValue: number = cityId !== null ? Number(cityId) : 0;
    const jobPayRateIdValue: number = jobPayRateId !== null ? Number(jobPayRateId) : 0;
    const jobStatusIdValue: number = jobStatusId !== null ? Number(jobStatusId) : 0;
    const maxSubmissionvalue: number = maxSubmission !== null ? Number(maxSubmission) : 0;
    const numberOfOpeningsvalue: number = numberOfOpenings !== null ? Number(numberOfOpenings) : 0;
    const durationvalue: number = duration !== null ? Number(duration) : 0;
    const billRatevalue: number = billRate !== null ? Number(billRate) : 0;
    const minimumPayRatevalue: number = minimumPayRate !== null ? Number(minimumPayRate) : 0;
    const requirementOpenDateValue = requirementOpenDate ? requirementOpenDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ') : null;
    const requirementCloseDateValue = requirementCloseDate ? requirementCloseDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ') : null;
    const contractStartDateValue = contractStartDate ? contractStartDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ') : null;
    const contractEndDateValue = contractEndDate ? contractEndDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ') : null;

    const resetForm = () => {

        setJobCode('');
        setSelectedCountryId(null);
        setSelectedStateId(null);
        setSelectedCompanyId(null);
        setJobTitleId(null);
        setVmsMasterId(null);
        setClientMasterId(null);
        setNumberOfOpenings('');
        setMaxSubmission('');
        setBillRate('');
        setCurrencyId(null);
        setMinimumPayRate('');
        setRequirementOpenDate(null);
        setRequirementCloseDate(null);
        setContractStartDate(null);
        setContractEndDate(null);
        setJobStatusId(null);
        setSkillIds([]);
        setCityId(null);
        setStateId(null);
        setCountryId(null);
        setJobTypeId(null);
        setJobPayRateId(null);
        setJobDescription('');
        setDuration('');
    };
      const handleSubmit = async (values: any) => {
        const payload = {

            jobCode: jobCode,
            jobTitleId: jobTitleIdValue,
            vmsMasterId: vmsMasterIdValue,
            clientMasterId:clientMasterIdValue,
            companyId: companyIdValue,
            jobTypeId: jobTypeIdValue,
            countryId: countryIdValue,
            stateId: stateIdValue,
            cityId: cityIdValue,
            jobPayRateId: jobPayRateIdValue,
            numberOfOpenings: numberOfOpeningsvalue,
            maxSubmission: maxSubmissionvalue,
            billRate: billRatevalue,
            minimumPayRate: minimumPayRatevalue,
            requirementOpenDate: requirementOpenDateValue || '',
            requirementCloseDate: requirementCloseDateValue || '',
            contractStartDate: contractStartDateValue || '',
            contractEndDate: contractEndDateValue || '',
            duration: durationvalue,
            currencyId: currencyIdValue,
            jobStatusId: jobStatusIdValue,
            createdBy: "sameer",
            createdOn: "2024-03-01T09:58:08.046Z",
            modifiedBy: "sameer",
            modifiedOn: "2024-03-01T09:58:08.046Z",
            jobDescription: jobDescription,
            skillIds: skillIds
        };
        dispatch(createJob(payload));
        showModal();
        resetForm();
    };

    useEffect(() => {
        dispatch(fetchJobTitles());
        dispatch(fetchJobTypes()) 
        dispatch(fetchJobStatus());
        dispatch(fetchCurrency());
        dispatch(fetchSkills());
        dispatch(fetchCountry());
        dispatch(fetchCompanyDropdown());
        dispatch(fetchJobPayRate());
        

      }, [dispatch]);
    return (
        <>

            <Typography className='Typo-header'>Job Details</Typography>

            <Form name="myResponsiveForm" onFinish={handleSubmit} >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                    <CommonDropdown md={8} sm={12} xs={24} value={jobTitleId !== null ? [jobTitleId.toString()] : undefined} options={jobTitleData || []} placeholder='Select' onChange={handleJobTitleChange} lg={12} label="Job Title" name='Job Title'
                    rules={[
                        { required: true, message:  useintl.formatMessage({id:"validation.enterField"},{enterField:'Job Title'})  }
                    ]}
                    />
                    <CommonDropdown md={8} sm={12} xs={24} value={jobTypeId !== null ? [jobTypeId.toString()] : undefined} options={jobTypeData || []} placeholder='Select' onChange={handleJobTypeChange} lg={6} label="Job Type" name='Job Type' 
                    rules={[
                        { required: true, message:  useintl.formatMessage({id:"validation.enterField"},{enterField:'Job Type'})  }
                    ]}
                    />

                    {/* <CommonInput lg={6} placeholder="Job Code" value={jobCode} onChange={(e) => setJobCode(e.target.value)} label="Job Code" type="text"></CommonInput> */}

                    <CommonInput md={8} sm={12} xs={24} lg={6} placeholder="Job Code" value={jobCode} onChange={(e) => setJobCode(e.target.value)} label="Job Code" type="text" name='jobcode'
                        rules={[
                            { required: true, message: useintl.formatMessage({ id: "validation.enterField" }, { enterField: 'Job Code' }) },
                            {
                                pattern: REGEX_NUMBER,
                                message: useintl.formatMessage({ id: "validation.enterNumric" })
                            },
                        ]}

                    ></CommonInput>

                    <CommonDropdown md={8} sm={12} xs={24} placeholder='Select' value={companyId !== null ? [companyId.toString()] : undefined}  options={companiesData || []} onChange={handleCompanyChange} lg={12} label="Company Name" />
                    
                    <CommonDropdown md={8} sm={12} xs={24} value={vmsMasterId !== null ? [vmsMasterId.toString()] : undefined} options={mspvmsData || []} placeholder='Select' onChange={handleMspChange} lg={12} label="MSP/VMS" />

                    <CommonDropdown md={8} sm={12} xs={24} value={clientMasterId !== null ? [clientMasterId.toString()] : undefined}   options={clientData || []} onChange={handleClientChange} placeholder='Select' lg={12} label="Client Name" />

                    {/* <CommonInput lg={6} value={numberOfOpenings} onChange={(e) => setNumberOfOpenings(e.target.value)} placeholder={"No Of Openings"} label="No Of Openings" type="text"></CommonInput> */}
                    <CommonInput md={8} sm={12} xs={24} lg={6} value={numberOfOpenings} onChange={(e) => setNumberOfOpenings(e.target.value)} placeholder={"No Of Openings"} label="No Of Openings" type="text" name='noofopenings'
                        rules={[
                            { required: true, message: useintl.formatMessage({ id: "validation.enterField" }, { enterField: 'No Of Openings' }) },
                            {
                                pattern: REGEX_NUMBER,
                                message: useintl.formatMessage({ id: "validation.enterNumric" })
                            },
                        ]}
                    ></CommonInput>

                    {/* <CommonInput lg={6} value={maxSubmission} onChange={(e) => setMaxSubmission(e.target.value)} placeholder={"Max Submissions"} label="Max Submissions" type="text"></CommonInput> */}

                    <CommonInput md={8} sm={12} xs={24} lg={6} value={maxSubmission} onChange={(e) => setMaxSubmission(e.target.value)} placeholder={"Max Submissions"} label="Max Submissions" type="text" name='maxsubmissions'
                        rules={[
                            { required: true, message: useintl.formatMessage({ id: "validation.enterField" }, { enterField: 'Max submissions' }) },
                            {
                                pattern: REGEX_NUMBER,
                                message: useintl.formatMessage({ id: "validation.enterNumric" })
                            },
                        ]}

                    ></CommonInput>

                    {/* <CommonInput lg={4} value={billRate} onChange={(e) => setBillRate(e.target.value)} placeholder="Client Bill Rate" label="Client Bill Rate" type="text"></CommonInput> */}
                    <CommonInput md={8} sm={12} xs={24} lg={4} value={billRate} onChange={(e) => setBillRate(e.target.value)} placeholder="Client Bill Rate" label="Client Bill Rate" type="text" name='clientbillrate'
                        rules={[
                            { required: true, message: useintl.formatMessage({ id: "validation.enterField" }, { enterField: 'Client Bill Rate' }) },
                            {
                                pattern: REGEX_NUMBER,
                                message: useintl.formatMessage({ id: "validation.enterNumric" })
                            },
                        ]}
                    ></CommonInput>

                    <CommonDropdown md={8} sm={12} xs={24} value={currencyId !== null ? [currencyId.toString()] : undefined} placeholder="Select" options={currencyData || []} onChange={handleCurrencyChange} lg={4} />

                    <CommonDropdown md={8} sm={12} xs={24}  placeholder='Select' options={payrateData || []} onChange={onChange} lg={4} />

                    <CommonInput md={8} sm={12} xs={24} lg={4} value={minimumPayRate} onChange={(e) => setMinimumPayRate(e.target.value)} placeholder={"Minimum Pay Rate"} label="Minimum Pay Rate" type="text"></CommonInput>

                    <CommonDropdown md={8} sm={12} xs={24} value={currencyId !== null ? [currencyId.toString()] : undefined} placeholder='Select' options={currencyData || []} onChange={handleCurrencyChange} lg={4} />

                    <CommonDropdown md={8} sm={12} xs={24} value={jobPayRateId !== null ? [jobPayRateId.toString()] : undefined} placeholder='Select' options={payrateData || []} onChange={handlePayRateChange} lg={4} />

                    {/* <CommonDatePicker value={requirementOpenDate} onChange={(e:any) => setRequirementOpenDate(e.target.value)} lg={6} label="Requirement Open Date" /> */}

                    <CommonDatePicker value={requirementOpenDate} onChange={handleRequirementOpenDateChange} lg={6} label="Requirement Open Date" md={8} sm={12} xs={24} />
                    
                    <CommonDatePicker value={requirementCloseDate} onChange={handleRequirementCloseDateChange} lg={6} label="Requirement Close Date" md={8} sm={12} xs={24}/>

                    
                    <CommonDatePicker value={contractStartDate} onChange={handleContractStartDateChange} lg={6} label="Contract Start Date" md={8} sm={12} xs={24}/>

                    <CommonDatePicker value={contractEndDate} onChange={handleContractEndDateChange} lg={6} label="Contract End Date" md={8} sm={12} xs={24}/>

                    {/* <CommonInput value={duration} lg={12} placeholder="Duration" onChange={(e) => setDuration(e.target.value)} label="Duration" type="text"></CommonInput> */}
                    <CommonInput md={8} sm={12} xs={24} value={duration} lg={12} placeholder="Duration" onChange={(e) => setDuration(e.target.value)} label="Duration" type="text" name='duration'
                        rules={[
                            { required: true, message: useintl.formatMessage({ id: "validation.enterField" }, { enterField: 'Duration' }) },
                            {
                                pattern: REGEX_ALPHANUMRIC,
                                message: useintl.formatMessage({ id: "validation.alphanumric" }, { alphanumric: 'Duration' })
                            },
                        ]}

                    ></CommonInput>

                    <CommonDropdown md={8} sm={12} xs={24} value={jobStatusId !== null ? [jobStatusId.toString()] : undefined} options={jobStatusData || []} placeholder='Select' onChange={handleStatusChange} lg={12} label="Status" />

                    
                    <CommonDropdown md={8} sm={12} xs={24} value={countryId !== null ? [countryId.toString()] : undefined} options={countryData || []} placeholder='Select' onChange={handleCountryChange} lg={12} label="Country" name='Country'
                     rules={[
                        { required: true, message:  useintl.formatMessage({id:"validation.enterField"},{enterField:'Country'})  }
                    ]}
                    />

                    <CommonDropdown md={8} sm={12} xs={24} value={stateId !== null ? [stateId.toString()] : undefined} placeholder='State' options={stateData || []} onChange={handleStateChange} lg={6} label="State" name='State'
                     rules={[
                        { required: true, message:  useintl.formatMessage({id:"validation.enterField"},{enterField:'State'})  }
                    ]}
                    />

                    <CommonDropdown md={8} sm={12} xs={24} value={cityId !== null ? [cityId.toString()] : undefined} placeholder='City' options={cityData || []} onChange={handleCityChange} lg={6} label="City" name='City'
                     rules={[
                        { required: true, message:  useintl.formatMessage({id:"validation.enterField"},{enterField:'City'})  }
                    ]}
                    />

                    <CommonTextArea value={jobDescription} label="Job description & Skills" onChange={handleDescriptionChange} lg={24}  />

                    <CommonDropdown md={8} sm={12} xs={24} value={(skillIds || []).map(id => id.toString())} mode='multiple' placeholder="Select" options={skillData || []} onChange={handleSkillChange} lg={12} label="Skills"
                    />
                    
                </Row>
                
                <Button type="primary"  htmlType='submit'> Submit</Button>
                {/* <CommonButton type="primary" label='Submit' onClick={handleSubmit}  lg={4}>Submit</CommonButton> */}

                <Modal
                    title="Success"
                    visible={modalVisible}
                    onOk={() => setModalVisible(false)}
                    onCancel={() => setModalVisible(false)}
                    >
                    <p>Record Saved Successfully</p>
                </Modal>

            </Form>




        </>
    );
}

export default JobListView;