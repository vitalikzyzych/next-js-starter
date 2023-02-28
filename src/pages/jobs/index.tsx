import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'core/app/rootStore';
import { JobItem } from './components';

import { jobsSelector, jobIdsSelector, jobList, jobIsLoadingSelector } from 'store/job';

export interface IStatus {
  name: string;
}

const Jobs: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<IStatus | string>('All Jobs');
  const options: IStatus[] = [
    { name: 'Open' },
    { name: 'Pending' },
    { name: 'Draft' },
    { name: 'Archived' },
    { name: 'All Jobs' },
  ];
  const dispatch = useDispatch<AppDispatch>();

  const ids = useSelector(jobIdsSelector);
  const isLoading = useSelector(jobIsLoadingSelector);
  const jobs = useSelector(jobsSelector);

  useEffect(() => {
    dispatch(jobList());
  }, []);

  return (
    <>
      <div className="w-full border-bottom-1 border-gray-300">
        <div className="layout-wrapper">
          <div className="flex justify-content-between align-items-start w-full">
            <div className="flex flex-column">
              <p className="text-sm text-purple-700">High Alpha</p>
              <p className="text-4xl font-medium">Job Posts</p>
            </div>
            <Button
              label="Create Job Post"
              icon="pi pi-plus"
              iconPos="right"
              onClick={() => console.log('click')}
            />
          </div>
        </div>
      </div>
      <div className="layout-wrapper">
        <div className=" flex flex-column pt-2">
          <div className="flex justify-content-between align-items-center topbar-end mx-2">
            <div className="topbar-search">
              <span className="p-input-icon-right">
                <InputText
                  type="text"
                  placeholder="Search by keyword..."
                  className="w-12rem sm:w-full"
                />
                <i className="pi pi-search"></i>
              </span>
            </div>
            <div className="topbar-dropdown">
              <Dropdown
                value={selectedStatus}
                onChange={(e: DropdownChangeEvent) => setSelectedStatus(e.value)}
                options={options}
                optionLabel="name"
                optionValue="name"
                className="w-full border-none"
              />
            </div>
          </div>
          <div className="grid grid-nogutter mt-3">
            <DataView
              value={ids}
              loading={isLoading}
              layout="grid"
              itemTemplate={(data) => <JobItem id={data} jobs={jobs} />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
