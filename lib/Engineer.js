// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, github) {
    this.name = name,
        this.id = id,
        this.email = email,
        this.github = github,
        this.getGithub = () => this.github,
        this.getRole = () => this.constructor.name

};

module.exports = Engineer;