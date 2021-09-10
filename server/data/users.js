const bcrypt = require('bcryptjs')

const users = [
    {
        username: 'admin',
        email:'root@adming.com',
        password: bcrypt.hashSync('root123', 10),
        isAdmin: true
    },

    {
        username: 'user',
        email:'user@adming.com',
        password: bcrypt.hashSync('123456', 10)   
    },
    {
        username: 'zakaria',
        email:'zakaria@adming.com',
        password: bcrypt.hashSync('zakaria123', 10)   
    }
]

module.exports = users