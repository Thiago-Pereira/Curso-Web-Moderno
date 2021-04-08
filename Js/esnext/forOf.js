for (let letter of "Cod3r") {
    console.log(letter)
}

const subjectEcma = ['Map', 'Set', 'Promise']

for (let i in subjectEcma) {
    console.log(i)
}

for (let subject of subjectEcma) {
    console.log(subject)
}

const subjectMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let subject of subjectMap) {
    console.log(subject)
}

for (let key of subjectMap.keys()) {
    console.log(key)
}

for (let value of subjectMap.values()) {
    console.log(value)
}

for (let [key, value] of subjectMap.entries()) {
    console.log(key, value)
}

const s = new Set(['a', 'b', 'c'])
for (let letter of s) {
    console.log(letter)
}