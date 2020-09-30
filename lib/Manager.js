const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email)
        this.officeNumber = officeNumber,

            this.getOfficeNumber = () => this.officeNumber,
            this.getRole = () => this.constructor.name


    };
}
module.exports = Manager;