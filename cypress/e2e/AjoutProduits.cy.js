describe('Ajouter un produit au panier', () => {

    // Test cases pour l'ajout des produits au panier
    it('Ajouter un produit au panier', () => {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
        cy.contains("Success: You have added ")
        cy.wait(15000)
        // verifier si le produit est bien ajouté au panier 
        cy.get('#entry_217825').find('a[aria-controls="cart-total-drawer"]').click()
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart"]').click()
        cy.contains('tr','HTC Touch HD')
      });
    //Ajoutez autres tests cases pour la modification et la suppression de produits ajoutés au panier 

    it('modifier la quantitié dun produit', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')  
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
      cy.get('button[type="submit"]').contains("Search").click({force:true})   
      cy.contains("Search - HTC Touch HD")
      cy.get('#entry_212469 > .row > :nth-child(1)').click()
       cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
       cy.contains("Success: You have added ")
       cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart')
       cy.get('input[style="min-width:3em"]').clear().type('3') 
       cy.get('i[class="fas fa-sync-alt"]').click()
       cy.contains("Success: You have modified your shopping cart!") 
    


      });


    
      it('Supprimer un produit du panier', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.title().should('eq', 'Your Store')  
        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
        cy.contains("Success: You have added ")
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart')
        cy.get('button[class="btn btn-danger"]').click()
        cy.contains("Success: You have modified your shopping cart!")
        cy.contains("Your shopping cart is empty!") 
    });
        
    })
