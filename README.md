markdown
Copy code

# String Calculator TDD Kata

## Overview

This kata guides you through the process of building a simple string calculator using Test-Driven Development (TDD) principles.

## Goal

Create a `StringCalculator` class with an `add` method, which takes a string of numbers as input and returns their sum. Start with the simplest cases and build up, using TDD to guide you step-by-step.

---

## Instructions

### Method Signature

Define the `add` method with the following signature:

```typescript
int add(string numbers)
Input and Output
Input: A string of comma-separated numbers
Output: An integer, representing the sum of the numbers
Examples
Input: "" → Output: 0
Input: "1" → Output: 1
Input: "1,5" → Output: 6
Requirements and Steps
Handle an Empty String

If the input string is empty, return 0.
Handle a Single Number

If the input contains only one number, return that number.
Handle Two Numbers

If the input contains two numbers, separated by a comma, return their sum.
Handle an Unknown Amount of Numbers

Allow the add method to handle any number of comma-separated values and return their sum.
Support Newlines as Delimiters

Allow the add method to handle newlines between numbers, treating them as delimiters.
Example: Input "1\n2,3" should return 6.
Support Custom Delimiters

To specify a custom delimiter, the input string should start with a line in the format "//[delimiter]\n[numbers]".
Example: Input "//;\n1;2" should return 3.
Custom delimiters can be any single character.
Handle Negative Numbers

Calling add with any negative numbers should throw an exception with a message: "negative numbers not allowed <negative_number>".
If there are multiple negative numbers, include all of them in the exception message, separated by commas.
Tips for TDD
Start simple: Begin with the easiest test cases, like an empty string.
Build incrementally: Add one requirement at a time.
Refactor often: After each passing test, refactor your code for simplicity and clarity.
Commit frequently: Commit after every change to document how your code evolves with each test case.
Additional Resources
For a more in-depth look, consider checking out the full version of the TDD Kata 1 for additional challenges.
```
