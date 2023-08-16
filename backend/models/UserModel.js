const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const saltRounds = 12;

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})



//hashing password before storing in DB
userSchema.pre('save', async function(){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,saltRounds);
    }
})


module.exports = mongoose.model('UserData',userSchema)