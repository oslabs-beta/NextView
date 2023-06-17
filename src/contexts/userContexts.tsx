import { createContext, useState } from 'react';

interface UserContextType {
  username: string;
  setUsername: (value: string) => void;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export interface AppListItem {
  id: bigint;
  user_id: bigint;
  app_name: string;
  created_on: Date;
}

interface AppsListContextType {
  application_list: AppListItem[];
  setApplication_list: (value: AppListItem[]) => void;
}

export const UserContext = createContext<UserContextType | null>(null);
export const AppsListContext = createContext<AppsListContextType | null>(null);
