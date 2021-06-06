const Employee = require("../lib/employee");

test("Set Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Set name with constructor arguments", () => {
    const name = "David";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Set id with constructor argument", () => {
    const testValue = 100;
    const e = new Employee("David", testValue);
    expect(e.id).toBe(testValue);

});


test("Set email with constructor argument", () => {
    const testValue = "david@test.com";
    const e = new Employee("David", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Obtains name with getName()", () => {
    const testValue = "David";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Obtains id with getId()", () => {
    const testValue = 100;
    const e = new Employee("David", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Obtains email with getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("David", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("David", 1, "david@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});

test("Set Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Set email with constructor argument", () => {
    const testValue = "david@test.com";
    const e = new Employee("David", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Obtains name with getName()", () => {
    const testValue = "David";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Obtains id with getId()", () => {
    const testValue = 100;
    const e = new Employee("David", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Obtains email with getEmail()", () => {
    const testValue = "david@test.com";
    const e = new Employee("David", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("David", 1, "david@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});