const express=require('express');
const app=express();
const port=4000;
const router=require('./UserRoutes')
const path=require('path');
const bodyParser=require('body-parser')
app.use(express.json());
app.use('/api/v1',router);
app.use(bodyParser.urlencoded({extended:false}))

// app.get('/api/v1/userdata',(req,res)=>{
//         res.json({
//            name:'Vansh',
//            email:'vanshm2703@gmail.com',
//            password:'learningexpressjs'

//         })
//      })



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})   
// app.post('/api/v1/login',(req,res)=>{
// res.send(`<h1>done mr ${req.body.name}</h1>
//     <h2>your email is ${req.body.email}</h2>
//     <h3>your email is ${req.body.password}</h3>`)
//   console.log(req.body)
// })


// app.get('/about',(req,res)=>{
//     res.send('<h1>about</h1>')
// })
// app.get('/contact',(req,res)=>{
//     res.send('<h1>contact</h1>')
// })
app.listen(port,()=>{
    console.log(`server is working on port:${port}`);
})



//GET,POST,PUT,DELETE : alt name of crud