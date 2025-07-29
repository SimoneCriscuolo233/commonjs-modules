const name = (firstName, lastName) => ({ firstName, lastName});

module.exports = name
console.log(name(`a`, `b`))