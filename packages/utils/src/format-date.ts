const DATE_FORMAT = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export function formatDate(date: string) {
  return DATE_FORMAT.format(new Date(date))
}
