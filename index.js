import express from "express";
const app= express();
const port=3000;

app.get("/", (req, res) => {
    res.send("hello world")
})
app.post("/register", (req, res) => {
    //Do something with the data
    res.sendStatus(201);
});
  
app.put("/user/sam", (req, res) => {
    res.sendStatus(200);
});
  
app.patch("/user/sam", (req, res) => {
    res.sendStatus(200);
});
  
app.delete("/user/sam", (req, res) => {
    res.sendStatus(200);
});
app.get("/about",(req, res) =>{
    res.send("<h1>Hi I'm saumya and I'm learning Express.js.<h1>")
})
app.get("/contact", (req, res) => {
    res.send("<h2>my contact details:sau..@gmail.com</h2>")
})
app.listen(port, () => {
    console.log('server running on port ${port}.');
});
