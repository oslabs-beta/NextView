import { createContext } from 'react';

interface LineDataItem {
  period: string;
  client: number;
  server: number;
  internal: number;
}

interface BarDataItem {
  page: string;
  ms_avg: number;
}

interface PieDataItem {
  kind_id: number;
  kind: string;
  ms_avg: number;
}

export const PeriodContext = createContext('');
export const TextboxContext = createContext(null);
export const BarGraphContext = createContext<BarDataItem[] | undefined>(
  undefined,
);
export const LineChartContext = createContext<LineDataItem[] | undefined>(
  undefined,
);
export const PieChartContext = createContext<PieDataItem[] | undefined>(
  undefined,
);
