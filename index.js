const express=require("express")
const cors=require("cors")
const app=express()
const PORT=process.env.PORT || 3000

app.use(cors())
app.use(express.static(__dirname + '/public'));
app.get("/",(req,res)=>{
	res.sendFile("home.html",{root:__dirname+"/../hprakhi/public"})
})

app.listen(PORT,(err)=>{
	if(err)
		throw err;
	console.log(`Server running on port ${PORT}`)
})