import { buildQueries } from '@testing-library/react';

class Shopping {
  static pickSize() {
    //   This part is commented out because sometimes, after loading the application, it returns an eslint error
    //   thet needs to be closed before interacting with the application. If this happens during buildQueries, the test
    //   fails. You just have to comment out this section and run again
    //
    //	cy.get("iframe").then((el) => {
    // 	const myIframe = el.contents().find('button:contains("X")');
    // 	cy.wrap(myIframe).click();
    // });

    cy.get('h4:contains("Sizes:")').should('be.visible');
    cy.get('.checkmark').contains('XS').click();
    cy.get('.checkmark').contains('ML').click();
  }

  static addProduct() {
    let i = 0;
    for (i = 0; i <= 2; i++) {
      cy.get('button').contains('Add to cart').eq(0).click();
    }
  }

  static cartInfo() {
    cy.get('p:contains("SUBTOTAL")').should('be.visible');
    cy.on('window:alert', (str) => {
      expect(str).to.include(`Checkout - Subtotal`);
    });
    cy.get('button:contains("Checkout")').click();
  }
}
export default Shopping;
