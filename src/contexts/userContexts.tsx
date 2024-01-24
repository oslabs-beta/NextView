import { createContext } from 'react';
import { UserContextType } from '../types/ContextTypes';

const defaultUserContextValue: UserContextType = {
  username: '',
  setUsername: () => {
    // No operation function, used as a placeholder
  },
  password: '',
  setPassword: () => {
    // No operation function, used as a placeholder
  },
  loggedIn: false,
  setLoggedIn: () => {
    // No operation function, used as a placeholder
  },
};

export const UserContext = createContext<UserContextType>(
  defaultUserContextValue,
);
