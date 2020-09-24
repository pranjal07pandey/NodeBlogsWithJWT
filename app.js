const express = require('express')
const hbs = require('hbs')
hbs.registerPartials(__dirname+ '/views/include')
const mongoose = require('mongoose')


//express app
const app = express()

//db connect 
//tbd


//listen to the express app
app.listen(3000)

//register view engine
app.set('view engine', 'hbs')
app.set('views', 'views')

//load static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//listen to request
app.get('/', (req, res)=>{
    res.render('index',{
        title: 'index'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About'
    })
})

app.get('/new-blog', (req,res)=>{
    res.render('newBlog', {
        title: 'add-blog'
    })
})