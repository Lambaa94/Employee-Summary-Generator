// TODO: Write code to define and export the Employee class
var validator = require("email-validator")

class Employee {


    constructor(name, id, email) {
        if (!name) {
            throw new Error("You must enter a name.");
        };

        if (isNaN(id)) {
            throw new Error("Please enter an ID number.");
        };

        if (!validator.validate(email)) {
            throw new Error("Please enter a valid email.")
        };



        this.name = name,
            this.id = id,
            this.email = email,
            this.getId = () => this.id,
            this.getName = () => this.name,
            this.getEmail = () => this.email,
            this.getRole = () => this.constructor.name

    };
}

module.exports = Employee;