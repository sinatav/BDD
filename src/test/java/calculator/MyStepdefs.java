package calculator;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    private Calculator calculator;
    private int value1;
    private int value2;
    private int result;
    private char operand;

    @Before
    public void before() {
        calculator = new Calculator();
    }

    @Given("^Two input values, (-?\\d+) and (-?\\d+)$")
    public void twoInputValuesAnd(int arg0, int arg1) {
        value1 = arg0;
        value2 = arg1;
    }

    @When("^I add the two values$")
    public void iAddTheTwoValues() {
        result = calculator.add(value1, value2);
        System.out.print(result);
    }

    @Then("^I expect the result (-?\\d+)$")
    public void iExpectTheResult(int arg0) {
        Assert.assertEquals(arg0, result);
    }

    @Given("^Two input values, (-?\\d+) and (-?\\d+), and the operand (.)$")
    public void twoInputValuesAndAndTheOperand(int arg0, int arg1, char arg2) {
        value1 = arg0;
        value2 = arg1;
        operand = arg2;
    }

    @When("^I do the calculation$")
    public void iDoTheCalculation() {
        result = calculator.calculator(value1, value2, operand);
        System.out.print(result);
    }

    @Then("^I expect the final result (-?\\d+)$")
    public void iExpectTheFinalResult(int arg0) {
        Assert.assertEquals(arg0, result);
    }
}