

function calculapropina(total_cuenta, porcentaje_propina) {


let propina = total_cuenta * (porcentaje_propina / 100);

console.log(propina)

return Number(propina.toFixed(3));

}


console.log(calculapropina(100, 20));