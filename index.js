//lista de compras
const list = ["yogur", "leche", "papel", "arroz", "azucar"];

list.push("Aceite Girasol");
console.log(list);
list.splice(list.indexOf("Aceite Girasol"), 1);
console.log(list);

//lista de peliculas
const peliculas = [
    {
        titulo: "Interestelar",
        director: "Christopher Nolan",
        fecha: "06-11-2014",
    },
    {
        titulo: "Click: Perdiendo el control",
        director: "Frank Coraci",
        fecha: "17-08-2006",
    },
    {
        titulo: "Soucer Code",
        director: "Duncan Jones",
        fecha: "01-04-2011",
    },
];

const p_1_enero_2010 = peliculas.filter(({ fecha }) => {
    const res = Number(fecha.slice(6)) > 2010;
    return res;
});
console.log(p_1_enero_2010);

const directores = peliculas.map(({ director }) => director);
console.log(directores);

const titulos = peliculas.map(({ titulo }) => titulo);
console.log(titulos);

const concat_d_t = directores.concat(titulos);
console.log("Lista con concat: ", concat_d_t);

const factor_propagacion = [...directores, ...titulos];
console.log("Lista con factor de propagacion: ", concat_d_t);
