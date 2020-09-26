// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(name, id, email, officeNumber ){
    this.name = name,
    this.id = id,
    this.email = email
    this.officeNumber = officeNumber
    
}
Manager.prototype.getName = () => {this.name}
Manager.prototype.getId = () => {this.id}
Manager.prototype.getEmail = () => {this.email}
Manager.prototype.getOfficeNumber = () => {this.officeNumber}