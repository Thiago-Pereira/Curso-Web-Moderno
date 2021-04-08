let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
}) 

p.then(valor => console.log(valor))