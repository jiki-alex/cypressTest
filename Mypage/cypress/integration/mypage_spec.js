describe('my page test', function() {
    it('visits JING LUO and open external link', function(){
        cy.visit('https://alextobbyluo.wixsite.com/passion')

        

        cy.contains('Read it').click()

        cy.url().should('include','/passion')

        cy.get('a[id="comp-jm1vybpc30imagelink"]').click()
        cy.get('a[id="comp-jm1vybpc31imagelink"]').click()
        cy.get('a[id="comp-jm1vybpc32imagelink"]').click()
        
       

        
    })

    it('test the contact form', function(){

        cy.visit('https://alextobbyluo.wixsite.com/passion')

        cy.get('form').submit()
        cy.get('input[id="field1"]').should('have.attr','placeholder','Name')
            .type('YES')
            .should('have.value','YES')

        cy.get('input[id="field2"]').should('have.attr','placeholder','Email')
          .type('NO')
          .should('have.value','NO')

        

        cy.get('input[id="field2"]').type('pekka')
        cy.contains('Send').click()
            .get('div[id="comp-jm1vq14snotifications"]').should('contain', 'valid')


    })

    
        
        


    it('has a logo visivle', function() {
        cy.visit('https://alextobbyluo.wixsite.com/passion')
        cy.get('div').find('img').should('be.visible');
      });

       
    
       

    
})