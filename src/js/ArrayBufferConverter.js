export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint8Array(this.buffer);

    return String.fromCharCode(...bufferView);
  }
}
