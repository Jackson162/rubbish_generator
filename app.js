const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const generateRubbish = require('./generate_rubbish');
const checked = require('./checked');
//template engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//static file
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: 'true' }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const career = req.body.career;
    console.log('career', career)
    const rubbish = generateRubbish(career);
    const options = checked(career);
    console.log('options', options)
    res.render('index', { options, rubbish });
})


app.listen(port, () => {
    console.log(`This server is listening to http://localhost:${port}.`)
})