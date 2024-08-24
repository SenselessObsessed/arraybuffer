export default class Charapter {
  constructor(name, attack, defence, type = null) {
    if (name.length < 2 || name.lenght > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this._attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }

    this.level += 1;
    this._attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
