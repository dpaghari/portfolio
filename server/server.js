const express = require('express');
const app = express();

// App Settings
app.use(express.static('public'));
// app.set('view engine', 'pug');

//############
// ROUTING
//############
app.get('/', function(req, res) {
  res.sendFile('index.html');
});



app.listen(process.env.PORT || 3000, function() {
  console.log('Portfolio listening on port 3000!');
});
