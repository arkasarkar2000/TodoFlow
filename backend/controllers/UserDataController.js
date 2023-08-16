const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')


//User Registration
module.exports.registerUser =async (req,res)=>{
    const {fname,lname,email,password} = req.body

    if(!fname || !lname || !email || !password || email.indexOf("@")=== -1){
        res.status(422).json("")
    }
    try{
        const userExist = await UserModel.findOne({email:email});
        if(userExist){
            return res.status(422).json({msg: "Email already exists!"})
        }
        const user = new UserModel({fname,lname,email,password});

        await user.save();

        res.status(200).json({msg: "User Registered"})

    }catch(err){
        console.log(err)
    }

}

//User Login
module.exports.loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).json({error: "Please fill data"})

        }
        const userLogin = await UserModel.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)

            if(!isMatch){
                res.staus(400).json({error: "Invalid Email or Password"})
            }else{
                res.status(200).json({message:"Logged In Successfully!"})
            }

        }else{
                res.status(400).json({error: "Invalid Email or Password"})
        }

   

    }catch(err){
        console.log(err)
    }
}


