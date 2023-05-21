// Classes are a template for creating objects.
// They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have
// some syntax and semantics that are unique to classes.

// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle2 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle3 = class Rectangle4 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// 1. Constructor
// The constructor method is a special method for creating
// and initializing an object created with a class.
// There can only be one special method
// with the name "constructor" in a class

// A constructor can use the super keyword to call the constructor of the super class.

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Alternatively, if your instance properties' values do not depend on the constructor's arguments, you can define them as class fields.
