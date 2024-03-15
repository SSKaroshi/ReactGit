import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
  accessToken: string | null;
  loading: boolean;
}

interface CreatePasswordState {
  accessToken: string | null;
  loading: boolean;
}

interface PasswordForgotState {
  accessToken: string | null;
  loading: boolean;
}

const initialState: AuthState & CreatePasswordState & PasswordForgotState = {
  accessToken: null,
  loading: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async (formData: { username: string; password: string }, thunkAPI): Promise<string> => {
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:9898/auth/login", formData);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createPassword = createAsyncThunk(
  "http://localhost:9898/reset-password/reset",
  async (
    formData: { token: string; password: string; confirmPassword: string },
    thunkAPI
  ): Promise<string> => {
    console.log(formData);
    try {
      const response = await axios.post(
        `http://localhost:9898/reset-password/reset?token=${formData.token}&newPassword=${formData.password}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "reset-password/request?email=",
  async (formData: { username: string }, thunkAPI): Promise<string> => {
    try {
      const response = await axios.post(
        `http://localhost:9898/reset-password/request?email=${formData.username}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });



    builder.addCase(createPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      createPassword.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.accessToken = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(createPassword.rejected, (state) => {
      state.loading = false;
    });


    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      forgotPassword.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.accessToken = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(forgotPassword.rejected, (state) => {
      state.loading = false;
    });

  },
});

// export const { setAccessToken: setAuthAccessToken, setLoading: setAuthLoading } = authSlice.actions;
// export const { setAccessToken: setCreatePasswordAccessToken, setLoading: setCreatePasswordLoading } = authSlice.actions;
// export const { setAccessToken: setPasswordForgotAccessToken, setLoading: setPasswordForgotLoading } = authSlice.actions;
export const {setAccessToken, setLoading} = loginSlice.actions;
export default loginSlice.reducer;

