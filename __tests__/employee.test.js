const Employee = require('../lib/Enemy.js');

test('creates an employee object', () => {
    const employee = new Employee('Roger', 25, 'roger7c@yahoo.com');
  
    expect(employee.name).toBe(expect.any(String));
    
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
  });

  test("gets employee's name", () => {
    const employee = new Employee('Roger', 25, 'roger7c@yahoo.com');
  
    expect(employee.getName()).toEqual(expect.any(String));
  });

  test("gets employee's ID", () => {
    const employee = new Employee('Roger', 25, 'roger7c@yahoo.com');
  expect(employee.getId()).toEqual(expect.any(Number));
  });

  test("gets employee's email", () => {
    const employee = new Employee('Roger', 25, 'roger7c@yahoo.com');
  
    expect(employee.getEmail()).toEqual(expect.any(String));
  });

