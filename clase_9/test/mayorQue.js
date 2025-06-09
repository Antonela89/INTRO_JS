const mayorQue = (numero1, numero2) => {
    if (numero1 === numero2) {
         return `Los números son iguales.`; 
    } else if (numero1 < numero2) {
        return `El número ${numero2} es mayor que ${numero1}.`;
    } else {
       return `El número ${numero1} es mayor que ${numero2}.`;
    }
}

if (require.main === module) {
    mayorQue();
};

module.exports = {mayorQue};
