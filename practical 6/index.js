const express=require('express');

const app=express();


app.use(express.static('public'))


app.listen(2000,() =>{
    console.log("server is started");
})