const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const umkmRoutes = require('./routes/umkmRoutes');

const app = express();

app.use(bodyParser.json());


connectDB();

app.use('/api', umkmRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${3000}`);
});
