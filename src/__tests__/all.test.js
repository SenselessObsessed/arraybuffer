import Charapter from '../js/Charapter';
import Masschar from '../js/Masschar';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import ArrayBufferConverter from '../js/ArrayBufferConverter';
import getBuffer from '../js/getBuffer';

test('should be a normal getter attack and stoned', () => {
    const mag = new Magician('Vasya');
    mag.levelUp();
    mag.stoned = true;
    mag.attack = 100;
    mag.distance = 2;
    expect(mag.attack).toBe(85);
    expect(mag.level).toBe(2);

    mag.damage(1000);
    expect(mag.health).toBe(-420)
    mag.health = 0;
    mag.damage(5)
    expect(mag.health).toBe(0)
    expect(() => mag.levelUp()).toThrow('Нельзя повысить уровень умершего');

    const mag2 = new Magician('Vasya');
    mag2.stoned = true;
    mag2.attack = 100;
    mag2.distance = 1;
    expect(mag2.attack).toBe(100);

    const daemon = new Daemon('Kirill');
    daemon.stoned = false;
    daemon.attack = 100;
    daemon.distance = 2;
    expect(daemon.attack).toBe(90);
});

test('should be a valid buffer convertor', () => {
    const bufferConverotr = new ArrayBufferConverter();
    const buffer = getBuffer('Hello world!');
    bufferConverotr.load(buffer);
    const result = bufferConverotr.toString();
    expect(result).toBe('Hello world!')
});

test('should be throw error on uncorrect name', () => {
    const char = new Charapter('Vova');
    const mass = new Masschar('Vlad');
    expect(() => new Daemon('d')).toThrow('Имя должно быть от 2 до 10 символов');
});