// TODO: Write code to define and export the Employee class
class Employee {


constructor(name, id, email ){
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