const Users = require('../models/userModel');

const userCtrl = {

   register: async (req, res) =>{
    try {
        const {name, email, password} = req.body;

        const user = await Users.findOne({email});
        if(user) return res.status(400).json({msg: "The email already exists."});

        if(password.length < 6){
            return res.status(400).json({msg: " Password is at least 6 characters long."});
        }

    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}
}

module.exports = userCtrl;