import { handleStatus } from '../utils/promise-helpers.js';
import { partialize } from '../utils/operators.js';

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo === code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

export const notasService = {

    listAll() {
        return fetch(API)
        .then(handleStatus)
        .catch(err => {
            console.log(err);
            Promise.reject('Não foi possível obter as notas fiscais');
    });
},
    sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code);
        // ainda falta realizar a composição dessa função com as 
        // outras para criar novamente sumItems, que não existe
        return this.listAll().then(sumItems(code));
    }
};