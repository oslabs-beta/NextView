export interface APIContextType {
  apiKey: string | null;
  setApiKey: React.Dispatch<React.SetStateAction<string | null>>;
}

interface Page {
  api_id: string;
  created_on: string;
  page: string;
  _id: string;
}

export interface PageContextType {
  page: Page | undefined;
  setPage: React.Dispatch<React.SetStateAction<Page | undefined>>;
  start: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  end: string;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
}
