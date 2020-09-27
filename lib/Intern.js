// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern(name, id, email, school) {
    this.name = name,
        this.id = id,
        this.email = email,
        this.school = school,
        this.getId = () => this.id,
        this.getName = () => this.name,
        this.getEmail = () => this.email,
        this.getSchool = () => this.school,
        this.getRole = () => this.constructor.name


};


module.exports = Intern;