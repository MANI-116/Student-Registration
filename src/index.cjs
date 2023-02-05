const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path=require('path')
const express=require('express')
require('./db/mongoose')
const multer=require('multer')
 
const User=require('./models/users')



const userRouter=require('./routers/users')
const taskRouter=require('./routers/tasks')
const hbs=require('hbs')

const app=express()

//const port=process.env.PORT || 80




//........paths...........
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
//......setup handle bars engine and views location............

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//...setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


// var bodyParser = require('body-parser')


// app.use(bodyParser.json())




app.use(userRouter)
app.use(taskRouter)

//index page
app.get('',(req,res)=>{
    res.render('index')
})

//faculty  login page
app.get('/flogin',(req,res)=>{
    res.render('flogin')
})

//student registration page
app.get('/studentRegistration',(req,res)=>{
    res.render('studentRegistration')
})

//create account page
app.get('/createaccount',(req,res)=>{
    res.render('accountcreate')
})

//student login page
app.get('/login',(req,res)=>{
    res.render('login')
})

//faulty page
app.get('/faculty',(req,res)=>{
    res.render('faculty')
})








const bodyParser = require('body-parser')



app.post('/facultys', async (req, res) => {
    

    try {
        
            const faculty=new Faculty({
                email:req.body.email,
                password:req.body.password,
                roll:req.body.roll
            })
            

            const registered=await faculty.save()
          
            res.status(202)
        

    
    
    } catch (e) {
        res.status(400).send(e)
    }


})




///..........otp ...verification..............///
app.get('/otp', (req,res)=>{
    res.render('otp.hbs')
})

 
var nm = require('nodemailer');
let savedOTPS = {

};
var transporter = nm.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: '111manikanta.v@gmail.com',
            pass: 'zbsvdfjiobwrvabh'
        }
    }
);
app.post('/sendotp', (req, res) => {
    let email = req.body.email;
    console.log(email)
    let digits = '0123456789';
    let limit = 4;
    let otp = ''
    for (i = 0; i < limit; i++) {
        otp += digits[Math.floor(Math.random() * 10)];

    }
    var options = {
        from: '111manikanta.v@gmail.com',
        to: `${email}`,
        subject: "Testing node emails",
        html: `<p>Enter the otp: ${otp} to verify your email address</p>`

    };
    transporter.sendMail(
        options, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send("couldn't send")
            }
            else {
                savedOTPS[email] = otp;
                setTimeout(
                    () => {
                        delete savedOTPS.email
                    }, 60000
                )
                res.send("sent otp")
            }

        }
    )
})

app.post('/verify', (req, res) => {
    let otprecived = req.body.otp;
    let email = req.body.email;
    if (savedOTPS[email] == otprecived) {
        res.send("Verfied");
    }
    else {
        res.status(500).send("Invalid OTP")
    }
})
//////////////////otp//////////////////////////////////////////


////////////////webcam/////////////////////////
const upload = multer({
    dest:'images',

    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true)
    }
})



app.get('/webcam',(req,res) =>{
    res.render('webcam.hbs')
})

//........image update.............//
app.post('/imgupdate',async (req,res)=>{

    try{
        //.replace('data:image/jpeg;base64,','')
        let bufferImage=req.body.encoded_image2
            console.log(bufferImage)
         const user = await User.findOne({email:"194101@nith.ac.in"})
            user.image=bufferImage
            await user.save()
    
    
        //console.log(req.file.buffer)
        res.send({"imagestatus":"got the image"})
    
     }catch(e){
        res.status(404).send("error occured in the db")
    
     }

})
/////...............imgverify..........//////
app.post('/imgverify',async (req,res)=>{

    const user= await User.findOne({email:"194111@nith.ac.in"})
    
let encoded_imageOne= Buffer.from(user.image,'base64').toString().replace('data:image/jpeg;base64,','')

let encoded_imageTwo=req.body.encoded_image2.replace('data:image/jpeg;base64,','').toString()

//console.log(encoded_imageOne)

const response = await fetch('https://faceapi.mxface.ai/api/v2/face/verify', {
	method: 'post',
	body: JSON.stringify({
        "encoded_image1":encoded_imageOne,
        "encoded_image2":encoded_imageTwo
    }),
	headers: {'Content-Type': 'application/json',
              'Subscriptionkey':'0nSvJZz1ywynMtq3v3-Jnqlj6OXo11259'
              }
});
const data=await response.json()
//let confidence=data[0].confidence
console.log(data)
console.log(data.code)
if(data.code===400){
    res.send({"da":"login"})
}
else if (data.matchedFaces.length !=0 && data.matchedFaces[0].confidence > 80)
{
    res.send({"da":'studentRegistration'})
}





 
     
},(error, req, res, next) => {

    res.status(400).send({ error: error.message })
    
})




app.listen(80,()=>{
    console.log('server is up on port 80')
})
