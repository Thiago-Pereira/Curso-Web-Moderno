const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Olá'
    }
}

console.log(pessoa.nome, pessoa.ola())

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'au au'
    }
}

console.log(new Cachorro().falar())