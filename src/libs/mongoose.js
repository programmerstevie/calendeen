import mongoose from 'mongoose';
const uri = process.env.DATABASE_URL ?? null;

async function connectMongo() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } catch (err) {
    console.dir(err);
    console.error("Failed to connect to MongoDB:", err.message);
  }
}

export default connectMongo;