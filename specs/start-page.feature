Feature: See the first page

    Scenario: See the text on the first page
        Given I am on the the first page
        Then wait for the splash screen to disappear
        And I should see the correct links in the header
        And I should see the text "Välkommen till"
        And I should see the game name "Word Corners"
        And I should see footer text '© NodeHill 2022'
