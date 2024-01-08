export interface APIContextType {
  apiKey: string | null;
  setApiKey: React.Dispatch<React.SetStateAction<string | null>>;
}
