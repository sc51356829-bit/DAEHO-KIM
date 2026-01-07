
export interface MarketDataPoint {
  date: string;
  price: number;
  reference?: number;
}

export interface KPI {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'flat';
  description: string;
  icon: string;
}

export interface CommoditySummary {
  name: string;
  japaneseName: string;
  price: string;
  change: string;
  trend: 'up' | 'down';
  inventoryLevel: string;
  inventoryPercent: number;
  status: string;
  primaryCountries: string[];
}
