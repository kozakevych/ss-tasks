const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname});
  // res.sendFile(__dirname + '/index.html');
  
  // app.use(express.static(__dirname));
  // res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(3000);
