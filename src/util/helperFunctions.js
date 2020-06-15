const capitalise= (theString) => {//capitalises the first character of a string

  if (typeof theString !== 'string') return ''//if not a string, return empty string
  return theString.charAt(0).toUpperCase()+ theString.slice(1)
}

export { capitalise }