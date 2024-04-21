describe('Mot de pass oublié', () => {

  // Test cases pour la forget password
  it('Reset mot de pass avec succée', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
      cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
      cy.contains("Forgot Your Password?")
      cy.get('input[name="email"]').type("touaiti.wissem@gmail.com")
      cy.get('button[type="submit"]').contains('Continue').click()
      cy.contains(' An email with a confirmation link has been sent your email address.')
    });
  
  //Ajoutez autres test cases pour la partie forget password
  it('Réinitialisation du mot de passe avec email non enregistré', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
    cy.title().should('eq', 'Your Store')
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
    cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
    cy.contains("Forgot Your Password?")
    cy.get('input[name="email"]').type("email@nonenregistre.com")
    cy.get('button[type="submit"]').contains('Continue').click()
    cy.contains('The E-Mail Address was not found in our records, please try again!')
  });
    

  /*
  //modifier le mot de passe
    it('réinitilisation du mot de passe', () => {
      //cliquez sur le lien de réinitialisation de mot de pass reçue par mail
     const resetLink='http://lien-reçu-au-mail-pour-réinitialisé-mot-d-passe';
      cy.visit(resetLink);

     //entrer un nouveau mot de passe 
     cy.get('input[name="password"]').type("Nouveau123");
     cy.get('input[name="confirmPassword"]').type("Nouveau123");
     cy.get('button[type="Continue"]').click();

     // le mot est reinitialiser avec succes et l'utilisateur est redirigé vers la page de conexion
     cy.url().should('include' , '/login');
     cy.contains('votre mot de passe a été réinitialisé avec succés.');
    
  })

*/

})
