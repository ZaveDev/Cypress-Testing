// write tests here
describe('Inputs and submit button', () => {
  
  it('can navigate to this site', () => {
    cy.visit('http://localhost:1234')
    cy.url().should('include', 'localhost')
  })

  it('sumbit button is disabled', () => {
    cy.get('#submitBtn').should('be.disabled')
  })  

  it('can type a text for a new quote',()=>{
    cy.get('input[name="text"]')
      .type('Have Fun!')
      .should('have.value', 'Have Fun!')
  })

  it('can type an author for a new quote', () => {
    cy.get('input[name="author"]')
      .type('My new author')
      .should('have.value', 'My new author')
  })
  
  it('the submit button is not disabled anymore', () => {
    cy.get('#submitBtn')
      .should('not.be.disabled')
    

  })

  it('can cancel the new quote', () => {
    cy.get('#cancelBtn').click()

    cy.get('input[name="text"]')
    .should('have.value', '')
  
    cy.get('input[name="author"]')
      .should('have.value', '')
    
    cy.get('#submitBtn')
      .should('be.disabled')
  })
})

describe('Adding a new quote', () => {
  
    it ('can navigate to the site', () =>{
        cy.visit('http://localhost:1234') 
    })

    it('can submit a quote', () => {
        cy.get('input[name="text"]')
        .type('Have Fun!')
        cy.get('input[name="author"]')
        .type('Gabe')
        cy.get('#submitBtn').click()
        cy.get(".container").contains('Have Fun!')
    })

    it('can delete newly added quote', () => {
      cy.contains('Have Fun!').siblings('button:nth-of-type(2)').click()
      
      cy.contains('Have Fun! (Gabe)').should('not.exist')
    })    
})

describe('Editing a quote', ()=>{
    it ('can navigate to the site', () =>{
      cy.visit('http://localhost:1234') 
  })

  it('can submit a quote', () => {
      cy.get('input[name="text"]')
      .type('Have Fun!')
      cy.get('input[name="author"]')
      .type('Gabe')
      cy.get('#submitBtn').click()
      cy.get(".container").contains('Have Fun!')
  })

  it('click the edit button and submit changes', () => {
    cy.contains('Have Fun!').siblings('button:nth-of-type(1)').click()
    cy.get('input[name="text"]')
    .type('Have')
    cy.get('input[name="author"]')
    .type('Goob')
    cy.get('#submitBtn').click()
    cy.get(".container").contains('Have')
  })
  it('can delete newly added quote', () => {
    cy.contains('Have Fun!').siblings('button:nth-of-type(2)').click()
    
    cy.contains('Have Fun! (Gabe)').should('not.exist')
  }) 
})