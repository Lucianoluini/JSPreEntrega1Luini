/*
Calcula el Índice de masa corporal.
1- Solicita nombre de la persona
2- Solicita peso y altura
3- Verifica si son valores válidos
4- Realiza el cálculo PESO = (ALTURA * ALTURA)
5- Imprime resultado en pantalla
6- Solicita confirmación de reinicio de bucle
7- Imprime saludo de despedida
*/

function obtenerNombre() {
    while (true) {
        const NOMBRE = prompt('Ingrese el nombre de la persona:');
        if (NOMBRE === null || NOMBRE === '') {
            alert('Por favor, ingrese un nombre válido.');
        } else {
            return NOMBRE;
        }
    }
}

function obtenerNumero(mensaje) {
    while (true) {
        const VALOR = +prompt(mensaje);
        if (!isNaN(VALOR)) {
            return VALOR;
        } else {
            alert('Por favor, ingrese un valor numérico válido.');
        }
    }
}

function calcularIMC(imc) {
    if (imc < 18.5) {
        return 'Bajo peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidad';
    }
}

function main() {
    const CATEGORIAS = ['Bajo peso', 'Peso normal', 'Sobrepeso', 'Obesidad'];

    while (true) {
        const NOMBRE = obtenerNombre();
        const PESO = obtenerNumero(`Ingrese el peso de ${NOMBRE} en kg:`);
        const ALTURA = obtenerNumero(`Ingrese la altura de ${NOMBRE} en m:`);

        const IMC = PESO / (ALTURA * ALTURA);
        const CATEGORIA = calcularIMC(IMC);

        const RESULTADO = `Resultados para ${NOMBRE}:\n`
            + `Peso: ${PESO} kg\n`
            + `Altura: ${ALTURA} m\n`
            + `IMC: ${IMC}\n`
            + `Categoría: ${CATEGORIA}`;

        alert(RESULTADO);

        const RESPUESTA = prompt('¿Desea calcular el IMC para otra persona? (S/N)');
        if (RESPUESTA.toLowerCase() !== 's') {
            break;
        }
    }

    alert('Muchas gracias por participar');
}

main();
