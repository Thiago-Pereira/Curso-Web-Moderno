const peso = 1.0;
const peso1 = Number('2.0');

console.log(peso, peso1);
console.log(Number.isInteger(peso));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso + avaliacao2 * peso1;
const media = total / (peso + peso1);

console.log(media.toFixed(2));
console.log(media.toString(2));