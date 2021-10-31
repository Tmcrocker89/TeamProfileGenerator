const Engineer = require("../lib/Engineer")

test("Can create engineer object", () => 
{
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object')
})

test("Can set GitHUb account", () => 
{
    const testValue = "TMCrocker89";
    const engineer = new Engineer("Travis", 10, "Travis@aol.com", testValue);
    expect(engineer.github).toBe(testValue);
});
  
test("Can get role", () => 
{
    const testValue = "Engineer";
    const engineer = new Engineer("Travis", 10, "Travis@aol.com", "GitHubUser");
    expect(engineer.getRole()).toBe(testValue);
});
  
test("Can get GitHub username", () => 
{
    const testValue = "TMCrocker89";
    const engineer = new Engineer("Travis", 10, "Travis@aol.com", testValue);
    expect(engineer.getGithub()).toBe(testValue);
});