const bcryptjs = require("bcryptjs");
const dbConnection = require("../../config/dbConnection");

module.exports = (app) => {
  const connection = dbConnection();
  connection.query("USE bdhorario");

  app.get("/", (req, res) => {
    res.render("users");
  });

  // Autentificacion
  app.post("/auth", async (req, res) => {
    const gmail = req.body.gmail;
    const pass = req.body.pass;
    if (gmail && pass) {connection.query("SELECT * FROM Usuario WHERE gmail = ? AND contrasenia = ?",[gmail, pass],async (err, result) => {
          if (result.length > 0){
            res.send('Login Sucess!');
          } else {
            res.send('Incorrect Username and/or Password!');
          }
        }
      );
    }
  });

  /*app.get("/", (req, res) => {
    connection.query("SELECT * FROM Usuario", (err, result) => {
      //console.log(result);
      users: result;
    });
  });*/

  /*app.post('/insert', function (req, res) {

    var value = {
      email: req.body.email,
      pass: req.body.pass
    };

    connection.query('INSERT INTO users SET ?', value, function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('success');
        res.redirect('/');
      }
    });
  });*/
};
