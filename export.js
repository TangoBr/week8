const add = (num1, num2) => {
    if(typeof num1 === `number` && typeof num2 === `number`) {
        return (num1 + num2)
    }
}

const subtract  = (num1, num2) => {
    if(typeof num1 === `number` && typeof num2 === `number`) {
        return (num1 - num2)
    }
}

module.exports = {add, subtract};


