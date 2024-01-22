interface Page {
  api_id: string;
  created_on: string;
  page: string;
  _id: number;
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
