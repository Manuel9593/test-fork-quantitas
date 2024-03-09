export default function (string: string, length: number, sep: string = " …") {
    return string.length >= length ? string.substring(0, length) + sep : string
}