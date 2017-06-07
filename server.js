var express = require('express')
var app = express()
app.set('view engine', 'ejs')

app.post('/', function (req, res) {
//cal(caute all the numbers from 1 to 100 and print  (PS. I need coffe )
  var oddNumberParadox="";
    var userInput = req.params.number;
    var isOdd = false;
    if (userInput%2==0){
      isOdd == false
    }else{
      isOdd == true;
    }



  for(var x=1;x<5001;){
    console.log(x)
    oddNumberParadox+=x+" \n";
    x+=2;

}
  res.render('result', {isOdd})

})

app.get('/', function(req,res){
res.render('index')



})

app.get('/:value', function(req,res){
  res.send(req.params.value);
})


app.listen(8080)
