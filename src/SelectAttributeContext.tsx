import React, { createContext, Dispatch } from 'react';
import { StatusActionType } from './action/statusAction';
import { initialStatusState, StatusState } from './reducer/statusReducer';

export const SelectAttributeContext = createContext<{
  state: StatusState;
  dispatch: Dispatch<StatusActionType>;
}>({ state: initialStatusState, dispatch: () => null });
