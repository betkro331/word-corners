Feature: Game over
As a player, i place incorrect words in each box to check that
they become invalid/red until the game is over

  Scenario: Place letter in first box and it turns red and becomes invalid
    Given the game is ongoing
    When I click in the top left box four times
    Then The top left box should be red and unable to click
  
  Scenario: Place letter in second box and it turns red and becomes invalid
    Given The top left box should be red and unable to click
    When I click in the right top box four times
    Then The top right box should be red and unable to click

  Scenario: Place letter in third box and it turns red and becomes invalid
    Given The top right box should be red and unable to click
    When I click in the left bottom box four times
    Then The left bottom box should be red and unable to click
  
  Scenario: Place letter in last box, the game is over and button 'Spela igen' appears
    Given The left bottom box should be red and unable to click
    When I click in the right bottom box four times
    Then The right bottom box should be red and unable to click
    And The message "GAME OVER" appears
    And The button "Spela igen" appears
