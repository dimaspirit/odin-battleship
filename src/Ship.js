export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitsNumber = 0;
  }

  hit() {
    console.log('hitsNumber', this.hitsNumber);
  }

  isSunk() {
    console.log('isSunk', this.length === this.hitsNumber);
  }
}