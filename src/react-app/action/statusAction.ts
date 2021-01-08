import { Status } from '../status/status';

const RANDOMIZE = 'RANDOMIZE';
const FINISH = 'FINISH';
export const START = 'START';

type Randomizing = {
  type: typeof RANDOMIZE;
  payload: {
    status: string;
    attributes: string[];
  };
};

type Finish = {
  type: typeof FINISH;
  selectAttributeAction: (_: string) => void;
};

// Action creators
export const randomizeAction = (attributes: string[]): Randomizing => {
  return {
    type: RANDOMIZE,
    payload: { status: Status.IN_PROGRESS, attributes },
  };
};

export const finishAction = (
  selectAttributeAction: (_: string) => void
): Finish => {
  return { type: FINISH, selectAttributeAction };
};

export type StatusActionType = Randomizing | Finish;
