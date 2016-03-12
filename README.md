## Calculator

The calculator function takes an arithmetic expression as a string
and calculates the result obeying order of operations.

`calculate("2 * 5 - 4")` returns `6`

# Project 

The source files are under `jasmine/src`

This contains the definition of the calculator function as well as the expressionValidator that validates inputs the the calculator function.

# Specs

The specs are under `jasmine/spec`

Run the specs by opening `jasmine/SpecRunner.html` in a browser

# Information

There is one element of ES6 in here.  ES5 doesn't allow
special characters as keys in objects.  In ES6, the new Symbol type allows this.  So you'll need to run this repo in a modern browser that supports ES6.