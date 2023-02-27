import { StoredDocuments } from 'store/types';

export interface InitialState {
  ids?: [];
  isLoading?: boolean;
}

export interface InitialStoreState<T> {
  data: StoredDocuments<T>;
}

export interface User {
  name?: string;
  createdAt?: object;
  email?: string;
  accountId?: string;
  role?: string;
}
