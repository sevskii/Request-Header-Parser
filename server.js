var express = require('express');

var app = express();
app.listen(process.env.PORT);
app.enable('trust proxy');

app.get('/api/whoami/', function (req, res) {
    //req.ip
    res.json({
        'ipaddress': req.ip,
        "language": req.headers['accept-language'].match(/^([^,]+)/)[1],
        "software": req.headers['user-agent'].match(/\(([^\)]+)/)[1]
    })
});