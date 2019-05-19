const https = require('https');
const { DARKSKY_TOKEN } = require('../weather-app/.env');

// url
const url = `https://api.darksky.net/forecast/${DARKSKY_TOKEN}/40,-75?units=si&lang=en`;

const req = https.request(url, res => {
  let data = '';

  res.on('data', chunk => {
    data = data + chunk.toString();
  });

  res.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

req.on('error', e => {
  console.error(e);
});

req.end();
