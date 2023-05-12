const mongoose = require("mongoose");
import app from './app';

const port = 5000;

async function main() {
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
main().catch((err) => console.log(err));

