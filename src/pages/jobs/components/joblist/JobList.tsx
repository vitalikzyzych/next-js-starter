import React from 'react';
import JobItem from './JobItem';
import { IJob } from '../../types';

interface Props {
  jobs: IJob[];
}

export const JobList: React.FC<Props> = ({ jobs }) => {
  return (
    <div className="grid grid-nogutter">
      {jobs && jobs?.map((item) => <JobItem key={item.accountId} {...item} />)}
    </div>
  );
};
