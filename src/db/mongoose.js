const mongoose=require('mongoose')
const validator=require('validator')
mongoose.set('strictQuery', false);

const url='mongodb+srv://srSYstem:FS4zwxacX3ZCAINr@cluster0.9masxiv.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url).then(()=>{
    console.log('connection Successful!')
}).catch((e)=>{
    console.log(e)
})







