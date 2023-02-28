import { createSlice } from '@reduxjs/toolkit';
import { jobList } from './job.actions';
import { IInitialStoreState, IJob } from 'types';

// import { getFormattedPayload } from 'store/_helpers';

const initialState: IInitialStoreState<IJob> = {
  data: {},
};

const jobStore = createSlice({
  name: 'jobStore',
  initialState,
  reducers: {
    clear: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(jobList.fulfilled, (state, { payload }) => {
      state.data = { ...state.data, ...payload };
    });
  },
});

export const { clear } = jobStore.actions;

export default jobStore.reducer;
