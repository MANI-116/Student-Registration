const mongoose=require('mongoose')
const validator=require('validator')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/studentRegistation-api',{
    useNewUrlParser: true,
    
}).then(()=>{
    console.log('connection Successful!')
}).catch((e)=>{
    console.log('error')
})







