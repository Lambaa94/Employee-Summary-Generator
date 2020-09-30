const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)

        this.school = school,


            this.getSchool = () => this.school,
            this.getRole = () => this.constructor.name


    };
}

module.exports = Intern;