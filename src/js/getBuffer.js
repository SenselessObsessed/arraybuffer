export default function getBuffer(input) {
  const buffer = new ArrayBuffer(input.length);
  const buffer8 = new Uint8Array(buffer);
  for (let i = 0; i < buffer8.length; i += 1) {
    buffer8[i] = input.charCodeAt(i);
  }
  return buffer;
}
