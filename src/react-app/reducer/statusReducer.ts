import { StatusActionType } from '../action/statusAction';
import { getRandomAttribute } from '../utils/getRandomAttribute';
import { Status } from '../status/status';

export type StatusState = {
  status: string;
  selectedAttribute?: string;
};

export const initialStatusState: StatusState = { status: Status.IDLE };

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
      console.log(
        `At the finish reducer. The selected attribute is :: ${state.selectedAttribute}`
      );
      action.selectAttributeAction(state.selectedAttribute!);
      return initialStatusState;
    default:
      return state;
  }
};
