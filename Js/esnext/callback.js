const http = require('http')

const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    http.get(url, res => {
        let result = ''

        res.on('data', dados => {
            result += dados
        })

        res.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let name = []
getClass('A', student => {
    name = name.concat(student.map(a => `A: ${a.nome}`))
    getClass('B', student => {
        name = name.concat(student.map(a => `B: ${a.nome}`))
        getClass('C', student => {
            name = name.concat(student.map(a => `C: ${a.nome}`))
            console.log(name);   
        })   
    })
})