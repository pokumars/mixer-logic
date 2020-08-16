const capitalise = (theString) => { // capitalises the first character of a string
  if (typeof theString !== 'string') return ''// if not a string, return empty string
  return theString.charAt(0).toUpperCase() + theString.slice(1)
}

const joinWithAnd = (stringArr) => { // join array of strings with commas and add "and" between last 2
  if (stringArr.length < 1) return '-'
  else if (stringArr.length === 1) return stringArr[0]
  else if (stringArr.length > 1) {
    const lastStr = stringArr.pop()
    const result = stringArr.join(', ') + ' & ' + lastStr
    return result
  }
}
const randomNum = (maxNum) => Math.floor(Math.random() * Math.floor(maxNum))

const gen3UniqueRandomNums = (arr) => { // generate 3 unique numbers
  const randomNums = []
  while (randomNums.length < 3) { // generate random numbers and if they dont already exist in arr, add them else skip.
    const r = randomNum(arr.length)
    if (randomNums.indexOf(r) === -1) randomNums.push(r)
  }
  return randomNums
}

export { capitalise, joinWithAnd, randomNum, gen3UniqueRandomNums }

// example drink object
/* const exampleDrink =   {

  name: "drinkName",
  dummyId: 0,
  ingredients: [
    ["ingredientName",4, "unit"],
    ["ingredientName",4, "unit"],
    ["fresh ginger", null, null],
    ["salt", null, "pinch"],
  ],
  imageUrl:"vodkaMartini.jpg",
  glass: "glassType",
  method: ["method1","method2"],
  garnish: ["garnish1","garnish2"],
  categories: ["category1", "category2"],
  liquor: [liquor1, liquor 2]
  page: 1,
  credits:[["entity1", "forWhatImg"], ["entity1", "forWhat"]],
  steps: [
   "step1",
   "step2",
   "step3",
   "step4",
   "step5"
  ]
} */
