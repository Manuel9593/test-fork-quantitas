export type GraphicOptionType = {
    labels: string[]
    datasets: {
        label: string
        data: string[] | number[],
        borderColor?: string | string[],
        backgroundColor?: string | string[]
    }
}

export default GraphicOptionType