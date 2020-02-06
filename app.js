const express = require('express');

const app = express();
const router = express.Router();

app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');


router.get('/',(req,res) =>{
    res.render("mainpage");
});

router.get('/weather',function(req,res){
    res.render('weather');
});

router.get('/email',(req,res) => {
    res.render("email");
})

router.get('/music',function(req,res){
    res.render('music');
});


app.use('/',router);

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log("Server listening on port 3000");
});