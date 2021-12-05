//this doesn't work yet... this is for demo purposes
const getUser = require('./src/getUser')

getUser(1, (user) => {
    console.log(user)
})

getUser(2, (user) => {
    console.log(user)
})

const sum = 1 + 3
console.log(sum)