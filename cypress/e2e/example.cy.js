//this where e2e test cases are written

describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        //visit(url) to visit a url
        cy.contains('welcome')
        cy.contains('Register')
        cy.contains('Login')
        //if a test is present in the document
    })
})