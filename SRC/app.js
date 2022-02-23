const  express= require('express');
const res = require('express/lib/response')
const app= express();
//const bodyParser=require('body-Parser');

const musicas = require('./routes/MusicasRoutes');
const index= require('./routes/index')

//app.use(bodyParser.json())
app.use(express.json());

const cors = require('cors')
app.use(cors());

app.use(express.static('public'))

app.use('/',index);
app.use('/musicas', musicas);


app.get('*',(req,res)=>{
    res.status(404).sendFile('./views/SoundM.html',{root__dirname})
})

module.exports=app