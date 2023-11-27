import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the the first page', () => {
  cy.visit('/');
});

Then('wait for the splash screen to disappear', () => {
  cy.get('.splash').should('not.exist');
});

Then('I should see the correct links in the header', () => {
  // Verify three links in menu
  cy.get('header div.menu a').should('have.length', 3);
  // Check than menu contains correct words
  cy.get('header div.menu a').eq(0).should('contain', 'Start');
  cy.get('header div.menu a').eq(1).should('contain', 'Spela');
  cy.get('header div.menu a').eq(2).should('contain', 'Ordlistan');
});

Then('I should see the text {string}', (welcomeText) => {
  // Check welcome text
  cy.get('main div').should('contain', welcomeText);
});

Then('I should see the game name {string}', (gameName) => {
  // Check welcome text
  cy.get('div span.light-blue').should('contain', gameName);
});

Then('I should see footer text {string}', (footerText) => {
  cy.get('footer').contains(footerText);
});
