declare module 'react-grid-layout' {
  import * as React from 'react';
  export interface Layout {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    [key: string]: any;
  }
  export interface ReactGridLayoutProps {
    layout?: Layout[];
    cols?: number;
    rowHeight?: number;
    width?: number;
    isResizable?: boolean;
    isDraggable?: boolean;
    onLayoutChange?: (layout: Layout[]) => void;
    useCSSTransforms?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
  export default class ReactGridLayout extends React.Component<ReactGridLayoutProps> {}
} 