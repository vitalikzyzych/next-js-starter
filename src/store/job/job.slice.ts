import { createSlice } from '@reduxjs/toolkit';
import { jobList } from './job.actions';
import { IInitialSliceState } from 'types';

import { getPayloadIds } from 'store/_helpers';

const initialState: IInitialSliceState = {
  ids: [],
  isLoading: false,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    clearList: (state) => {
      state.ids = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(jobList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(jobList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ids = getPayloadIds(action.payload);
    });
    builder.addCase(jobList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { clearList } = jobSlice.actions;

export default jobSlice.reducer;
