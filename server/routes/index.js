var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('sa');
});
router.get('/teste/:hum/:temp/:solo', function(req, res, next) {
  console.log(req.params)
  let temperatura = parseFloat(req.params.temp);
  let humidadeAr = parseFloat(req.params.hum)
  let humidadeSolo = parseFloat(req.params.solo);
  let stringFinal = ""
  if(temperatura >= 21.9 || humidadeAr >= 80.0){
    stringFinal += "abrir janelas";
  }else if(temperatura <=19){
    stringFinal += "ligar luzes de aquecimento";
  }else{
    stringFinal += "swag";
  }
  //humidadeSolo ∈ [0,1024]
  if(humidadeSolo < 300){
    res.send(stringFinal + "\nregar")
  }else{
    res.send(stringFinal)
  }
});



module.exports = router;
