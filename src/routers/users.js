const express=require('express')
const User=require('../models/users')
const auth=require('../middleware/auth.js')
const router=new express.Router()


//logout a user*auth
router.post('/users/logout',async (req,res) =>{
          
    try {
          req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
          })

          await req.user.save()
          res.send()

    } catch (error) {

        res.status(500).send({error})
        
    }


})

//create a user
router.post('/users', async (req, res) => {
    console.log("requestcame")

    try {
        console.log("request accepted")
            const user=new User({
                email:req.body.email,
                password:req.body.password,
                roll:req.body.roll
            })

            
            await user.save()
            //console.log("dbms accepted")
             const ser =await User.findByCredentials(req.body.email, req.body.password)
            //console.log(user)
            const token=await ser.generateAuthToken()
            //       console.log(token);
            
    
            res.cookie('authorizationToken',token).render('login')
    
          
           // res.status(202).render('login')
         
    } catch (e) {
        res.status(400).send(e)
    }

})
//user login
router.post('/users/login',async (req,res)=>{
    //console.log("requestcame")
    try{
       // console.log(req.body)
        
        const user =await User.findByCredentials(req.body.email, req.body.password)
        //console.log(user)
        const token=await user.generateAuthToken()//       console.log(token);

        res.cookie('authorizationToken',token).send({user,token})


    }catch(e){
        res.status(400).send({"error":e})

    }
})

//to read users,*auth
router.get('/users', async (req, res) => {

    console.log(req.body)

    try {
        const users = await User.find({})
        if (!users) {
            return res.status(400).send(users)
        }

        res.send(users)


    } catch (e) {
        res.status(500).send(e)
    }


})

//to read a particular user

router.get('/users/:id/password', async (req, res) => {
    const email = req.params.id




    try {
        const user = await User.findOne({ email:email })
        if (!user)
            return res.status(404).send({"error":"did not find user"})

        res.send(user)

    } catch (e) {
        res.status(500).send()
    }


})

//update a user

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)

    const allowedUpdates = ['name', 'age', 'email', 'password']

    const isvalid = updates.every((update) => allowedUpdates.includes(update))

    if (!isvalid) {
        res.status(404).send({ error: 'invalid updates!' })
    }

    try {
        const user=await User.findById(req.params.id)

        updates.forEach((update)=> user[update]=req.body[update])

        await user.save()

        //const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(400).send()
        }
        res.send(user)


    } catch (e) {
        res.status(500).send()

    }

})

router.delete('/users/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
        return res.status(404).send()
    }

    res.send(user)
})

module.exports=router






