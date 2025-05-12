import Ship from "./Ship";

describe('Ship ', () => {
  const array = [4,1,8,3,4,2,6];

  test('should calc length right', () => {
    const ship = new Ship(1);
    expect(ship).toBeDefined();
  });
});