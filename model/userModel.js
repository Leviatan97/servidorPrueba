const { dataBase_ } = require("../data/data")

class UserModel {
    constructor() {}

    login(data) {
        let con = dataBase_.dataBase()
        return new Promise(async (resolve, reject) => {
            (await con).query(`SELECT * FROM user WHERE us_doc = ${data.doc} and us_c = "${data.con}"`,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    user(doc) {
        let con = dataBase_.dataBase()
        return new Promise(async (resolve, reject) => {
            (await con).query(`SELECT * FROM user WHERE us_doc = ${doc}`,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    account(doc) {
        let con = dataBase_.dataBase()
        return new Promise(async (resolve, reject) => {
            (await con).query(`SELECT * FROM account WHERE us_doc = ${doc}`,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }
}

const UserModel_ = new UserModel()
module.exports = {UserModel_}