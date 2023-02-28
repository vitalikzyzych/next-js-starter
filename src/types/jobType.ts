import { StoredDocuments } from 'types';

export interface IInitialSliceState {
  ids?: [];
  isLoading?: boolean;
}

export interface IInitialStoreState<T> {
  data: StoredDocuments<T>;
}

interface IFBDate {
  seconds: number;
  nanoseconds: number;
}

export type IJobStatus = 'OPEN' | 'CLOSED' | 'DRAFT' | 'ARCHIVED' | 'PENDING';

export interface IJob {
  accountId?: string;
  accountName?: string;
  applicantCount?: number;
  createdAt: IFBDate;
  endsAt: IFBDate;
  referrerCount?: number;
  reward: { type: 'cash'; amount: 0 };
  slug?: string;
  startsAt: IFBDate;
  status?: IJobStatus;
  step?: number;
  title?: string;
  updatedAt?: IFBDate;
}
