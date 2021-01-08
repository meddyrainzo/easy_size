import { getRandomAttribute } from '../utils/getRandomAttribute';
import { StatusState, initialStatusState } from '../state/statusState';
import { StatusActionType } from '../action/statusActionTypes';

export const statusReducer = (
  state = initialStatusState,
  action: StatusActionType
): StatusState => {
  switch (action.type) {
    case 'RANDOMIZE':
      const { status, attributes } = action.payload;
      const selectedAttribute = getRandomAttribute(attributes);
      return { ...state, status, selectedAttribute };
    case 'FINISH':
      action.selectAttributeAction(state.selectedAttribute!);
      return initialStatusState;
    default:
      return state;
  }
};
