//Harsh Subhash Sharma, 301303949
const express = require('express');
const app = express();
const path = require('path');


const routes = require('./routes/routes');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.use('/', routes); 


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});