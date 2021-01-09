import { Status } from '../status/status';
import { StatusActionType } from './statusActionTypes';

export const randomizeAction = (attributes: string[]): StatusActionType => {
  return {
    type: 'RANDOMIZE',
    payload: { status: Status.IN_PROGRESS, attributes },
  };
};

export const finishAction = (
  selectAttributeAction: (_: string) => void
): StatusActionType => {
  return { type: 'FINISH', selectAttributeAction };
};
