import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`mongodb connect: ${conn.connection.host}`)
    }catch(error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB