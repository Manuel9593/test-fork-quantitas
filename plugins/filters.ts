import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      truncate: (string: string, lenght: number, sep: string = ' …') => {
        if (string.length >= lenght) {
          return (string || '').substring(0, lenght) + sep
        } else {
          return string
        }
      },
      formatDate: (value: string) => {
        const date = new Date(value)
        return date.toLocaleString(['it-IT'], {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        })
      },
      encodeURIString: (string: string, sep: string = '-') => {
        return encodeURIComponent(string)
          .replace('/%20/g', sep)
          .replace('/%2C/g', '')
          .replace('/%3B/g', '')
          .replace('/%3F/g', '')
          .toLowerCase()
      },
      number: (number: number) => {
        const formatter = new Intl.NumberFormat('it-IT')
        return formatter.format(number)
      }
    }
  }
})
