import Vue from 'vue'

Vue.filter('truncate', (string, lenght, sep = ' …') => {
  if (string.length >= lenght) {
    return (string || '').substring(0, lenght) + sep
  } else {
    return string
  }
})

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['it-IT'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
})

Vue.filter('encodeUriString', (string, sep = '-') => {
  return encodeURIComponent(string)
    .replace(/%20/g, sep)
    .replace(/%2C/g, '')
    .replace(/%3B/g, '')
    .replace(/%3F/g, '')
    .toLowerCase()
})

Vue.filter('number', function (number) {
  if (typeof number !== 'number') {
    return number
  }
  const formatter = new Intl.NumberFormat('it-IT')
  return formatter.format(number)
})
