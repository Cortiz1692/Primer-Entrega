import mongoose from "mongoose"

const URI="mongodb+srv://christian:12345@my-cluster-node.2ogp9yf.mongodb.net/ecommerce?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....")