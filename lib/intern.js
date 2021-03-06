const Employee = require("./employee.js");

class Intern extends Employee{
    constructor(name, email, id, schoolAttended){
        super(name, email, id);
        this.school = schoolAttended;
    }
    getRole(){
        return "Intern";
     }
     getSchool(){
         return this.schoolAttended;
     }
}

module.exports = Intern; 