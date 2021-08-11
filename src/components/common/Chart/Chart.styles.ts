import styled from 'styled-components';
import ReactECharts from 'echarts-for-react';

export interface ChartProps {
  width?: string;
  height?: string;
}

export const Chart = styled(ReactECharts)<ChartProps>`
  flex-shrink: 0;

  width: ${(props) => props.width || '100%'};

  height: ${(props) => props.height || '100%'} !important;
`;