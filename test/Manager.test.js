const Manager = require("../lib/Manager")

test("Can create Manager object", () => 
{
    const manager = new Manager();
    expect(typeof(manager)).toBe('object')
})

test("Can set office number", () => {
    const testOfficeNum = 100;
    const manager = new Manager("Foo", 1, "Travis@aol.com", testOfficeNum);
    expect(manager.officeNumber).toBe(testOfficeNum);
  });
  
  test('Can get roll', () => {
    const testValue = "Manager";
    const manager = new Manager("Foo", 1, "Travis@aol.com", 100);
    expect(manager.getRole()).toBe(testValue);
  });
  
  test("Can get office number", () => {
    const testOfficeNum = 100;
    const manager = new Manager("Foo", 1, "Travis@aol.com", testOfficeNum);
    expect(manager.getOfficeNumber()).toBe(testOfficeNum);
  });