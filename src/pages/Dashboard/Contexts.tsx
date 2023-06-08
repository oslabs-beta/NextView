import { createContext } from 'react';

interface Period {
  interval: number;
  unit: string;
}

interface PeriodContextType {
  period: Period;
  setPeriod: (value: Period) => void;
}

interface TextBox {
  overallAvg: number;
  traceCount: number;
}

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

export const PeriodContext = createContext<PeriodContextType | null>(null);
//export const PeriodContext = createContext<PeriodContextType | null>(null);
export const TraceTextboxContext = createContext(0);
export const DurationTextboxContext = createContext(0);
export const TextboxContext = createContext<TextBox | null>(null);
export const BarGraphContext = createContext<BarDataItem[] | undefined>(
  undefined,
);
export const LineChartContext = createContext<LineDataItem[] | undefined>(
  undefined,
);
export const PieChartContext = createContext<PieDataItem[] | undefined>(
  undefined,
);
