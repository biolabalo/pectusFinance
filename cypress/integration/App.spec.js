describe('', () => { 
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })

    it("should contain visit link", ()=> {
     cy.contains('View grouped result')
    })
 })