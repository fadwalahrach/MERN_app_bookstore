const server = require('./config/db')
const {User} = require('./models/User')
const {Book} = require('./models/Book')
const books = require('./data/books')
const users = require('./data/users')
console.log('Seeding data .... ')
server


const seedingData = async () => { 
  
    try {
        await User.deleteMany()
        await Book.deleteMany()
    
        await User.insertMany(users)

        await Book.insertMany(books)

        console.log('Data is seeded ! ')
        process.exit()
    }catch(error){

    }
} 

const deleteAllData = async () => { 
    await User.deleteMany()
    await Book.deleteMany()


    console.log('Data is deleted ! ')
    process.exit()
} 

if(process.argv[2] ==='seeding') {
    seedingData()
} else if(process.argv[2] ==='delete_all') {
    deleteAllData()
}
