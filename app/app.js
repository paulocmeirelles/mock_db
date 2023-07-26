import data from "./repository/db.js";
import filters from "./helpers/filter.js";

console.log("Teste para a chave HOME");
console.log(filters.filterArray(data.mock, "home"));
console.log("Teste para a chave register");
console.log(filters.filterArray(data.mock, "register"));
console.log("Teste para a chave store");
console.log(filters.filterArray(data.mock, "store"));
console.log("Teste para a chave inválido");
console.log(filters.filterArray(data.mock, "hjgdaisdghiuashdiahs"));
