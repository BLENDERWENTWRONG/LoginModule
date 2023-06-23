const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoute = require ('./routes/userRoute')
const roleRoute = require ('./routes/roleRoute')
const authRoute = require ('./routes/auth')

// CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) => {
  console.error('DB connection error:', err);
});

db.once('open', () => {
  console.log('DB connected successfully');
});

// APP
const app = express();
const port = 3300;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SERVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//EndPoints

app.use('/api/user',userRoute)
app.use('/api/role',roleRoute)
app.use('/api/',authRoute)

