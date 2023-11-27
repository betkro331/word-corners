import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the dictionary page', () => {
  cy.visit('/dictionary');
});

// Scenario 1: Search dictionary for a valid word
When('I enter {string} in the search field', (searchWord) => {
  cy.get('input[name="searchWord"]').type(searchWord);
})

Then('{string} other hits', (noOfHits) => {
  cy.get('.hits').should('contain', noOfHits);
})


// Scenario 2: Search dictionary for invalid word
When('I enter string {string} in the search field', (searchWord) => {
  cy.get('input[name="searchWord"]').type(searchWord);
})

Then('I should not see any results', () => {
  cy.get('.hits').should('contain', 'Inga träffar');
})


// Scenario 3: HiVAT
When('I enter string "hej" a hundred times', () => {
  for (let i = 0; i < 100; i++) {
    cy.get('input[name="searchWord"]').type('hej', { force: true });
  }
});

Then('The site should not crash', () => {
  cy.wait(3000);
  cy.url().should('equal', 'https://word-corners.nodehill.se/dictionary');
  cy.get('.result').should('be.visible');
});
  

