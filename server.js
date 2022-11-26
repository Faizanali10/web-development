const express=require("express");
const app = express();
app.get("/",function(req,res){
res.send("<h1>Hello World</h1>");
});
app.get("/contact",function(req,res){
    res.send("<h1>Contact</h1>");
});
app.get("/about",function(req,res){
    res.send("heyy this is faizan and i love coding do you like coding or not...");
});
app.get("/Home",function (req,res) {
    res.send("This is a home page")
})
app.listen(3000,function(){
    console.log("server started on port 3000");
});
