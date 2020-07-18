import searchReducer, { findDrinksByName, findDrinksByMethod, findDrinksByAlcohol, emptyResultsText,
  FIND_BY_NAME, FIND_BY_ALCOHOL, FIND_BY_METHOD } from "./searchReducer";
import reducer from "./searchReducer";


// ---------------------ACTION CREATORS-----------------
// It is easy to search for and get only the test objects since they have 
// very distinct names from the rest of the objects
const  testSingleResult=  [{
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
  alcohols: ['testAlcohol1', 'testAlcohol2'],
  page: 1,
  credits:[["testEntity1", "xforWhatImg"], ["testEntity2", "xforWhat"]],
  steps: [
   "testStep1",
   "testStep2",
   "testStep3",
   "testStep4",
   "testStep5"
  ]    
}]

const testMultipleResult = [
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
    alcohols: ['alcohol1', 'alcohol2'],
    page: 1,
    credits:[["entity1", "forWhatImg"], ["entity1", "forWhat"]],
    steps: [
     "step1",
     "step2",
     "step3",
     "step4",
     "step5"
    ]    
  },
  ...testSingleResult
]
describe('action creator tests', () => {
  const testQuery = "test"
  it('FIND_BY_NAME creates an action that has the search query ', () => {
    const expectedAction = {
      type: FIND_BY_NAME,
      query: testQuery
    }
    expect(findDrinksByName(testQuery)).toBeDefined()
    expect(findDrinksByName(testQuery).query).toEqual(testQuery)
    expect(findDrinksByName(testQuery)).toEqual(expectedAction)
    
  })

  it('FIND_BY_METHOD creates an action that has the search query ', () => {
    const expectedAction = {
      type: FIND_BY_METHOD,
      query: testQuery
    }
    expect(findDrinksByMethod(testQuery)).toBeDefined()
    expect(findDrinksByMethod(testQuery).query).toEqual(testQuery)
    expect(findDrinksByMethod(testQuery)).toEqual(expectedAction)
    
  })

  it('FIND_BY_ALCOHOL creates an action that has the search query ', () => {
    const expectedAction = {
      type: FIND_BY_ALCOHOL,
      query: testQuery
    }
    expect(findDrinksByAlcohol(testQuery)).toBeDefined()
    expect(findDrinksByAlcohol(testQuery).query).toEqual(testQuery)
    expect(findDrinksByAlcohol(testQuery)).toEqual(expectedAction)
    
  })
})


// ---------------------REDUCER TESTS-----------------
describe('FIND_BY_NAME reducer tests', () => {
  test('undefined state returns the initial state', () => {
    const theReducer = searchReducer(undefined, {})
    expect(theReducer).toBeDefined()
    expect(theReducer).toEqual({ res: [], empty: '' })
    
  })

  
  test('state returns only 1 drink by name', () => {
    const theReducer = searchReducer([], {
      type: FIND_BY_NAME,
      query: "test"
    }) //returns an object with keys res:[{},{}] and empty:''
    console.log(theReducer)
    const res = testSingleResult
    const empty = emptyResultsText(res)

    expect(theReducer).toBeDefined()
    expect(theReducer).toEqual({ res: testSingleResult, empty: empty })
    //the results I get is a subset of the results I expect to get
    expect(theReducer.res).toEqual(expect.arrayContaining(testSingleResult))
  })

  it('should find multiple drinks by name', () => {
    const theReducer = searchReducer([], {
      type: FIND_BY_NAME,
      query: "drinkName"
    })//returns an object with keys res:[{},{}] and empty:''

    const res = testMultipleResult
    const empty = emptyResultsText(res)

    expect(theReducer).toBeDefined()
    expect(theReducer).toEqual({ res, empty })
    //the results I get is a subset of the results I expect to get
    expect(theReducer.res).toEqual(expect.arrayContaining(testMultipleResult))
    //if the expected drinks are a subset of the received, verify that the received contains only 2.
    expect(theReducer.res).toHaveLength(2)
  })

  it('should find 0 drink by name', () => {
    const theReducer = searchReducer([], {
      type: FIND_BY_NAME,
      query: "xg"
    })//returns an object with keys res:[{},{}] and empty:''

    const res = []
    const empty = emptyResultsText(res)

    expect(theReducer).toBeDefined()
    expect(theReducer).toEqual({ res, empty })
    //the results I get is a subset of the results I expect to get
    expect(theReducer.res).toEqual(expect.arrayContaining([]))
    //if the expected drinks are a subset of the received, verify that the received contains only 2.
    expect(theReducer.res).toHaveLength(0)
  })
})

describe.skip('FIND_BY_METHOD action creator tests', () => {
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



