
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Country {
    countryId: number;
    countryName: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
}

interface State {
    stateId: number;
    stateName: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
}

interface City {
    cityId: number;
    cityName: string;
    createdBy: string;
    createdOn: string;
    modifiedBy: string;
    modifiedOn: string;
}

interface FetchStatePayload {
    countryId: number;
  }

interface FetchCityPayload {
    stateId: number;
  }

export const fetchCity = createAsyncThunk(
    'city/fetchCity',
    async (payload: FetchCityPayload, thunkApi) => {
        const { stateId } = payload;
        try {
            const response = await axios.get<City[]>(`http://localhost:8080/api/jobcreation/getcity?stateId=${stateId}`);
            return { city: response.data };
        } catch (error:any) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const fetchState = createAsyncThunk(
    'state/fetchState',
    async (payload: FetchStatePayload, thunkApi) => {
        const { countryId } = payload;
        try {
            const response = await axios.get<State[]>(`http://localhost:8080/api/jobcreation/getstate?countryId=${countryId}`);
            return { state: response.data };
        } catch (error:any) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const fetchCountry = createAsyncThunk(
    'country/fetchCountry',
    async (data,thunkApi) => {
        try{
            const response = await axios.get<Country[]>('http://localhost:8080/api/jobcreation/getcountry');
            return { country: response.data };
        }
        catch(error:any) {
            return thunkApi.rejectWithValue(error.message);

        }
    }
);

  const initialState = {
    loading: false,
    error: null, 
    city: null,
    state: null,
    country: null,
  } as CommonState;

  
interface CommonState {
    loading: boolean;
    error: string | null;
    city: null | City[];
    state: null | State[];
    country: null | Country[];
  }

const CommonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder

      .addCase(fetchCity.pending, (state, action) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchCity.fulfilled, (state, action: PayloadAction<{city: City[] }>) => {
          state.loading = false;
          state.city = action.payload.city;
      })
      
      .addCase(fetchCity.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
    
      .addCase(fetchState.pending, (state, action) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchState.fulfilled, (state, action: PayloadAction<{state: State[] }>) => {
            state.loading = false;
            state.state = action.payload.state;
      })
      .addCase(fetchState.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
      })

      .addCase(fetchCountry.pending, (state, action) => {
          state.loading = true;
          state.error = '';
      })
      .addCase(fetchCountry.fulfilled, (state, action: PayloadAction<{country: Country[] }>) => {
            state.loading = false;
            state.country = action.payload.country;
      })
        
      .addCase(fetchCountry.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
      });
    },
  });


export default CommonSlice.reducer;



