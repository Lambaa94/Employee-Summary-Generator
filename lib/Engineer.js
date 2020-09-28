const Employee = require("./Employee")

class Engineer extends Employee {

    constructor(name, id, email, github) {

        if (!github) {
            throw new Error("Please enter a github.")
        }

        super(name, id, email)
        this.github = github,

            this.getGithub = () => this.github,
            this.getRole = () => this.constructor.name

    };
}
module.exports = Engineer;