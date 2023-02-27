export interface IJob {
  accountId: number;
  title: string;
  reward: number;
  slug: string;
  applicantCount: number;
  referrerCount: number;
  startsAt: Date;
  endsAt: Date;
}

export interface Status {
  name: string;
}
