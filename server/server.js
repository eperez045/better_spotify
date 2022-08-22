const express = require("express");
const app = express();
const spotifyWebApi = require("spotify-web-api-node");

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:8100/tab1",
    clientId: "2d7e16cc26b94302a104ee7039f606c8",
    clientSecret: "89bd65a781ee47a384976245622a585b",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.status(400);
    });
});
