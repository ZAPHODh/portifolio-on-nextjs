import React, { useReducer } from 'react';
import { loginOrSchedule, loginOrScheduleType } from './data';
import { action, loginOrScheduleReducer } from './reducer';

type LoginOrScheduleType = {
  state: loginOrScheduleType;
  dispatch: React.Dispatch<action>;
};
export const LoginOrSchedule = React.createContext<LoginOrScheduleType>({
  state: { onOff: false },
  dispatch: () => null,
});

export type OnOrOffKnowledgeType = {
  children: React.ReactNode | string;
};
export const LoginOrScheduleContext = ({ children }: OnOrOffKnowledgeType) => {
  const [state, dispatch] = useReducer(loginOrScheduleReducer, loginOrSchedule);

  return (
    <LoginOrSchedule.Provider value={{ state, dispatch }}>
      {children}
    </LoginOrSchedule.Provider>
  );
};
