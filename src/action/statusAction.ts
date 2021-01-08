const RANDOMIZE = 'RANDOMIZE';
const FINISH = 'FINISH';

type Randomizing = {
  type: typeof RANDOMIZE;
  attributes: string[];
};

type Finish = {
  type: typeof FINISH;
  selectAttributeAction: (_: string) => void;
};

// Action creators
const randomizeAction = (attributes: string[]): Randomizing => {
  return { type: RANDOMIZE, attributes };
};

const finishAction = (selectAttributeAction: (_: string) => void): Finish => {
  return { type: FINISH, selectAttributeAction };
};

export type StatusActionType = Randomizing | Finish;
