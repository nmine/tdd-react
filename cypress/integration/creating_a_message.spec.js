describe('As a user I want to create a new message so that it is visible for other users', () => {
    it('Displays the messages in the list', () => {
        //go to page
        cy.visit('http://localhost:3000');

        //type a message with content new message
        cy.get('[data-testid="messageText"]')
            .type('New message');

        // click on send button
        cy.get('[data-testid="sendButton"]')
            .click();

        cy.get('[data-testid="messageText"]')
            .type('New message2');

        // click on send button
        cy.get('[data-testid="sendButton"]')
            .click();

        // //check that message appears somewhere in the screen
        cy.get('[data-testid="messageText"]')
            .should('have.value', '');

        cy.contains('New message');
        cy.contains('New message2');
    });
});