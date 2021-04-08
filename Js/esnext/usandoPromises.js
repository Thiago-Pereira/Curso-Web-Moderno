const http = require('http')

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''
    
            res.on('data', dados => {
                result += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// let name = []
// getClass('A').then(student => {
//     name = name.concat(student.map(a => `A: ${a.nome}`))
//     getClass('B').then(student => {
//         name = name.concat(student.map(a => `B: ${a.nome}`))
//         getClass('C').then(student => {
//             name = name.concat(student.map(a => `C: ${a.nome}`))
//             console.log(name);   
//         })   
//     })
// })

Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(turmas => [].concat(...turmas))
    .then(student => student.map(aluno => aluno.nome))
    .then(x => console.log(x))
    .catch(e => console.log(e.message))

getClass('D').catch(e => console.log(e.message))