import { onOfStateType } from './data';

export type action = {
  type?: string;
  payload?: boolean;
};

export const onOffReducer = (state: onOfStateType, action: action) => {
  switch (action.type) {
    case 'TRIGGER':
      return { ...state, onOff: !state.onOff };

    default:
      return { ...state };
  }
};
