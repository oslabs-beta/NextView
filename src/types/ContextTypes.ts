export interface APIContextType {
  apiKey: string | null;
  setApiKey: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface PageContextType {
  page: string | undefined;
  setPage: React.Dispatch<React.SetStateAction<string | undefined>>;
  start: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  end: string;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
}
