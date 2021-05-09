$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calculator.feature");
formatter.feature({
  "line": 2,
  "name": "Calculator",
  "description": "",
  "id": "calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Two input values, 1 and 2",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add the two values",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I expect the result 3",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Two input values, \u003cfirst\u003e and \u003csecond\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I add the two values",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I expect the result \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "calculator;add-two-numbers;",
  "rows": [
    {
      "cells": [
        "first",
        "second",
        "result"
      ],
      "line": 14,
      "id": "calculator;add-two-numbers;;1"
    },
    {
      "cells": [
        "1",
        "12",
        "13"
      ],
      "line": 15,
      "id": "calculator;add-two-numbers;;2"
    },
    {
      "cells": [
        "-1",
        "6",
        "5"
      ],
      "line": 16,
      "id": "calculator;add-two-numbers;;3"
    },
    {
      "cells": [
        "2",
        "2",
        "4"
      ],
      "line": 17,
      "id": "calculator;add-two-numbers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Two input values, 1 and 12",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I add the two values",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I expect the result 13",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Two input values, -1 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I add the two values",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I expect the result 5",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Two input values, 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I add the two values",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I expect the result 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});