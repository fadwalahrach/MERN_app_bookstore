const bcrypt = require('bcryptjs')


const users = [
    {
        username: 'admin',
        email:'root@adming.com',
        password: 'stuff1234',
        isAdmin: true
    },

    {
        username: 'user',
        email:'user@adming.com',
        password: 'stuff1234'
    
    },
    {
        username: 'zakaria',
        email:'zakaria@adming.com',
        password: 'stuff1234'  
    }
]

module.exports = users