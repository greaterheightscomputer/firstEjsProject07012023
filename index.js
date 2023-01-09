const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs'); //it connect the backend server with the content of views folder
app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true })); //it's a middleware to access data from frontend or clientside
app.use(bodyParser.urlencoded({ extended: true }));

let plNames = ['c', 'c++', 'java', 'python'];

//send a response to frontend
app.get('/', (req, res) => {
  //'/' its means home page
  res.status(200).render('index', { pageTitle: 'Home Page', plNames: plNames });
});

//sending data from the form in frontend and insert it onto plNames array
app.post('/', (req, res) => {
  const plName = req.body.plName;
  // console.log('plName= ' + plName);
  plNames.push(plName);
  // res.status(201).send('data is created');
  res.redirect('/');
});

app.get('/contact', (req, res) => {
  //'/contact' its means contact page
  res.status(200).render('contact', { pageTitle: 'Contact' });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
