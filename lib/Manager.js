const Employee = require("./Employee")
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        // if (isNaN(officeNumber)) {
        //     throw new Error("You must enter a valid office number.");
        // };
        
        super(name, id, email)
        this.officeNumber = officeNumber,

            this.getOfficeNumber = () => this.officeNumber,
            this.getRole = () => this.constructor.name


    };
}
module.exports = Manager;