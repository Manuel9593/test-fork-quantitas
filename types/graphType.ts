import DataType from "./dataType"

export type GraphType = {
    question: string,
    title: string,
    separator?: boolean,
    percentage?: boolean
    description: string,
    type: "bar" | "doughnut",
    data: DataType,
}

export default GraphType