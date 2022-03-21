
const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

//habilitando cors
app.use(cors())

//servindo a api
app.get('/', async(req, res) => {

    //cosumindo api com axios

    try {
        const {data} = await axios ('https://jsonplaceholder.typicode.com/users')
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
    // simulando api test

    // return res.json([        
    //     {name:'Eric'},
    //     {name: 'p4kz'}        
    // ])

}) 

//ouvindo nessa rota
app.listen('4567') 
