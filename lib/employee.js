//Employee constructor function 
//Will be used across all other test files for manager,engineer, and intern.
class Employee{
    
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;

    }
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getRole(){
        return "Employee";
    };
    getEmail(){
        return this.email;
    }

}

module.exports = Employee;