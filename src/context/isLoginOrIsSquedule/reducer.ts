import { loginOrScheduleType } from './data';

export type action = {
  type?: string;
  payload?: boolean;
};

export const loginOrScheduleReducer = (
  state: loginOrScheduleType,
  action: action,
) => {
  switch (action.type) {
    case 'TRIGGER':
      return { ...state, onOff: !state.onOff };

    default:
      return { ...state };
  }
};
