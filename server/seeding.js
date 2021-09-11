const server = require('./config/db')
const {User} = require('./models/User')
const {Book} = require('./models/Book')
const books = require('./data/books')
const users = require('./data/users')
console.log('Seeding data .... ')
server
console.log(users)

const seedingData = async () => { 
  
    try {
        // console.log('something here is working')
       await User.deleteMany()
       await Book.deleteMany()
    
       await User.insertMany(users)
        
       await Book.insertMany(users)

        // console.log('Data is seeded ! ')
        process.exit(1)
    }catch(error)  {
        console.log(error)
    }
} 

const deleteAllData = async () => { 
    await User.deleteMany()
    await Book.deleteMany()


    console.log('Data is deleted ! ')
    process.exit(1)
} 

if(process.argv[2] ==='seeding') {
    seedingData()
} else if(process.argv[2] ==='delete_all') {
    deleteAllData()
}
