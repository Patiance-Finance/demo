const axios = require("axios");
class Todos {
    async getTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`).catch(function (error) {
            if (error.response) {
                return error.response;
            }
        });
    }    
}

export const TodosService = new Todos();
