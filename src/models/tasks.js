const mongoose=require('mongoose')


const taskSchema= new mongoose.Schema({

    Roll_No:{
        
        type:String,
        
        trim:true

    },
First_Name:{
    
    type:String,
        
    trim:true

},
Last_Name:{
    
    type:String,
        
    trim:true

},
dob:{
    
    type:String,
        
    trim:true

},
Email_Id:{
    type:String,
        
        trim:true,
        lowerCase:true,
        // validate(value){
        //     if(!validator.isEmail(value))
        //     throw new Error('Email is invalid')
        // }

},
Mobile_Number:{
    
    type:String,
        
    trim:true

},
Gender:{
    
    type:String,
        
    trim:true

},
Address:{
    
    type:String,
        
    trim:true

},
City:{
    
    type:String,
        
    trim:true

},
Pin_Code:{
    
    type:String,
        
    trim:true

},
State:{
    
    type:String,
        
    trim:true

},
Country:{
    
    type:String,
        
    trim:true

},
Branch:{
    
    type:String,
        
    trim:true

},
sem:{
    
    type:String,
        
    trim:true

},
degree:{
    
    type:String,
        
    trim:true

},
Year:{
    
    type:String,
        
    trim:true

},
ccode:[{
    
    type:String,
        
    trim:true

}],
cname:[{
    
    type:String,
        
    trim:true

}],
credits:[{
    
    type:String,
        
    trim:true

}],
hrs:[{
    
    type:String,
        
    trim:true

}],
psn:{
    
    type:String,
        
    trim:true

},
sgpi:{
    
    type:String,
        
    trim:true

},
cgpi:{
    
    type:String,
        
    trim:true

},
fccode:[{
    
    type:String,
        
    trim:true

}],
fcname:[{
    
    type:String,
        
    trim:true

}],
completed:{
    type:Boolean
}



})

const Task=new mongoose.model("Task",taskSchema)
module.exports=Task