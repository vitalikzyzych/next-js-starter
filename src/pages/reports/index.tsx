import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'core/app/rootStore';

import { jobsSelector, jobIdsSelector, jobList, jobIsLoadingSelector } from 'store/job';

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const ids = useSelector(jobIdsSelector);
  const isLoading = useSelector(jobIsLoadingSelector);
  const jobs = useSelector(jobsSelector);

  useEffect(() => {
    dispatch(jobList());
  }, []);

  return (
    <div className="layout-wrapper -m-2">
      <DataTable value={ids} loading={isLoading}>
        <Column field="email" header="Email" body={(rowData) => jobs[rowData].title} />
      </DataTable>
    </div>
  );
};

export default UsersScreen;
