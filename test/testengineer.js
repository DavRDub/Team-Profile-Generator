const Engineer = require("../lib/engineer");

test("Sets GitHub account with constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("David", 1, "david@test.com", testValue, "Engineer");
    expect(e.github).toBe(testValue);
});

test("getRole() returns \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("David", 1, "david@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("Obtains GitHub username with getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("David", 1, "david@test.com", testValue, "Engineer");
    expect(e.getGithub()).toBe(testValue);
});