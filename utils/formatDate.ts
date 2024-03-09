export default function(value: string): string {
    return new Date(value).toLocaleString(["it-IT"], {
        month: "short",
        day: "2-digit",
        year: "numeric"
    })
}