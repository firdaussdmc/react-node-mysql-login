//SET UP EXPRESS WEB SERVER
const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");

const app = express();

var corsOption = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOption));

const db = require("./app/models");
//const Role = db.role;

//for production
db.sequelize.sync();

//for initiate production
//db.sequelize.sync({force: true}).then(()=>{
//    console.log('Drop and Resync Db');
//    initial();
//});

//function initial(){
//    Role.create({
//        id: 1,
//        name: "user"
//    });
//
//    Role.create({
//        id: 2,
//        name: "moderator"
//    });
//
//    Role.create({
//        id: 3,
//        name: "admin"
//    })
//}

//initial() function helps us to create 3 rows in database.
//In development, you may need to drop existing tables and re-sync database. So you can use force: true as code above.

//For production, just insert these rows manually and use sync() 
//without parameters to avoid dropping data: db.sequelize.sync();

//parse request of content-type - application/json
app.use(bodyParser.json());

//parse requset of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//simple route
app.get("/", (req, res)=>{
    res.json({message: "Welcome to server dashboard"})
})

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/turorial.routes")(app);

//set port, listen for request
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
});


// Let me explain what code above:
// - Express is for building the Rest apis
// - body-parser helps to parse the request and create the req.body object
// - cors provides Express middleware to enable CORS