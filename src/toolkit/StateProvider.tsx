import { Provider } from "react-redux";
import store from "./Store";
import React, { ReactNode } from "react";

interface StateProviderProps {
  children: ReactNode;
}


const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;