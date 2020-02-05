const express = require('express');
const app = express();
// var cors = require('cors');

const port = process.env.PORT || 5000;
// const port = 5000;
app.use(express.static('public'));
// app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a Single Route'})
// })

app.listen(port, () => {
  console.log('proxy server running on port, ',port);
});