const {token_} = require("../token/token");


const verificaToken = (req, res, next)=> {
    const userToken = req.get('x-token') || ''
    token_.compararToke(userToken).then((decoded)=>{
        req.usuario = decoded.usuario
        next();
    }).catch((error)=>{
        res.status(200).json({
            ok: false,
            mensaje: "Token no es correcto"
        })
    })
}

module.exports = {verificaToken}