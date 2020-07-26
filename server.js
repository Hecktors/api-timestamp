// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// route without timestamp
app.get("/api/timestamp", function (req, res) {
  const date = new Date();
  res.json({ "unix": date.getTime(), "utc": date.toUTCString() });
})

// route with date string - unix or utc format
app.get("/api/timestamp/:date_string", function (req, res) {
  const dateString = req.params.date_string;
  let date = null;
  if (isNaN(Number(dateString))) {
    date = new Date(dateString);
  } else {
    date = new Date(dateString * 1000);
  }

  // check validation of date
  if (isNaN(date)) {
    res.status(400).json({ "error": "Invalid Date" });
  } else {
    res.json({ "unix": date.getTime(), "utc": date.toUTCString() });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});