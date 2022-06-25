const Employee = require('../lib/Enemy.js');

test('creates an employee object', () => {
    const employee = new Enemy('Roger', 25, 'roger7c@yahoo.com');
  
    expect(employee.name).toBe(expect.any(String));
    expect(employee.email).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));

  });

  test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
  });