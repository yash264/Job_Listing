const express = require("express")
const app = express()
const PORT = require("port")
const port = process.env.PORT || 4502;
const cors = require("cors");
const hbs = require("hbs");   
const path = require("path");
require("./db/connection");
const cookieParser = require("cookie-parser")


const UserRoute = require("./routes/User.route");
const AdminRoute = require("./routes/Admin.route");
const JobRoute = require("./routes/Job.route");
const ApplicationRoute = require("./routes/Application.route");


const corsOptions ={
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}; 

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));


app.set("view engine","hbs");


const static_path = path.join(__dirname , "../public")
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");

//humne jo file banayi h , public -> index.html mein ,usko access karne ke liye , uska path define kare h ,as static_path , aur phir usko , niche use kare h

app.use(express.json());
app.use(express.static(static_path));

app.set("view engine" , "hbs");
app.set("views" , template_path);
hbs.registerPartials(partials_path);


app.get("/" , (req, res) => {
    res.send("Welcome to server side.")
})


app.use("/api", UserRoute)
app.use("/api", AdminRoute)
app.use("/api", JobRoute)
app.use("/api", ApplicationRoute)


app.listen(port , (req , res)=>{
    console.log( `Server is running at ${port}`)
}) 
 

//NOTE;-
//Use async when:
// You need to perform asynchronous operations (e.g., database queries, API calls, or other I/O tasks) within the route handler

//Don't use async when:
// Your route handler only performs synchronous operations (e.g., rendering a page, sending a response) and does not rely on asynchronous logic.
