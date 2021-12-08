const app = require("./config/server");

require("./app/routes/users");

app.listen(app, get('port')), () => {
    console.log('server on port', app.get('port'));
}