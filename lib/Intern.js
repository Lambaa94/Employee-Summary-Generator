// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern(name, id, email, school ){
    this.name = name,
    this.id = id,
    this.email = email
    this.school = school
    
}
Intern.prototype.getName = () => {this.name}
Intern.prototype.getId = () => {this.id}
Intern.prototype.getEmail = () => {this.email}
Intern.prototype.getSchool = () => {this.school}