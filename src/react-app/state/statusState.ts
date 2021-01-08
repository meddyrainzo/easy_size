import { Status } from '../status/status';

export type StatusState = {
  status: string;
  selectedAttribute?: string;
};

export const initialStatusState: StatusState = { status: Status.IDLE };
