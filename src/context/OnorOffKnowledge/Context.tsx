import React, { useReducer } from 'react';
import { onOfState, onOfStateType } from './data';
import { action, onOffReducer } from './reducer';

type onOfContextType = {
  state: onOfStateType;
  dispatch: React.Dispatch<action>;
};
export const OnOfContext = React.createContext<onOfContextType>({
  state: { onOff: false },
  dispatch: () => null,
});

export type OnOrOffKnowledgeType = {
  children: React.ReactNode | string;
};
export const OnOrOffKnowledge = ({ children }: OnOrOffKnowledgeType) => {
  const [state, dispatch] = useReducer(onOffReducer, onOfState);

  return (
    <OnOfContext.Provider value={{ state, dispatch }}>
      {children}
    </OnOfContext.Provider>
  );
};
