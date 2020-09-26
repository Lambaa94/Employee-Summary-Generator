// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, github ){
    this.name = name,
    this.id = id,
    this.email = email
    this.github = github
    
}
Engineer.prototype.getName = () => {this.name}
Engineer.prototype.getId = () => {this.id}
Engineer.prototype.getEmail = () => {this.email}
Engineer.prototype.getGithub = () => {this.github}