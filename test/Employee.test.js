const Employee = require("../lib/Employee")

test("Can create employee object", () => 
{
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
})

test("Can set name", () => {
    const name = "Travis";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  test("Can set id", () => {
    const testId = 10;
    const employee = new Employee('Travis', testId);
    expect(employee.id).toBe(testId);
  });

  test("Can set email", () => {
    const testEmail = "Travis@aol.com";
    const employee = new Employee("Travis", 10, testEmail);
    expect(employee.email).toBe(testEmail);
  });

  test("Can get name", () => {
    const name = "Travis";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
  });

  test("Can get id", () => {
    const testId = 10;
    const employee = new Employee('Travis', testId);
    expect(employee.getId()).toBe(testId);
  });

  test("Can get email", () => {
    const testEmail = "Travis@aol.com";
    const employee = new Employee("Travis", 10, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });

  test("Can get role", () => {
    const testValue = "Employee";
    const employee = new Employee("Travis", 10, "Travis@aol.com");
    expect(employee.getRole()).toBe(testValue);
  });