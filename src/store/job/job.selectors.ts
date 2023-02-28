import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'core/app/rootStore';

const jobState = (state: RootState) => state.job;
const jobStore = (state: RootState) => state.jobStore;

export const jobIdsSelector = createSelector(jobState, (state) => state.ids);
export const jobIsLoadingSelector = createSelector(jobState, (state) => state.isLoading);
export const jobsSelector = createSelector(jobStore, (state) => state.data);

export const jobSelector = createSelector(jobState, (state) => state);
export const jobDataSelector = createSelector(jobStore, (state) => state);
