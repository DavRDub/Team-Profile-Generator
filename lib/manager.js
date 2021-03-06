const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.office = officeNumber;
    }
    getRole(){
        return "Manager" 
     }
     getOfficeNumber(){
         return this.officeNumber
     }
}

module.exports = Manager; 