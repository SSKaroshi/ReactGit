
import { configureStore} from '@reduxjs/toolkit';
import commonReducer from './slices/common/common';
import createJobReducer from './slices/job/job-creation';
import loginReducer from './slices/login/login';


const store = configureStore({
  reducer: {
    createJob: createJobReducer,
    common: commonReducer,
  
    login: loginReducer,
 

  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
