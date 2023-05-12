import mongoose from 'mongoose';
import app from './app';

const port = 5000;

async function run() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practicedb");
    console.log("Mongodb Connect");
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
run().catch((err) => console.error(err));

