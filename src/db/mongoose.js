const mongoose=require('mongoose')
const validator=require('validator')
mongoose.set('strictQuery', false);


const url='mongodb+srv://srSystem:SKBL8DAz3tWWhp9g@cluster0.lgsq61v.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url).then(()=>{
    console.log('connection Successful!')
}).catch((e)=>{
    console.log(e)
})







