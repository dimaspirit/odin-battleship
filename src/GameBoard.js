export default class GameBoard {
  constructor() {
    this.board = [];
  }

  receiveAttack(x, y) {
    console.log('receiveAttack', x, y);
    // sends the ‘hit’ function to the correct ship
    // records the coordinates of the missed shot
  }
}