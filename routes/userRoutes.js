const {UserController_} = require("../controller/userController")
const {verificaToken} = require("../middleware/middleware")
const Routes = require("express")

class UserRoutes {
    constructor() {
        this.routes = Routes()
        this.login()
        this.user()
        this.account()
    }

    login() {
        this.routes.route('/login').post(UserController_.login)
    }

    user() {
        this.routes.get('/user',verificaToken,UserController_.user)
    }

    account() {
        this.routes.get('/account',verificaToken,UserController_.account)
    }

    getRoutes()
    {
        return this.routes
    }
}

const UserRoutes_ = new UserRoutes()
const _UserRoutes_ = UserRoutes_.getRoutes()
module.exports = {_UserRoutes_}