const mongoose=require('mongoose')
const validator=require('validator')
mongoose.set('strictQuery', false);

const url='mongodb+srv://srSystem:srSystem@cluster0.9masxiv.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser: true,
    
}).then(()=>{
    console.log('connection Successful!')
}).catch((e)=>{
    console.log('error')
})







