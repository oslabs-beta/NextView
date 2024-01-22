interface Page {
  api_id: string;
  created_on: string;
  page: string;
  _id: string;
}

interface PageAvgDuration {
  page: string;
  ms_avg: number;
}

interface KindAvgDuration {
  kind: string;
  kind_id: number;
  ms_avg: number;
}

interface KindAvgDurationsOverTime {
  period: string;
  client: number;
  internal: number;
  server: number;
}

export interface OverviewDataType {
  pages: Page[];
  overallAvg: number;
  traceCount: number;
  pageAvgDurations: PageAvgDuration[];
  kindAvgDurations: KindAvgDuration[];
  kindAvgDurationsOverTime: KindAvgDurationsOverTime[];
}

interface TimeSeriesData {
  period: string;
  'Avg. duration (ms)'?: number;
}

interface OverallPageDataItem {
  'Avg. duration (ms)': number;
  Kind: string;
  Name: string;
  'Total no. of executions': string;
  'Total no. of traces': string;
}

export interface PageDataType {
  overallAvg: number;
  traceCount: number;
  avgPageDurationsOverTime: TimeSeriesData[];
  avgActionDurationsOverTime: TimeSeriesData[];
  overallPageData: OverallPageDataItem[];
}
