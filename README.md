# PA3 Testing Infrastructure

For this assignment, you can use this repository as a starting point for writing tests for your implementation of PA3. You will be submitting some of these files along with your implementation so that our autograder can correctly run tests on your compiler.

## Before you begin
Copy over the `tests` folder to your implementation. You can simply use `cp` (or `copy` on Windows) to move this folder to where your implementation is located.

Once you've done that, take a moment to familiarize yourself with the contents of the `tests` folder.

## Contents of `tests` folder

### `pa3-visible.test.ts`
**The autograder will overwrite this file**

We are making some of the tests that our autograder runs on your submission visible for you. Use these as an example of how to write tests, but **passing these tests does not mean your implementation is complete.** Make sure to write plenty of other tests.


### `asserts.test.ts`
**The autograder will overwrite this file**

This file contains the assert functions we use for testing. You **should not change any definitions in this file** since we won't be using any version you upload. The `pa3-visible` tests file should provide good example of how to use the `assert` functions defined here. We use for different functions for testing your implementation:
* `assertPrint`: This function runs a program (which calls `print`) and compares the output of printing to the expected output.
* `assertFail`: This functions runs a program and asserts that it fails at runtime, raising an exception starting with `RUNTIME ERROR:`
* `assertTC`: This function type-checks a program and compares the type of the last statement to an expected type.
* `assertTCFail`: This function type-checks a program and asserts that it fails at type-checking, raising an exception starting with `TYPE ERROR:`

### `import-object.test.ts`
**The autograder will overwrite this file**

This is the import object defined for the purpose of testing. It's almost identical to the import object you find in `webStart`, but printing here adds to a string buffer instead of outputting to stdout. You also **should not change any definitions in this file.**

### `helpers.test.ts`
**You must include this file when submitting**

This is the only file where you will need to make changes to get the tests to run on your compiler. Make sure to fill out the defintions in this file according to your implementation. You will need to change:
* `function typeCheck(source: string) : Type` (Type-check a program)
* `async function run(source: string)` (Run a program)
* `NUM : Type` (A type representing numbers in your AST)
* `BOOL : Type` (A type representing booleans in your AST)
* `NONE : Type` (A type representing None in your AST)
* `function Class(name: string) : Type` (A type representing a class in your AST)

## Running Tests
In order to run tests, make sure to fill out the definitions above. After you've completed that task, you should be able to run our tests (and any additional tests you write) using the command: 
```
npm test
```