import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'core/app/rootStore';

import { usersSelector, userIdsSelector, userList, userIsLoadingSelector } from 'store/user';

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const ids = useSelector(userIdsSelector);
  const isLoading = useSelector(userIsLoadingSelector);
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(userList());
  }, []);

  return (
    <div className="layout-wrapper -m-2">
      <DataTable value={ids} loading={isLoading}>
        <Column field="email" header="Email" body={(rowData) => users[rowData].email} />
      </DataTable>
    </div>
  );
};

export default UsersScreen;
