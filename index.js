const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5300;
// const config = require('./config');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(cors())
const regionName = 'us4';
const apiKey = 'd61c482e5f75be326481aaf715e343e1-us4';
const listId = '29f064e332';
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/subscribe', (req, res)=> {
  // console.log(req.body);

  request({
    method: 'POST',
    url: `https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`,
    headers: {
      Authorization: `Basic ${apiKey}`,
    },
    body: JSON.stringify(req.body)
    
  }, (err, resp, body) => {

    res.sendStatus(201);
  })
  // request.post(`https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`, {}, (resp)=> {
  //   console.log(resp);
  // });
  // request.setRequestHeader('Authorization', `Basic ${apiKey}`);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))