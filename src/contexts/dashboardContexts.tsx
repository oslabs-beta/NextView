import { createContext } from 'react';
import { APIContextType, PageContextType } from '../types/ContextTypes';

interface Period {
  interval: number;
  unit: string;
}

interface TextBox {
  overallAvg: number;
  traceCount: number;
}

export interface LineDataItem {
  period: string;
  client: number;
  server: number;
  internal: number;
}

export interface BarDataItem {
  page: string;
  ms_avg: number;
}

export interface PieDataItem {
  kind_id: number;
  kind: string;
  ms_avg: number;
}

// Context Types

export interface StartContextType {
  start: string;
  setStart: (value: string) => void;
}

export interface EndContextType {
  end: string;
  setEnd: (value: string) => void;
}

export interface PeriodContextType {
  start: string;
  setStart: (value: string) => void;
  end: string;
  setEnd: (value: string) => void;
}

export interface TraceTextboxContextType {
  traceCount: number;
  setTraceCount: (value: number) => void;
}

export interface DurationTextboxContextType {
  overallAvgDuration: number;
  setOverallAvgDuration: number;
}

export interface BarGraphContextType {
  barData: BarDataItem[] | null;
  setBarData: (value: BarDataItem[]) => void;
}

export interface OVLineChartContextType {
  lineData: LineDataItem[] | null;
  setLineData: (value: LineDataItem[]) => void;
}

export interface PieChartContextType {
  pieData: PieDataItem[] | null;
  setPieData: (value: PieDataItem[]) => void;
}

// export const PeriodContext = createContext<PeriodContextType | null>(null);
export const PeriodContext = createContext<PeriodContextType | null>(null);
export const TraceTextboxContext = createContext(0);
export const DurationTextboxContext = createContext(0);
export const TextboxContext = createContext<TextBox | null>(null);
export const BarGraphContext = createContext<BarGraphContextType | undefined>(
  undefined,
);
export const OVLineChartContext = createContext<
  OVLineChartContextType | undefined
>(undefined);
export const PieChartContext = createContext<PieChartContextType | undefined>(
  undefined,
);
export const StartContext = createContext<StartContextType | null>(null);
export const EndContext = createContext<EndContextType | null>(null);

export const OverviewDataContext = createContext(null);

export const APIContext = createContext<APIContextType | null>(null);

export const PageContext = createContext<PageContextType | null>(null);
