let alturaCm = 179;
let alturaM = parseFloat((alturaCm / 100).toFixed(2));
console.log(alturaM);
let pesoKgr = 62.4;
let alturaMR = parseFloat((alturaCm / 100).toFixed(0));
console.log(alturaMR);
let pesoR = parseInt(pesoKgr);
console.log(pesoR);

let max_value_JS = Number.MAX_VALUE;
let max_mas_uno = max_value_JS + 1;
console.log(max_value_JS);
console.log(max_mas_uno);
console.log("El valores son iguales? ", max_mas_uno == max_value_JS);
