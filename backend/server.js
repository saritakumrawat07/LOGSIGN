const express = require('express');
const app = express();
const port = 8080;
const dbConnect = require('./db/dbase');
 const User = require('./db/user');
 const cors = require('cors')



//middleware for parsing json
app.use(express.json());

//Enable cors
app.use(cors());

//Registrations

app.post('/register',async(req,res)=>{ 
try{
    const {username, password} = req.body;
console.log(req.body);
const user = new User({username, password});
 await user.save();
 res.status(201).json({message:'register successfully'});
}
catch(error){
res.status(500).json({error:'register failed'});

}})

//Login

app.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        if(!user){
          return  res.status(401).json({error:'invalid username or password'});
        }
        if(user.password!==password){
            return res.status(401).json({error:'invalid username or password'});
    
}
res.status(200).json({message:'login successful'});
    }
catch(err){
    res.status(500).json({error:'login failed'});
}})


dbConnect();

app.listen(port,()=>{
    console.log('listening on port 8080');
});