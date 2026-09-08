function factorial(n) {
    // Validación para números negativos
    if (n < 0) return "El factorial no está definido para números negativos";

    let resultado = 1;

    for (let i = 2; i <= n; i++) {
        resultado *= i; // Multiplica resultado por el valor actual de i
    }

    return resultado;
}

// Ejemplo de uso:
const numero = 5;
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);
// Salida: El factorial de 5 es: 120