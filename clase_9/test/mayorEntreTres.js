const mayorEntreTres = (num1,num2,num3) => {
    if (isNaN(num1) === false && isNaN(num2) === false && isNaN(num3) === false ) {
        if (num1 === num2 && num2 === num3) {
            return 'Los tres números son iguales.';
        } else if (num1 >= num2 && num1 >= num3) {
            return `El primer número: ${num1} es el mayor.`;
        } else if (num2 >= num1 && num2 >= num3) {
            return `El segundo número: ${num2} es el mayor.`;
        } else {
            return `El tercer número: ${num3} es el mayor.`
        }
    } else {
        if (isNaN(num1)) {
            return 'El primer número no es válido, corrígelo';
        }
        if (isNaN(num2)) {
             return 'El segundo número no es válido, corrígelo';
        }
        if (isNaN(num3)) {
             return 'El tercer número no es válido, corrígelo';
        }
    }
}

if (require.main === module) {
    mayorEntreTres();
}; 

module.exports = { mayorEntreTres };