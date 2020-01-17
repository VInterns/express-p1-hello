# Bana's Project


const express= require('express')
const app=express()
app.get('/',(req,res)=>{
res.json    ({
msg :"Hello ALL!"
})


})

app.listen(3000,()=>console.log('example app listen to port 3000'))     

    

