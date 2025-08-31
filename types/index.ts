export type KPIKind = 'Finance' | 'HR' | 'Operations'

export interface KPITimeseriesPoint {
  date: string // YYYY-MM-DD
  value: number
}

export interface KPI {
  key: KPIKind
  current: number
  delta: number
  timeseries: KPITimeseriesPoint[]
}

export interface KPIPayload {
  items: KPI[]
  updatedAt: string
}