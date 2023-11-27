import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the start page', () => {
  cy.visit('/');
});

// Scenario 1: Start the game and click the left top box
When('I click on the Play button', () => {
  cy.get('.start-btn').click();
});

Then('the game starts', () => {
  cy.url().should('include', '/game'); 
});

Then('I see score {string}', (score) => {
  cy.contains(score).should('be.visible');  
});


Then('I see {string}', (timeLeft) => {
  cy.contains(timeLeft).should('be.visible');
});

// Scenario 1: Place the 1st letter
When('I click in the top left box', () => {
      cy.get('.corner').eq(0).click();
});

Then('I see a letter in the top left box', () => {
  cy.get('.corner').eq(0).invoke('text').should('match', /[a-zA-Z]/g);
});

Then('I see a new letter in the white middle box', () => {
  cy.get('.game').find('.middle').find('div:nth-child(2)').should('be.visible')
});


// Scenario 2: Place the 2nd letter and check validity
When('I click in the top right box', () => {
  cy.get('.corner').eq(1).click();
});

Then('I should see the letter in the top right box', () => {
  cy.get('.corner').eq(1).invoke('text').should('match', /[a-zA-Z]/g);
});

Then('check if top left box is green', () => {
  cy.get('.corner.top.left').invoke('attr', 'class').then((className) => {
    if (className.includes('valid')) {
      cy.get('.take-points').eq(0).click();
    } else {
      return // Continue if the box is not green
    }
  });
});

Then('check if top right box is green', () => {
  cy.get('.corner.top.right').invoke('attr', 'class').then((className) => {
    if (className.includes('valid')) {
      cy.get('.take-points').eq(1).click(); 
    } else {
      return // Continue if the box is not green
    }
  });
});


// Scenario 3: Place 3rd letter
When('I click in the bottom left box', () => {
  cy.get('.corner').eq(2).click();
});

Then('I should see the letter in the bottom left box', () => {
  cy.get('.corner').eq(2).invoke('text').should('match', /[a-zA-Z]/g);
});


//Scenario 4: Place 4th letter
When('I click in the bottom right box', () => {
  cy.get('.corner').eq(3).click();
});

Then('I should see the letter in the bottom right box', () => {
  cy.get('.corner').eq(3).invoke('text').should('match', /[a-zA-Z]/g);
});


Then('check if bottom left box is green', () => {
  cy.get('.corner.bottom.left').invoke('attr', 'class').then((className) => {
    if (className.includes('valid')) {
      cy.get('.take-points').eq(2).click();
    } else {
      return
    }
  });
});

Then('check if bottom right box is green', () => {
  cy.get('.corner.bottom.right').invoke('attr', 'class').then((className) => {
    if (className.includes('valid')) {
      cy.get('.take-points').eq(3).click(); 
    } else {
      return
    }
  });
});

