import mongoose from 'mongoose';

mongoose
  .connect('mongodb://dev:secret@mongodb:27017/test')
  .then(() => console.log('Database is connected'))
  .catch(err => console.log(err));
