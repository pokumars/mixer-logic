describe('Mixer logic ', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('mixer logic')
  })

  it('clicking logo loads/reloads home page', function() {
    cy.contains('mixer logic').click()

    cy.contains('mixer logic')
    cy.contains('Featured Drinks')
  })

  
  it('searching dr does not give test drinks in results', function() {
     
    cy.get('[data-testid="search-criteria"]').select('Name')

    cy.get('input').type('dr')

    
    cy.get('[data-testid="search-submit"]').click()

    cy.contains('Featured Drinks')
  })
  it('search by name is default', function() {
    
    cy.contains('Search by Name')
    cy.get('input').type('sex on the')

    cy.get('[data-testid="search-submit"]').click()

    cy.contains('Sex On The Beach').click()
    cy.contains('Glass: Highball')
    cy.contains('Sex On The Beach')
  })

  it('searching q by name brings result', function() {
    
    cy.get('[data-testid="search-criteria"]').select('Name')

    cy.get('input').type('q')

    cy.get('[data-testid="search-submit"]').click()

    cy.contains('Daiquiri')
  })

  it('no results come with an appopriate message', function() {
    
    cy.get('[data-testid="search-criteria"]').select('Method')

    cy.get('input').type('vx')

    cy.get('[data-testid="search-submit"]').click()

    cy.contains('There were no results. Try something different')
  })
  
  it('search by method for stir yields results', function() {
    
    cy.get('[data-testid="search-criteria"]').select('Method')

    cy.get('input').type('stir')

    cy.get('[data-testid="search-submit"]').click()

    cy.contains('Vodka Martini').click()
    cy.contains('Method: Stir')
  })

  it('search by alcohol for rum yields results', function() {
    
    cy.get('[data-testid="search-criteria"]').select('Alcohol/Spirit')

    cy.get('input').type('rum')

    cy.get('[data-testid="search-submit"]').click()

    cy.contains('Cuba Libre').click()
    cy.contains('rum')
  })

  it('click contact -> contact has github ', function() {
    cy.contains('CONTACT').click()

    cy.contains('GitHub')
    cy.get('a[href*="github.com/pokumars"]')
    cy.get('a[href*="github.com/pokumars"]').should('have.length', 2)
  })

  it('click contact -> contact has linkedin', function() {
    cy.contains('CONTACT').click()

    cy.contains('LinkedIn')
    cy.get('a[href*="linkedin.com/in/oheneba-poku-marboah-483783173/"]')
    cy.get('a[href*="linkedin.com/in/oheneba-poku-marboah-483783173/"]').should('have.length', 1)
  })
})


// TEST TODO: on load there are randomly generated drinks
// TEST TODO: search by name is default
// TEST TODO: clicking on drink takes us to the drinks page