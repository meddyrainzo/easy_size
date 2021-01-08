import { StatusActionType } from '../action/statusAction';
import { getRandomAttribute } from '../utils/getRandomAttribute';

export type StatusState = {
  status: string;
  selectedAttribute?: string;
};

export const initialStatusState: StatusState = { status: 'start' };

export const statusReducer = (
  state = initialStatusState,
  action: StatusActionType
): StatusState => {
  switch (action.type) {
    case 'RANDOMIZE':
      const selectedAttribute = getRandomAttribute(action.attributes);
      return { ...state, selectedAttribute };
    case 'FINISH':
      action.selectAttributeAction(state.selectedAttribute!);
      return initialStatusState;
    default:
      return state;
  }
};
