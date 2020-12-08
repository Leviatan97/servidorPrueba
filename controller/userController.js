const {UserModel_} = require("../model/userModel")
const {token_} = require("../token/token")

class UserController {
    constructor() {}

    async login(req, res, fun) {
        let data = req.body
        let result
        let valor

        try {
            result = await UserModel_.login(data)
            const toke = token_.getJwtToken({
                us_doc: result[0].us_doc,
            })
            valor = result.length
            res.status(200).json({
                val: valor,
                resultado : result,
                token_ : toke
            })
        } catch (error) {
            res.status(200).json(error)
        }
    }

    async user(req, res, fun) {
        // console.log(req)
        let datos = req.usuario.us_doc
        let result
        try {
            result = await UserModel_.user(datos)
            res.status(200).json({
                respuesta: "OK",
                resultado: result
            })
        } catch (error) {
            res.status(200).json(error)
        }
    }

    async account(req, res, fun) {
        let datos = req.usuario.us_doc
        let result
        try {
            result = await UserModel_.account(datos)
            res.status(200).json({
                respuesta: "OK",
                resultado: result
            })
        } catch (error) {
            res.status(200).json(error)
        }
    }
}

const UserController_ = new UserController()
module.exports = {UserController_}