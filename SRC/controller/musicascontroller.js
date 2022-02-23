const req = require('express/lib/request')
const res = require('express/lib/response')
const musicas= require("../model/musicas.json");
const fs = require("fs")

const getAll=(req,res)=>{
    console.log(req.url)
    res.status(200).send(musicas)
}

const getByID=(req,res)=>{
    const id = req.params.id

    const musicaFiltrada=musicas.find(
        (musica)=>musica.id == id)
        res.status(200).send(musicafiltrada)  
}


const PostMuisicas =(req,res)=>{
    console.log(req.body);

    const {id, titulo, album, artista}= req.body;
    musicas.push({id, Titulo, Album, Artista});

    fs.writeFile("./src/model/musicas.json", JSON.stringify(musicas), 'utf8',function(err){
        if(err){
            return res.status(424).send({message:err});
        }
        console.log("Arquivo Atualizado com Sucesso!");
    })

    res.status(200).send(musicas);

    
}
const deletemusicas=(req,res)=>{
    
    try{
        const id=req.params.id;
        const musicafiltrada= musicas.find((musica) => musica.id==id);
        const index=musicas.indexOf(musicafiltrada);
        musicas.splice(index,1);

        fs.writeFile("./src/model/musicas.json",JSON.stringify(musicas),'utf8',function(err){
            if(err){
                return res.status(424).send({menssage});
            }
            console.log("Arquivo excluído com sucesso")
        });

        res.status(200).send(musicas);

    }catch(err){
        console.log(err)
        return res.status(424).send({message:"Erro ao deletar o registro"})
    }
}
const putmusicas=(req,res)=>{
    try{
        //pega o id que foi passado
        const id=req.params.id;
        //filtra meu array de objetos pra encontrar o objeto requerido
        const musicaasermodificada=musicas.find((musica)=>livro.id == id);
        console.log(musicaasermodificada);

        //pega o corpo da requisição com as alterações
        const musicaatualizada = re.body;
        console.log(musicaatualizada)

        //index
        const index=musicas.indexOf(musicaasermodificada);
        console.log(index);

        //buscando no array o endereço, excluindo o registro antigo e substituindo pelo novo
        musicas.splice(index,1,musicaatualizada);
        console.log(musicas);

        fs.writeFile("./src/model/musicas.json",JSON.stringify(musicas),'utf8',function(err){
            if(err){
                return res.status(424).send({menssage});
            }
            console.log("Arquivo excluído com sucesso")
        });

        res.status(200).send(musicas);

    }catch(err){
        return res.status(424).send({message:err});
    }
}

const patchmusicas=(req,res)=>{
    const id=req.params.id;
    const atualizacao=req.body;
    console.log(atualizacao)
    

    try{
        const musicaasermodificada=musicas.find((musica)=> musica.id == id);

        //Ele vai buscar dentro do objeto tarefas a ser modificado os atributos em que o nome coicinda com os do objeto atualizaçao, e vai substituir o valor
        Object.keys(atualizacao).forEach((chave)=>{
            musicaasermodificada[chave]= atualizacao[chave]
        })
        fs.writeFile("./src/model/musicas.json",JSON.stringify(musicas),'utf8',function(err){
            if(err){
                return res.status(424).send({menssage});
            }
            console.log("Arquivo excluído com sucesso")
        });
        return res.status(200).send(musicas);
    }catch(err){
        return escape.status(424).send({message:err});
    }
}

module.exports={getAll, getByID, PostMuisicas, deletemusicas,putmusicas,patchmusicas}