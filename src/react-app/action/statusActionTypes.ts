const RANDOMIZE = 'RANDOMIZE';
const FINISH = 'FINISH';

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

export type StatusActionType = Randomizing | Finish;
