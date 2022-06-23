const Employee = require('../lib/Enemy.js');

test('creates an employee object', () => {
    const employee = new Enemy('Roger', 25, 'roger7c@yahoo.com');
  
    expect(employee.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
  });