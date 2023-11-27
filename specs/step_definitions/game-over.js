import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the game is ongoing', () => {
  cy.visit('/game');
});

// Scenario 1
When('I click in the top left box four times', () => {
  for (let i = 0; i < 5; i++) {
    cy.wait(1000);
    cy.get('.corner').eq(0).click();
  }     
});

Then('The top left box should be red and unable to click', () => {
  cy.get('.corner').eq(0).invoke('text').should('match', /[a-zA-Z]/g);
  cy.get('.corner.top.left').should('have.class', 'invalid');
  });


// Scenario 2
When('I click in the right top box four times', () => {
  for (let i = 0; i < 5; i++) {
    cy.wait(1000);
    cy.get('.corner').eq(1).click();
  }  
});

Then('The top right box should be red and unable to click', () => {
  cy.get('.corner').eq(1).invoke('text').should('match', /[a-zA-Z]/g);
  cy.get('.corner.top.right').should('have.class', 'invalid');
  });


// Scenario 3:
When('I click in the left bottom box four times', () => {
  for (let i = 0; i < 5; i++) {
    cy.wait(1000);
    cy.get('.corner').eq(2).click();
  }
});

Then('The left bottom box should be red and unable to click', () => {
  cy.get('.corner').eq(2).invoke('text').should('match', /[a-zA-Z]/g);
  cy.get('.corner.bottom.left').should('have.class', 'invalid');
  });


// Scenario 4:
When('I click in the right bottom box four times', () => {
  for (let i = 0; i < 5; i++) {
    cy.wait(1000);
    cy.get('.corner').eq(3).click();
  }    
});

Then('The right bottom box should be red and unable to click', () => {
  cy.get('.corner').eq(3).invoke('text').should('match', /[a-zA-Z]/g);
  cy.get('.corner.bottom.right').should('have.class', 'invalid');
  });

Then('The message {string} appears', (gameOver) => {
  cy.get('.corner').should('have.css', 'background-color', 'rgb(145, 29, 29)');
  cy.get('.corner').should('have.class', 'invalid');
  cy.get('.middle').find('div:nth-child(2)').should('be.visible');
  cy.get('.middle').find('div:nth-child(2)').should('have.text', gameOver);
});
 
Then('The button {string} appears', (playAgain) => {
  cy.get('.play-again-btn').contains(playAgain);
  cy.get('.play-again-btn').should('be.visible');

});


// Feature: Play again
// When('I press the button', () => {
//   cy.get('.play-again-btn').click();
// })

// Then('the game restarts', () => {
//   cy.get('.corner').should('have.css', 'background-color', 'rgb(0, 0, 0)');
//   cy.get('.corner').should('have.class', 'valid');
// })
 









//   // And the Game Over message appears
//   cy.get('.middle').should('contain', '<div>GAME OVER</div>');

//   // And the score is displayed
//   cy.get('.score').should('be.visible');

//   // And the "Go to rules" and "Play again" buttons appear
//   cy.get('.start-page-btn').should('be.visible');
//   cy.get('.play-again-btn').should('be.visible');
// });
  
  