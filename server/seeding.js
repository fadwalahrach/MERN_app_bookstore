const server = require('./config/db')
const {User} = require('./models/User')
const {Book} = require('./models/Book')
const books = require('./data/books')
const users = require('./data/users')
console.log('Seeding data .... ')
server


const seedingData = async () => { 
  
    try {
        // console.log('something here is working')
       await User.deleteMany()
       await Book.deleteMany()
        console.log('destroy previous data....')
       const createdUsers = await User.create(users)
       const adminUser = createdUsers.map(element => element.isAdmin ? element : '')
       const [ admin] = adminUser
       const booksAdmin = books.map((book) => {
           return {...book, user_id: admin._id}
       })

       await Book.create(booksAdmin)
       console.log('Data Imported')
       process.exit()
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
} else if(process.argv[2] ==='destroy') {
    deleteAllData()
} else {
    console.log('Dont know this command = sorry')
    process.exit()
}
