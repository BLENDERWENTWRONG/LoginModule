const { app, port } = require('./server');





// // app.length("/",(req,res)=>{
// //     res.render("login")
// // })

// // app.length("/singnup",(req,res)=>{
// //     res.render("singnup")
// // })


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});