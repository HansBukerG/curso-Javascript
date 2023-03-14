const axios = require('axios');
const functions = {
    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstName: 'Hans',
            lastName: 'Vilchez'
        }
        return user;
    },
    divide: (numA,numB) => {
        if (numA ==0 || numB == 0) { return 0 }
        return numA/numB
    },
    // fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    //     .then(response => response.data)
    //     .catch(error => 'error'),
    fetchUser: async () =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        return response.data
    },
 }


 module.exports = functions;