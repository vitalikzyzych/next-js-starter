import { createAsyncThunk } from '@reduxjs/toolkit';
import { JobSource } from 'source';

export const jobList = createAsyncThunk('job/list', async () => {
  return await JobSource.list();
});
