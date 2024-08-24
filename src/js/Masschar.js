import Charapter from './Charapter';

export default class Masschar extends Charapter {
  constructor(name, attack, defence, type = null, distance = 1, stoned = false) {
    super(name, attack, defence, type);

    this.distance = distance;
    this._stoned = stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    if (this.stoned) {
      this._attack -= Math.log2(this.distance) * 5;
    }

    if (this.distance > 1) {
      let num = 0;
      for (let i = 1; i < this.distance; i++) {
        num += 1;
      }
      const percent = Number(`${num}0`);
      this._attack -= (this._attack / 100 * percent);
    }

    return Math.floor(this._attack);
  }
}
