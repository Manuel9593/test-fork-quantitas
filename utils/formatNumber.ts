export default function formatNumber (number: number) {
    return new Intl.NumberFormat("it-IT").format(number)
}