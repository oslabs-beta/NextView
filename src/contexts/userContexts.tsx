import { createContext } from 'react';

interface UserContextType {
  username: string;
  setUsername: (value: string) => void;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export const UserContext = createContext<UserContextType | null>(null);
