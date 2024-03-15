import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface CreateJobPayload {
  jobCode: string;
  jobTitleId: number;
  vmsMasterId: number;
  clientMasterId: number;
  companyId: number;
  jobTypeId: number;
  countryId: number;
  stateId: number;
  cityId: number;
  numberOfOpenings: number;
  maxSubmission: number;
  billRate: number;
  minimumPayRate: number;
  requirementOpenDate: string;
  requirementCloseDate: string;
  contractStartDate: string;
  contractEndDate: string;
  duration: number;
  currencyId: number;
  jobStatusId: number;
  createdBy?: string;
  createdOn?: string;
  modifiedBy?: string;
  modifiedOn?: string;
  jobDescription: string;
  skillIds: number[];
}

interface Clients {
    clientId: number;
    clientName: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
}

interface CompanyDropdown {
    companyDetailsId: number;
    companyName: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
}

interface Currency {
    currencyId: number;
    currencyName: string;
}

interface JobTitle {
    jobTitleId: number;
    jobTitle: string;
   
}

interface MspVms {
    vmsId: number;
    vmsName: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
}

interface JobPayRate {
    jobpayrateId: number;
    jobPayRateName: string;
}

interface Skill {
    skillId: number;
    skills: string;
}

interface JobStatus {
    statusId: number;
    status: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
}

interface JobType {
    jobtypeId: number;
    jobTypeName: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
    isActive: boolean;
}

interface FetchClientPayload {
    vmsId: number;
}

interface FetchMspVmsPayload {
    companyDetailsId: number;
}

export const createJob = createAsyncThunk(
    'job/createJob',
    async (payload: CreateJobPayload, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8080/api/jobcreation/create', payload);
            return response.data;
        } catch (error:any) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const fetchJobTypes = createAsyncThunk(
    'jobTypes/fetchJobTypes',
    async (data,thunkApi) => {
        try{
            const response = await axios.get<JobType[]>('http://localhost:8080/api/jobcreation/getJobTypeList');
            return { jobType: response.data };
        }
        catch(error:any) {
            return thunkApi.rejectWithValue(error.message);

        }
    }
);

export const fetchJobStatus = createAsyncThunk(
    'jobStatus/fetchJobStatus',
    async (data,thunkApi) => {
        try{
            const response = await axios.get<JobStatus[]>('http://localhost:8080/api/jobcreation/getJobStatusAll');
            return { jobStatus: response.data };
        }
        catch(error:any) {
            return thunkApi.rejectWithValue(error.message);

        }
    }
);


export const fetchSkills = createAsyncThunk(
    'skill/fetchSkills',
    async (data,thunkApi) => {
        try{
            const response = await axios.get<Skill[]>('http://localhost:8080/api/jobcreation/getSkillsFromDatabase');
            return { skill: response.data };
        }
        catch(error:any) {
            return thunkApi.rejectWithValue(error.message);

        }
    }
);

export const fetchJobPayRate = createAsyncThunk(
    'job/fetchJobPayRate',
    async (data,thunkApi) => {
        try{
            const response = await axios.get<JobPayRate[]>('http://localhost:8080/api/jobcreation/getAllJobPayRate');
            return { jobpayrate: response.data };
        }
        catch(error:any) {
            return thunkApi.rejectWithValue(error.message);

        }
    }
);

export const fetchMspVms = createAsyncThunk(
    'mspvms/fetchMspVms',
    async (payload: FetchMspVmsPayload, thunkApi) => {
        const { companyDetailsId } = payload;
        try {
            const response = await axios.get<MspVms[]>(`http://localhost:8080/api/jobcreation/getvms?companyDetailsId=${companyDetailsId}`);
            return { mspvms: response.data };
        } catch (error:any) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const fetchJobTitles = createAsyncThunk(
    'job/fetchJobTitles',
    async (data,thunkApi) => {
        try{
            const response = await axios.get<JobTitle[]>('http://localhost:8080/api/jobcreation/getalljobtitle');
            return { jobtitle: response.data };
        }
        catch(error:any) {
            return thunkApi.rejectWithValue(error.message);

        }
    }
);

export const fetchCurrency = createAsyncThunk(
    'currency/fetchCurrency',
    async (data,thunkApi) => {
        try{
            const response = await axios.get<Currency[]>('http://localhost:8080/api/jobcreation/getAllCurrencies');
            console.log("Currency-response");
            return { currency: response.data };
        }
        catch(error:any) {
            return thunkApi.rejectWithValue(error.message);

        }
    }
  );

export const fetchCompanyDropdown = createAsyncThunk(
    'company/fetchCompanyDropdown',
    async (data,thunkApi) => {
        try{
            const response = await axios.get<CompanyDropdown[]>('http://localhost:8080/api/jobcreation/getAllCompanies');
            return { companies: response.data };
        }
        catch(error:any) {
            return thunkApi.rejectWithValue(error.message);

        }
    }
);


export const fetchClients = createAsyncThunk(
    'job/fetchClients',
    async (payload: FetchClientPayload, thunkApi) => {
        const { vmsId } = payload;
        try {
            const response = await axios.get<Clients[]>(`http://localhost:8080/api/jobcreation/getclient?vmsId=${vmsId}`);
            return { client: response.data };
        } catch (error:any) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


const initialState = {
    loading: false,
    error: null,
    job: null,
    activeComponent: 'JobDetails',
    client: null,
    companies: null,
    currency: null,
    jobtitle: null,
    mspvms: null,
    jobpayrate: null,
    skill: null,
    jobstatus: null,
    jobtype: null,
} as CreateJobState;

interface CreateJobState {
    loading: boolean;
    error: string | null;
    job: any;
    activeComponent: string;
    client: null | Clients[];
    companies: null | CompanyDropdown[];
    currency: null | Currency[]; 
    jobtitle: null | JobTitle[];
    mspvms: null | MspVms[];
    jobpayrate: null | JobPayRate[];
    skill: null | Skill[];
    jobstatus: null | JobStatus[];
    jobtype: null | JobType[];
}

const createJobSlice = createSlice({
    name: 'createJob',
    initialState,
    reducers: {
        setActiveComponent: (state, action: PayloadAction<string>) => {
            state.activeComponent = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJob.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(createJob.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.job = action.payload;
            })
            .addCase(createJob.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchClients.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchClients.fulfilled, (state, action: PayloadAction<{client: Clients[] }>) => {
                state.loading = false;
                state.client = action.payload.client;
            })
            .addCase(fetchClients.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchCompanyDropdown.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchCompanyDropdown.fulfilled, (state, action: PayloadAction<{ companies: CompanyDropdown[] }>) => {
                  state.loading = false;
                  state.companies = action.payload.companies;
            })
              
            .addCase(fetchCompanyDropdown.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchCurrency.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchCurrency.fulfilled, (state, action: PayloadAction<{currency: Currency[] }>) => {
                  state.loading = false;
                  state.currency = action.payload.currency;
            })
              
            .addCase(fetchCurrency.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchJobTitles.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchJobTitles.fulfilled, (state, action: PayloadAction<{ jobtitle: JobTitle[] }>) => {
                  state.loading = false;
                  state.jobtitle = action.payload.jobtitle;
            })
              
            .addCase(fetchJobTitles.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchMspVms.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchMspVms.fulfilled, (state, action: PayloadAction<{mspvms: MspVms[] }>) => {
                state.loading = false;
                state.mspvms = action.payload.mspvms;
            })
            .addCase(fetchMspVms.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchJobPayRate.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchJobPayRate.fulfilled, (state, action: PayloadAction<{ jobpayrate: JobPayRate[] }>) => {
                  state.loading = false;
                  state.jobpayrate = action.payload.jobpayrate;
            })
              
            .addCase(fetchJobPayRate.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchSkills.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchSkills.fulfilled, (state, action: PayloadAction<{skill: Skill[] }>) => {
                  state.loading = false;
                  state.skill = action.payload.skill;
            })
              
            .addCase(fetchSkills.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchJobStatus.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchJobStatus.fulfilled, (state, action: PayloadAction<{ jobStatus: JobStatus[] }>) => {
                  state.loading = false;
                  state.jobstatus = action.payload.jobStatus;
            })
              
            .addCase(fetchJobStatus.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchJobTypes.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchJobTypes.fulfilled, (state, action: PayloadAction<{ jobType: JobType[] }>) => {
                  state.loading = false;
                  state.jobtype = action.payload.jobType;
            })
              
            .addCase(fetchJobTypes.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export const { setActiveComponent } = createJobSlice.actions;

export default createJobSlice.reducer;
