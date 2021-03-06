// app/routes.js
// grab the nerbs model in app/models/nerd.js
var Nerd = require('./models/nerd');
    module.exports = function(app) {
        // server routes ==============================================
        // handle things like api calls
        // authenticate routes

        // sample api route
        app.get('/api/nerds', function (req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {
                // if there is an error retrieving, send the error.
                        // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json(nerds); //return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        //route to handle delete goes here (app.delete)

        // frontend routes===================================================
        //route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html');  //load our public/index.html file
        });
    };