describe('Home Page test',()=>{
    it('Check The Input Field',()=>{
        cy.visit('/');
        cy.get('input').type('cindrella')
        cy.get('button').should('be.visible')
        cy.get('button.bg-blue-200').click()
        cy.contains('Welcome,cindrella')
        cy.get('input').should('have.value','cindrella')
    })
})