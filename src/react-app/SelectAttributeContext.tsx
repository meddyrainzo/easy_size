import React, { createContext, Dispatch } from 'react';
import { StatusActionType } from './action/statusActionTypes';
import { initialStatusState, StatusState } from './state/statusState';

export const SelectAttributeContext = createContext<{
  state: StatusState;
  dispatch: Dispatch<StatusActionType>;
}>({ state: initialStatusState, dispatch: () => null });
