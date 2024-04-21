beforeEach(() => {
  
  //  le code à l'intérieur du bloc beforeEach ne sera exécuté que si le nom de la spécification ne contient ni 'ForgetPassword' ni 'Register'
  if(!Cypress.spec.name.includes('RestMotPasse') && !Cypress.spec.name.includes('CreationCompte')){
    cy.visit('https://ecommerce-playground.lambdatest.io/')
    cy.title().should('eq', 'Your Store')   
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})
    cy.get('input[name="email"]').type('touaiti.wissem@gmail.com')
    cy.get('input[name="password"]').type('abcd123')
    cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('input[value="Login"]').click()
  }
});