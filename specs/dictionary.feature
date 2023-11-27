
Feature: Search in dictionary
  Scenario: Search for a valid Swedish word
    Given I am on the dictionary page
    When I enter "hus" in the search field
    Then "157 träffar" other hits

  Scenario: Search for an invalid Swedish word
    Given I am on the dictionary page
    When I enter string "xz" in the search field
    Then I should not see any results

  Scenario: HiVAT the dictionary with loads of 'hej'
    Given I am on the dictionary page
    When I enter string "hej" a hundred times
    Then The site should not crash
