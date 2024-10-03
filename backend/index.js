import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import cors from 'cors';

//express setup
const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const URI=process.env.MONGODB_URI_LOCAL


const PORT=process.env.PORT  || 4000

//database connection mongo ATlas
// async function connectToDatabase(){
//     try{
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log('Connected to MongoDB')
//     }catch(err){
//         console.error(err)
//         throw new Error('Could not connect to MongoDB')
//     }
// }
// connectToDatabase()

//Loacl MongodB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    })
   .then(() => console.log('MongoDB Connected...'))
    
} catch (err) {
    console.error(err.message)
    
 }

//middleware routes


app.use('/book', bookRoute)
app.use('/user', userRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})