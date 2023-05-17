const { Router } = require('express')
const express = require('express')
const app = express()
const bcrypt =  require('bcrypt')
const users = []

app.set('view-engine' , 'ejs')

app.get('/' , (req,res) =>{
    res.render("")
})
 
app.get('/login' , (req,res) => {
    res.render('script.ejs' , { name: 'kyle'})
})

app.use(express.urlencoded({extended:false}))
 
app.get('/login' , (req,res) => {
    res.render('login')
})

app.get('/register' , (req,res) => {
    res.render('register')
}) 


app.post('/register' , async  (req,res) => {
try{
const hashedPassword = await  bcrypt.hash(req.body.password, 10)
users.push({
    id: Date.now().toString(),
    name: req.body.email,
    password: hashedPassword
})
    res.redirect('/login')
}

catch {
res.redirect('/register')
}

})

app.post('/login' , (req,res) => {

})


app.listen(3000)