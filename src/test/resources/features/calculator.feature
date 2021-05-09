@tag
Feature: Calculator

Scenario: add two numbers
    Given Two input values, 1 and 2
    When I add the two values
    Then I expect the result 3

Scenario Outline: add two numbers
    Given Two input values, <first> and <second>
    When I add the two values
    Then I expect the result <result>
    Examples:
        | first | second | result |
        | 1     | 12     | 13     |
        | -1    | 6      | 5      |
        | 2     | 2      | 4      |

Scenario: Calculate
    Given Two input values, 2 and 2, and the operand ^
    When I do the calculation
    Then I expect the final result 4

Scenario Outline: add two numbers
    Given Two input values, <first> and <second>, and the operand <opt>
    When I do the calculation
    Then I expect the final result <result>

    Examples:
        | first | second | opt | result |
        | 2 | 2 | / | 1 |
        | 1 | 4 | ^ | 1 |
        | -2 | 4 | ^ | -16 |
        | -14 | 7 | / | -2 |
