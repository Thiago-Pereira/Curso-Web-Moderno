// não aceita repetição e não é indexado
const club = new Set()
club.add('Vasco')
club.add('São Paulo').add('Palmeiras').add('Santos')
club.add('Flamengo')
club.add('Vasco')

console.log(club)
console.log(club.size)
console.log(club.has('vasco'))
console.log(club.has('Vasco'))
club.delete('Flamengo')
console.log(club.has('Flamengo'))