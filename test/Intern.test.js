const Intern = require("../lib/Intern")

test("Can create Intern object", () => 
{
    const intern = new Intern();
    expect(typeof(intern)).toBe('object')
})

test("Can set school", () => {
    const testSchool = "Clemson";
    const intern = new Intern("Travis", 10, "Travis@aol.com", testSchool);
    expect(intern.school).toBe(testSchool);
  });
  
  test("Can get roll", () => {
    const testValue = "Intern";
    const intern = new Intern("Travis", 10, "Travis@aol.com", "Clemson");
    expect(intern.getRole()).toBe(testValue);
  });
  
  test("Can get school", () => {
    const testSchool = "Clemson";
    const intern = new Intern("Travis", 10, "Travis@aol.com", testSchool);
    expect(intern.getSchool()).toBe(testSchool);
  });