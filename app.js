const path = require('path');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.Port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet({
    contentSecurityPolicy:({ 
    directives:{
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://maxcdn.bootstrapcdn.com/'],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        frameSrc: ["'self'"],
        imgSrc: ["'Self", 'https://stockx.imgix.net/'],
        fontSrc: ["'self'", 'fonts.googleapis.com', 'fonts.gstatic.com'],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      }
    }),
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', require('./routes/web'));

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});

