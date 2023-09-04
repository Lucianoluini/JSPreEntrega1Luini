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

    let categorias = ['Bajo peso', 'Peso normal', 'Sobrepeso', 'Obesidad'];

    while (true) {
        const NOMBRE = prompt('Ingrese el nombre de la persona:');
        if (NOMBRE === null || NOMBRE === '') {    /// Verifica que se haya ingresado un valor correcto
            alert('Por favor, ingrese un nombre válido.');
            continue;
        }

        const PESO = +prompt(`Ingrese el peso de ${NOMBRE} en kg:`);
        const ALTURA = +prompt(`Ingrese la altura de ${NOMBRE} en m:`);

        if (isNaN(PESO) || isNaN(ALTURA)) {    ///Verifica que se haya ingresado un valor numérico para las constantes
            alert('Por favor, ingrese valores válidos para peso y altura.');
            continue;
        }

        const IMC = PESO / (ALTURA * ALTURA);  ///REaliza el cálculo con los valores ingresados

        let categoria = '';

        if (IMC < 18.5) {
            categoria = 'Bajo peso';
        } else if (IMC < 24.9) {
            categoria = 'Peso normal';
        } else if (IMC < 29.9) {
            categoria = 'Sobrepeso';
        } else {
            categoria = 'Obesidad';
        }

        const RESULTADO = `Resultados para ${NOMBRE}:\n`   ///Imprime los resultados en líneas diferentes
            + `Peso: ${PESO} kg\n`
            + `Altura: ${ALTURA} m\n`
            + `IMC: ${IMC}\n`
            + `Categoría: ${categoria}`;

        alert(RESULTADO);

        const RESPUESTA = prompt('¿Desea calcular para otro paciente? (S/N)');
        if (RESPUESTA !== 's') {
            break;    /// Finaliza el bucle principal si la respuesta no diferente a "s"
        }
    }

    alert('Muchas gracias por participar');