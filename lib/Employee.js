// TODO: Write code to define and export the Employee class

function Employee(name, id, email ){
    this.name = name,
    this.id = id,
    this.email = email 
    
}

Employee.prototype.getName = () => {this.name}
Employee.prototype.getId = () => {this.id}
Employee.prototype.getEmail = () => {this.email}




module.exports = Employee