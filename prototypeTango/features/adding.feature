Feature: Adding

  Scenario Outline: Add two numbers
    Given the input "<input>"
    When the calculator is run
    Then the output should be "<output>"
  Examples:
    | input | output |
    | 2+2   | 4      |
    | 98+1  | 99     |


  Scenario Outline: Divide two numbers
    Given the input "<input>"
    When the calculator is run
    Then the output should be "<output>"
  Examples:
    | input | output |
    | 12/3  | 4      |
    | 24/4  | 6      |