const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const path = require("path");
const publicPath = path.join(__dirname, '..', 'build');
const app = express();
app.use(express.static(publicPath));

// DATABASE CONNECTION
const db = require("./models");
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
// CORS
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

// PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// INITIAL FUNCTION
function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }