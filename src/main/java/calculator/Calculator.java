package calculator;

import java.lang.Math;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    private int power(int a, int b) {
        return (int) Math.pow(a, b);
    }

    private int divide(int a, int b) {
        return a / b;
    }

    public int calculator(int a, int b, char opt) {
        if (opt == '^') {
            return power(a, b);
        } else {
            return divide(a, b);
        }
    }
}
