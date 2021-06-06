const Manager = require("../lib/manager");

test("Sets office number with constructor argument", () => {
    const testValue = 100;
    const e = new Manager("David", 1, "david@test.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() returns \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("David", 1, "david@test.com", 100, "Manager");
    expect(e.getRole()).toBe(testValue);
});

test("Obtains office number with getOffice()", () => {
    const testValue = 100;
    const e = new Manager("David", 1, "david@test.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});