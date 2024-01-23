import { Page } from './ComponentPropTypes';
export interface APIContextType {
  apiKey: string | null;
  setApiKey: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface PageContextType {
  page: Page | undefined;
  setPage: React.Dispatch<React.SetStateAction<Page | undefined>>;
  start: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  end: string;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserContextType {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}
