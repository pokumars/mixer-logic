import { findDrinksByName, findDrinksByMethod, findDrinksByAlcohol, emptyResultsText,
  FIND_BY_NAME, FIND_BY_ALCOHOL, FIND_BY_METHOD } from "./searchReducer";

const  xNameResult= {
  name: 'Sex On The Beach',
  dummyId: 27,
  ingredients: [
    ['vodka', 4, 'cl'],
    ['peach schnapps', 2, 'cl'],
    ['cranberry juice', 4, 'cl'],
    ['fresh orange juice', 4, 'cl'],
    ['maraschino cherry (optional)', 1, null],
    ['orange slice (optional)', 1, null]
  ],
  imageUrl: 'sexOnTheBeach.jpg',
  glass: 'highball',
  method: ['shake'],
  garnish: ['orange slice', 'maraschino cherry', 'cocktail umbrella'],
  categories: ['cocktail', 'classic'],
  alcohols: ['vodka', 'peach schnapps'],
  page: null,
  credits: [['BBC goodfood', 'image'], ['liquor.com', 'recipe']],
  steps: [
    'Add all the ingredients into a shaker (or whatever you have) with ice and shake.',
    'Strain into a highball glass over fresh ice.',
    'Garnish with a maraschino cherry or orange slice or cocktail umbrella.'
  ]
}
// ---------------------ACTION CREATORS-----------------

describe('actions', () => {
  


  it('should find one drink by name', () => {
    const res = [xNameResult]
    const empty = emptyResultsText(res)

    const expectedAction = {
      type: FIND_BY_NAME,
      data: { res , empty }
    }
    expect(findDrinksByName("x")).toEqual(expectedAction)
  })

  it('should find 0 drink by name', () => {
    const res = []
    const empty = emptyResultsText(res)

    const expectedAction = {
      type: FIND_BY_NAME,
      data: { res , empty }
    }
    expect(findDrinksByName(".")).toEqual(expectedAction)
  })
})
