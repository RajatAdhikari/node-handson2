const express=require("express")
const app=express();
const port=4000

const data={
    name:'Anushikha',
    class:'Elevation Academy',
    subject:'Express'
}
const data1=JSON.stringify(data)

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to express server</h1>`)
    res.end()
})
app.get('/api/main',(req,res)=>{
    res.send(data1);
    res.end()
})

app.listen(port,()=>{
    console.log(`server is started at port ${port}`)
})