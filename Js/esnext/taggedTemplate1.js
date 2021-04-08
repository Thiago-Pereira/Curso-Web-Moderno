function tag(part, ...values) {
    console.log(part)
    console.log(values)
    return 'String'
}

const student = 'Gui'
const status = 'Aprovado'
console.log(tag `${student} está ${status}`)