export type ChartProps = {
  symbol: string;
  interval: string;
  exchange: string;
};

export interface LinePlotProps {
  data: number[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}
