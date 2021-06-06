const Intern = require("../lib/intern");

test("Sets school with constructor", () => {
    const testValue = "Dab";
    const e = new Intern("David", 1, "david@test.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("getRole() returns \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("David", 1, "david@test.com", "UoW", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("Obtains school with getSchool()", () => {
    const testValue = "Dab";
    const e = new Intern("David", 1, "david@test.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});