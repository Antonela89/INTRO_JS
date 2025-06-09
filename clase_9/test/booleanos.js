// función flecha sin llaves {} -> return implícito
const booleanos = (condicion1, condicion2) => 
    `Combinaciones de las condiciones
    ${condicion1} && ${condicion2} = ${condicion1 && condicion2}
    ${condicion1} || ${condicion2} = ${condicion1 || condicion2}
    !${condicion1} = ${!condicion1}
    !${condicion2} = ${!condicion2}
    !(${condicion1} && ${condicion2}) = ${!(condicion1 && condicion2)}
    !(${condicion1} || ${condicion2}) = ${!(condicion1 || condicion2)}`;


if (require.main === module) {
    booleanos();
};

module.exports = {booleanos};