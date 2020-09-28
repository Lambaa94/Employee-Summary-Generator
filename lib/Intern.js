const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, school) {

        // if (!school) {
        //     throw new Error("Please enter a school name.")
        // };
        super(name, id, email)

        this.school = school,


            this.getSchool = () => this.school,
            this.getRole = () => this.constructor.name


    };
}

module.exports = Intern;