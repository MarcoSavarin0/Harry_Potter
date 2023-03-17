
const { render } = require('ejs');
const fetch = require('node-fetch');
const indexController = {
    hp: async(req,res)=>{
        let arrayVacio= []
        fetch('https://hp-api.onrender.com/api/characters')
            .then(response  => response.json())
            .then(personajes =>{
                personajes.forEach(pj => {
                    if(pj.image != ''){
                        arrayVacio.push(pj)
                    }
                });
            res.render('hp',{hp:arrayVacio})  })
        },
    personajeHP: async(req,res)=>{
        let id = req.params.id
        fetch('https://hp-api.onrender.com/api/characters')
            .then(response  => response.json())
            .then(personaje =>{
                let findHp = personaje.find( pj => pj.id === id)
                res.render('detalleHP',{ pj :findHp})
            })
    },
    casa: async(req,res)=>{
        let name = req.params.name;
        let arrayVacio= []
        fetch('https://hp-api.onrender.com/api/characters')
            .then(response  => response.json())
            .then(housee  => {
               housee.forEach(casa => {
                    if(casa.house === name && casa.image != ''){
                        arrayVacio.push(casa)
                    }
               });
               res.render('house',{hp:arrayVacio})
            })
    }
}




module.exports = indexController