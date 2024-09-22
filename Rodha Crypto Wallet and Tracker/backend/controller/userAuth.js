import asyncHandler from 'express-async-handler';
import User from '../model/Usermodel.js';
import { generateToken,cookieToken } from '../utils/generateTokken.js';
import bcrypt from 'bcryptjs'




const authUser = asyncHandler(async(req,res)=>{
    try{
        const {password,email}= req.body;
        const user = await User.findOne({email});
        if(!user){
           return res.status(401).json({message:'invalid authenticate '})

        }
        const isMatch = await bcrypt.compare(password, user.password  );
        if(!isMatch){
            return res.status(401).json({message:'invalid authenticate'})
        }
       const token = generateToken(user._id,user.email);
       cookieToken(res,token);
        
       return res.status(201).json({message :'authenticate succes',token,user:user})
       
    }
    catch(err){
        console.error('something went wrong in authenticate',err)
        return  res.status(500).json({message:'internal server error'})
        


    }
})
const regUser = asyncHandler(async(req,res)=>{
    try
    {
        const {email,password} = req.body;
    const userExist = await User.findOne({email});
    if(userExist){
        return  res.status(400).json({message:'user exsist'})
    }
    const newUser =  new User({email,password})
    await newUser.save()
   
    const token = generateToken(newUser._id,newUser.email);
    cookieToken(res,token);
     

    return res.status(201).json({_id:newUser._id , 
        email:newUser.email

     });
   
}
    
    catch(err){
        console.error('error in register',err);
        return res.status(500).json({message:'internal server error'})
        
    }
   
})
const logUser = asyncHandler(async(req,res)=>{
   
    
        res.cookie('JWT','', {
           httpOnly: true, // Prevent client-side JavaScript access
           secure: process.env.NODE_ENV == 'production', // Use HTTPS in production
           maxAge: new Date(0), // 1 hour (match token expiration)
            sameSite: 'strict', // Optional: restrict cookie to same-site requests
         })
         res.status(200).json({ message: 'Successfully logged out' });
   



   
})
const getUser = async(req,res)=>{
    const logs = await User
    console.log(logs.name)
    res.status(200).json({message:'user profile '})
}
const updateUser = asyncHandler(async(req,res)=>{
    try{ 
      
        
        const user = await User.findById(req.user)
      


    if(!user){
        return res.status(404).json({ message: "User not found" });
      

    }
  user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
    if(req.body.password){
        user.password= req.body.password
    }
    const updateUser = await user.save()
    res.status(200).json({message:"User has succefully updated",name:updateUser.name,email:updateUser.email})
}
   
   catch(err){
    res.status(500).json({ message: "Server error", error: err.message})
   }
 
})
export{authUser,regUser,getUser,updateUser,logUser}