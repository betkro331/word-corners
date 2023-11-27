Feature: Start game and check valid words
As a player, I click one letter into each box and check for valid word. If there is, I click for getting points

  Scenario: Start the game and place a letter in the top left box
    Given I am on the start page
    When I click on the Play button
    Then the game starts
    And I see score "POÄNG: 0"
    And I see "TID KVAR:"
    When I click in the top left box
    Then I see a letter in the top left box
    And I see a new letter in the white middle box

  Scenario: Place the next letter in the top right box and check for validity (and click for points)
    Given I see a new letter in the white middle box
    When I click in the top right box
    Then I should see the letter in the top right box
    And check if top left box is green
    And check if top right box is green 

  Scenario: Place a letter in the bottom left box
    Given I see a new letter in the white middle box
    When I click in the bottom left box
    Then I should see the letter in the bottom left box

  Scenario: Place a letter in the bottom right box and check for validity (and click for points)
    Given I see a new letter in the white middle box
    When I click in the bottom right box
    Then I should see the letter in the bottom right box
    And check if bottom left box is green
    And check if top right box is green