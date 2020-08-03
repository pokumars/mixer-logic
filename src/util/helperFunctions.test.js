import {  capitalise, joinWithAnd, gen3UniqueRandomNums, randomNum  } from './helperFunctions'
import { drinks } from "../allDrinks";
describe('test gen3UniqueRandomNums', () => {
  //TODO TEST: what to do when passed in array length is less than 3
  test('should return 3 randomly generated numbers based on passed in array length', () => {
    expect(gen3UniqueRandomNums(drinks)).toHaveLength(3)
  })
})

describe('joinWithAnd function tests', () => {
  test('joinWithAnd adds & as well as comma if 3 or more elements', () => {
    //3elements
    expect(joinWithAnd(["beans", "peas", "tomatoes"])).toBe('beans, peas & tomatoes')
    //4 elements
    expect(joinWithAnd(["beans", "peas", "tomatoes", "potatoes"])).toBe('beans, peas, tomatoes & potatoes')
  })

  test('joinWithAnd adds & if only 2 strings', () => {
    //2 elements
    expect(joinWithAnd(["peas", "tomatoes"])).toBe('peas & tomatoes')
  })
  test('joinWithAnd if only 1 string', () => {
    //1 elements
    expect(joinWithAnd(["tomatoes"])).toBe('tomatoes')
  })
  test('joinWithAnd if array is empty', () => {
    //0 elements
    expect(joinWithAnd([])).toBe('-')
  })
})

describe('other helper function tests', () => {
  test('randomNum should give a number that is less than 10', () => {
    expect(randomNum(10)).toBeLessThan(10)
  })
  test('randomNum should give a number that is less than or equal to 3', () => {
    expect(randomNum(3)).toBeLessThan(3)
  })
})

