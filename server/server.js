const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const {_UserRoutes_} = require("../routes/userRoutes")

class server {
    constructor() {
        this.app = express()
        this.initConfig()
        this.routeConfig()
        this.portConfig()
    }

    initConfig() {
        this.app.use(morgan('dev'))
        this.app.use(cors({ origin: true, credentials: true }))
        this.app.use(express.json())
    }

    routeConfig() {
        this.app.use(_UserRoutes_)
    }

    
    portConfig(){
        this.app.set('port',3000)
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Servidor Conectado por el puerto ${this.app.get('port')}`)
        })
    }
}

module.exports = {server}