// ==================================================
// Topic:
// ==================================================

// JavaScript Class Inheritance

// ==================================================
// Approach:
// ==================================================

// 1. Create a parent class `User`.
// 2. Add a `constructor()` to initialize the user's name.
// 3. Add a `createAccount()` method to the parent class.
// 4. Create a child class `Admin` using the `extends` keyword.
// 5. Add a constructor to the `Admin` class.
// 6. Use `super(name)` to call the parent `User` constructor.
// 7. Add an Admin-specific `deleteUser()` method.
// 8. Create an object using `new Admin()`.
// 9. Call `createAccount()` through the Admin object.
// 10. The Admin object can access `createAccount()` because it inherits it from `User`.
// 11. Call `deleteUser()` because it belongs directly to the `Admin` class.

// ==================================================
// Key Learning:
// ==================================================

// - `extends` → creates inheritance between classes.
// - `super()` → calls the parent class constructor.
// - `super.method()` → calls a parent class method.
// - A child class can access methods inherited from its parent.
// - A child class can have its own additional methods.
// - If a child class has a constructor, `super()` must be called
//   before using `this`.


class User {
    constructor(name) {
        this.name = name;
    }

    createAccount() {
        console.log(`${this.name} created an account!`);
    }
}

class Admin extends User {
    constructor(name, role) {
        super(name); // Calls parent class constructor
        this.role = role;
    }

    deleteUser() {
        console.log(`${this.name} deleted the user account!`);
    }
}

const admin1 = new Admin("Sudharsan", "Admin");

admin1.createAccount(); // Inherited from User
admin1.deleteUser();    // Admin's own method