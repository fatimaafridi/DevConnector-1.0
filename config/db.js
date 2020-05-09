const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.connect(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connect');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
