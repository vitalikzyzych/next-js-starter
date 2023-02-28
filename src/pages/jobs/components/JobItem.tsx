import React from 'react';
import { IJob, StoredDocuments } from 'types';
// import { IJob2 } from '../types';

import { formattedDate, toCamelCase } from 'utils';

interface IProps {
  id: string;
  jobs: StoredDocuments<IJob>;
}

const JobItem: React.FC<IProps> = ({ id, jobs }) => {
  return (
    <div className="job-item col-12 md:col-6 lg:col-4 xl:col-3">
      <div className="job-item-card card flex-column align-items-start justify-content-start m-2">
        <div className="flex justify-content-center align-items-center mb-1">
          <span className={`jobstatus ${jobs[id].status.toLocaleLowerCase()} inline-block`}></span>
          <label className="text-xs">{toCamelCase(jobs[id].status)}</label>
        </div>
        <span className="text-lg font-medium text-purple-900">{jobs[id].title}</span>
        <label>{`$${jobs[id].reward?.amount} Reward`}</label>
        <div className="flex justify-content-start align-items-center mt-2">
          <i className="pi pi-book mr-3"></i>
          <p>{`${jobs[id].applicantCount} Applicants`}</p>
        </div>
        <div className="flex justify-content-start align-items-center mb-2">
          <i className="pi pi-amazon mr-3"></i>
          <p>{`${jobs[id].referrerCount} Applicants`}</p>
        </div>
        <div className="dates-content mt-2">
          <div className="card flex justify-content-start align-items-center">
            <i className="pi pi-calendar mr-1 text-xs"></i>
            <p className="text-xs">{`${formattedDate(jobs[id].startsAt?.seconds)} - ${formattedDate(
              jobs[id].endsAt?.seconds,
            )}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
