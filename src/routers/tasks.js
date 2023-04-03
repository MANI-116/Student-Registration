
const express=require('express')
const Task=require('../models/tasks')
const auth=require('../middleware/auth.js')
const router=new express.Router()

//create a task





router.post('/tasks',auth,async (req,res)=>{
    
   const user=req.user
const task=new Task(req.body)

console.log(req.body.Roll_No)
    try{
        await task.save()
       res.status(202).render('index')
    
   }catch(e){
       res.status(400).send('failed!')
   }
//    try {

//     req.user.tokens = req.user.tokens.filter((token)=>{
//       return token.token !== req.token
//     })

//     await req.user.save()
//     res.status(202).render('index')
//    // res.send()

// } catch (error) {

//   res.status(500).send({error})
  
// }


})

//to delete a particularid


//get all tasks

router.get('/tasks',async (req,res)=>{
    
    

    try{
        console.log(req.query)
        const tasks=await Task.find(req.query)
        const result=[{Roll_No:String,First_Name:String,Last_Name:String}]

        console.log(tasks)

        for(let i=0;i<5;i++){
            const object={Roll_No:String,First_Name:String,Last_Name:String}
           result[i].Roll_No=tasks[i].Roll_No
           result[i].First_Name=tasks[i].First_Name
           result[i].Last_Name=tasks[i].Last_Name
           

        }
        console.log(result)
        
        res.send(result)


    }catch(e){
        res.status(500).send()
        console.log(e)

    }   

})
// get a particular task ussing id
router.get('/tasks/:id',async(req,res)=>{
    const _id=req.params.id

try{
    const task=await Task.findById(_id)
    if(!task){
        return res.status(404).send()
    }
    res.send(task)

}catch(e){
    res.status(500).send()
}
})

//update a task

router.patch('/tasks/:id',async (req,res)=>{

    const updates=Object.keys(req.body)
    const allowedUpdates=['description','completed']

    const isValid= updates.every((update)=> allowedUpdates.includes(update))

    if(!isValid){
       return  res.status(404).send({error:'invalid updates'})
    }


    try{
        const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})

        if(!task){
           return  res.status(400).send()
        }

        res.send(task)

    }catch(e){
        res.status(500).send()

    }
})

//delete task
router.delete('/tasks/:id',async (req,res)=>{
    const task=await Task.findByIdAndDelete(req.params.id)
    if(!task){
        return res.status(404).send()
    }

    res.send(task)
})



module.exports =router