import { createContext } from 'react';

interface LineDataItem {
  name: string;
  client: number;
  server: number;
  internal: number;
}

interface BarDataItem {
  name: string;
  duration: number;
}

interface PieDataItem {
  name: string;
  value: number;
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
