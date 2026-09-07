function factorial(n) {
    // Caso base: el factorial de 0 y 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Caso recursivo: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Ejemplo de uso:
const numero = 5;
const resultado = factorial(numero);

console.log(`El factorial de ${numero} es: ${resultado}`);
// Salida: El factorial de 5 es: 120