import { findDrinksByName, findDrinksByMethod, findDrinksByAlcohol, emptyResultsText,
  FIND_BY_NAME, FIND_BY_ALCOHOL, FIND_BY_METHOD } from "./searchReducer";


// ---------------------ACTION CREATORS-----------------
// It is easy to search for and get only the test objects since they have 
// very distinct names from the rest of the objects
const  testSingleResult=  {
  name: "test DrinkName",
  ingredients: [
    ["testIngredientName",4, "unit"],
    ["testIngredientName",4, "unit"],
    ["testFresh ginger", null, null],
    ["testSalt", null, "pinch"],
  ],
  imageUrl:"vodkaMartini.jpg",
  glass: "testGlassType",
  method: ["testMethod1","testMethod2"],
  garnish: ["testGarnish1","testGarnish2"],
  categories: ["testCategory1", "testCategory2"],
  page: 1,
  credits:[["testEntity1", "xforWhatImg"], ["testEntity2", "xforWhat"]],
  steps: [
   "testStep1",
   "testStep2",
   "testStep3",
   "testStep4",
   "testStep5"
  ]    
}

const testMultipleResult = [
  testSingleResult,
  {
    name: "drinkName",
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
    page: 1,
    credits:[["entity1", "forWhatImg"], ["entity1", "forWhat"]],
    steps: [
     "step1",
     "step2",
     "step3",
     "step4",
     "step5"
    ]    
  } 
]
describe('FIND_BY_NAME action creator tests', () => {

  it('should find one drink by name', () => {
    const res = [testSingleResult]
    const empty = emptyResultsText(res)

    const expectedAction = {
      type: FIND_BY_NAME,
      data: { res , empty }
    }
    expect(findDrinksByName("test")).toBeDefined()
    expect(findDrinksByName("test")).toEqual(expectedAction)
    
  })

  it('should find multiple drinks by name', () => {
    const res = testMultipleResult
    const empty = emptyResultsText(res)

    const expectedAction = {
      type: FIND_BY_NAME,
      data: { res , empty }
    }
    expect(findDrinksByName("drinkName")).toBeDefined()
    //the results I get is a subset of the results I expect to get
    expect(findDrinksByName("drinkName").data.res).toEqual(expect.arrayContaining(testMultipleResult))
    //if the expected drinks are a subset of the received, verify that the received contains only 2.
    expect(findDrinksByName("drinkName").data.res).toHaveLength(2)
  })

  it('should find 0 drink by name', () => {
    const res = []
    const empty = emptyResultsText(res)

    const expectedAction = {
      type: FIND_BY_NAME,
      data: { res , empty }
    }
    expect(findDrinksByName("xg")).toEqual(expectedAction)
  })
})

describe('FIND_BY_METHOD action creator tests', () => {
  it('should find one drink by method', () => {
    const res = [testSingleResult]
    const empty = emptyResultsText(res)

    const expectedAction = {
      type: FIND_BY_METHOD,
      data: { res , empty }
    }
    expect(findDrinksByMethod("test")).toBeDefined()
    expect(findDrinksByMethod("test")).toEqual(expectedAction)
    
  })
  it('returns empty [] when finding drink by method', () => {
    const res = []
    const empty = emptyResultsText(res)

    const expectedAction = {
      type: FIND_BY_METHOD,
      data: { res , empty }
    }
    expect(findDrinksByMethod("xg")).toBeDefined()
    expect(findDrinksByMethod("xg")).toEqual(expectedAction)
  })
})
