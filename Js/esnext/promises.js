function speakAfter(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}

speakAfter(3, 'Que legal!')
    .then(phrase => phrase.concat('?!?'))
    .then(anotherPhrase => console.log(anotherPhrase))
    .catch(e => console.log(e))