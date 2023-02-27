import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { JobList } from './components';
import jobs from './components/jobs';
import { Status } from './types';

const JobsScreen: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<Status | string>('All Jobs');
  const options: Status[] = [
    { name: 'Open' },
    { name: 'Pending' },
    { name: 'Draft' },
    { name: 'Archived' },
    { name: 'All Jobs' },
  ];

  return (
    <>
      <div className="w-full border-bottom-2 border-gray-300">
        <div className="layout-wrapper">
          <div className="flex justify-content-between align-items-start w-full">
            <div className="flex flex-column">
              <p className="text-sm">High Alpha</p>
              <p className="text-4xl">Job Posts</p>
            </div>
            <Button
              label="Create Job Post"
              icon="pi pi-plus"
              iconPos="right"
              rounded
              onClick={() => console.log('click')}
            />
          </div>
        </div>
      </div>
      <div className="layout-wrapper -m-2">
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
          <div className="mt-3">
            <JobList jobs={jobs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsScreen;
