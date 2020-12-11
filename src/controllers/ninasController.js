const ninasCollection = require('../models/ninasSchema')


//getAll Todas as NINAS - bucar todas as NINAS
const getNinas = (req,res)=>{
    console.log(req.url)

    ninasCollection.find((error, ninas)=>{ 
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({
                mensagem: "Todas as NINAS",
                ninas
            })
        }
    })
}




//GET get categoria das NINAS - buscar por categoria
const getCategoriaNinas = (req, res) => {
  petsCollection.findOne({ nome: req.params.categoria }, (error, categoria) => {
    if (categoria) {
      return res.status(200).json({
        mensagem: "Categoria encontrada",
        categoria

      })

    } else {
      return res.status(500).send({
        mensagem: "Categoria não encontrado",
        error
      })
    }
  })
}


//POST add NINAS 
const addNinas = (req, res) => {
  const ninasBody = req.body
  const cadastro = new ninasCollection(ninasBody)

  cadastro.save((error) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      return res.status(200).send({
        mensagem: `${"Gratidão! Mais uma NINA cadstrada com sucesso"}`,
        cadastro
      })
    }
  })
}


//atualizar cadastro
const updateNinas = (req, res) => {
  const idParam = req.query
  const contatoBody = req.body
  const update = { new: true }

  ninasCollection.findByIdAndUpdate(idParam, contatoBody, update, (error, ninas) => {

    if (error) {
      return res.status(500).send({
        mensagem: "Cadastro não atualizado!Por favor, tente novamente",
        error
      })

    } else {
      return res.status(200).send({
        mensagem: "Cadastro atualizado com sucesso",
        ninas
      })
    }
  }
  )
}



//DELETE - deleta uma NINA por id específico e traz mensagem 

const deleteByIdNinas = (req, res) => {
  const idParam = req.query
  ninasCollection.findByIdAndDelete(idParam, (error, ninas) => {
    if (error) {
      return res.status(500).send({
        mensagem: "O cadastro não foi deletado",
        error
      })

    } else {
      if (ninas) {
        return res.status(200).send({
          mensagem: "O cadastro deletado com sucesso"
        })
      } else {
        return res.sendStatus(404)
      }
    }
  })
}


module.exports = {
  getNinas,
  getCategoriaNinas,
  addNinas,
  updateNinas,
  deleteByIdNinas
}