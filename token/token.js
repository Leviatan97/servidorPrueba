const jwt = require('jsonwebtoken');

class token {

    constructor() {
        this.seed = "este-es-el-seed-de-mi-app-secreto"
        this.caducidad = '30d'
    }

    getJwtToken(payLoad) {
        return jwt.sign({
            usuario: payLoad
        }, this.seed, {expiresIn: this.caducidad})
    }

    compararToke(userToken) {

        return new Promise ((resolve, reject)=>{
            jwt.verify(userToken, this.seed, (error, decoded)=> {
                if(error){
                    reject(error)
                }else{
                    resolve(decoded)
                }
            })
        })
        
    }
}

const token_ = new token()
module.exports = {token_}