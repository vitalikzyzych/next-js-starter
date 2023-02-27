import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSource } from 'core';

export const userList = createAsyncThunk('user/list', async () => {
  return await UserSource.list();
});
