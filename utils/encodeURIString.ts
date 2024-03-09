export default function(string: string, sep: string = "-"): string {
    return encodeURIComponent(string)
        .replace(/%20/g, sep)
        .replace(/%2C/g, "")
        .replace(/%3B/g, "")
        .replace(/%3F/g, "")
        .toLowerCase()
}