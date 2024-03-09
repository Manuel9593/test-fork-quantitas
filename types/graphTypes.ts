type GraphOutcome = GraphType[]

export default GraphOutcome

export interface GraphType {
  question: string
  title: string
  description: string
  type: string
  data: Daum[]
}

export interface Daum {
  id: number
  bigNumbers?: boolean
  title?: string
  data: Data
  separator?: boolean
  percentage?: boolean
  acronyms?: string[]
}

export interface Data {
  labels: string[]
  datasets: Dataset[]
}

export interface Dataset {
  label: string
  data: number[]
  borderColor?: string
  backgroundColor: any
}
