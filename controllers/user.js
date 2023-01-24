const User=require('../models/User');
const {validateData}=require('../utils/util');


// can use static data, using api call for post and delete
exports.createUser=async(req,res)=>{
    try {
        let data=req.body;
        const valid=validateData(data);
        if(valid) {
            let {firstName,lastName,email}=data;
            const user=new User({firstName,lastName,email});
            await user.save();
            res.status(201).json({message:"User created"});
        }
        else res.status(400).json({message:"Please enter all the details properly"}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        const {email,userId}=req.body;
        if(email) await User.findOneAndDelete({email});
        else await User.findOneAndDelete({_id:userId});
        res.status(200).json({message:"User deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}