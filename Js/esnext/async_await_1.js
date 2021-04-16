function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve('Vish'), tempo)
    })
}

/**esperarPor()
    .then(() => console.log('Executando Promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 3...'))
    .then(esperarPor) **/

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornaValor()

    await esperarPor(1500)
    console.log(`Async/Await 1 ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await 2 ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await 3 ${valor + 2}...`)

    return valor + 3 
}

async function executarVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarVerdade()