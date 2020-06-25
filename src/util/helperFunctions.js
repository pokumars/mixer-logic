const capitalise= (theString) => {//capitalises the first character of a string

  if (typeof theString !== 'string') return ''//if not a string, return empty string
  return theString.charAt(0).toUpperCase()+ theString.slice(1)
}

const joinWithAnd= (stringArr) => {//join array of strings with commas and add "and" between last 2
  if (stringArr.length < 1) return  "-"
  else if (stringArr.length === 1) return  stringArr[0]
  else if (stringArr.length > 1) {
    const lastStr =stringArr.pop()
    const result = stringArr.join(', ') + ' & '+ lastStr
    return result
  }
}
 const randomNum = (maxNum) => Math.floor(Math.random() * Math.floor(maxNum))
export { capitalise, joinWithAnd, randomNum }