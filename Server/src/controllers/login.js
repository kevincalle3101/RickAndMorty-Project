const users = require("../utils/user")

const login = (req, res)=>{
    const {email, password} = req.query;
    let userFinded = users.find(user=>user.email===email&&user.password===password)
    if(userFinded){
        return res.status(200).json({access:true})    
    }
    return res.status(404).json({access:false})
}

module.exports={
    login
}