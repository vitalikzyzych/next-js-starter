import React from 'react';
import { IJob } from '../../types';
import { formattedDate } from '../helpers/helpers';

const JobItem: React.FC<IJob> = ({
  reward,
  referrerCount,
  applicantCount,
  startsAt,
  endsAt,
  title,
  slug,
}) => {
  const currency = reward.toLocaleString();
  const startDate = formattedDate(startsAt);
  const endDate = formattedDate(endsAt);
  const status = slug.toLowerCase();

  return (
    <div className="job-item col-12 md:col-4 lg:col-3">
      <div className="job-item-card card flex-column align-items-start justify-content-start m-2">
        <div className="flex justify-content-center align-items-center mb-1">
          <span className={`jobstatus ${status} inline-block`}></span>
          <p className="p-0 m-0 text-xs">{slug}</p>
        </div>
        <p className="p-0 mb-1 text-lg">{title}</p>
        <p>{`$${currency} Bounty`}</p>
        <div className="flex justify-content-start align-items-center">
          <i className="pi pi-book mr-3"></i>
          <p>{`${applicantCount} Applicants`}</p>
        </div>
        <div className="flex justify-content-start align-items-center">
          <i className="pi pi-amazon mr-3"></i>
          <p>{`${referrerCount} Applicants`}</p>
        </div>
        <div className="dates-content mt-3">
          <div className="card flex justify-content-start align-items-center">
            <i className="pi pi-calendar mr-1 text-xs"></i>
            <p className="text-xs">{`${startDate} - ${endDate}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
