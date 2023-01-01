// const express = require("express");
// const redis = require('redis');
// const client = redis.createClient();

var cors = require('cors')
const express = require('express');
const routes=require('./Routes')
const app = express();

 const port = process.env.PORT || 3005;


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.text());

app.use('/',routes)

// app.listen(3005);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


