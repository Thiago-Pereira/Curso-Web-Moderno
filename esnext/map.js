const tecnology = new Map()
tecnology.set('react', { framework: false })
tecnology.set('angular', { framework: true })

console.log(tecnology.get('react').framework)

const keyDiverse = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

keyDiverse.forEach((value, key) => {
    console.log(key, value)
})

console.log(keyDiverse.has(123))
keyDiverse.delete(123)
console.log(keyDiverse.has(123))
console.log(keyDiverse.size)