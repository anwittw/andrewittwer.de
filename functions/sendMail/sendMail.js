const mailjet = require("node-mailjet");

const {template} = require("./template");

exports.handler = function(event, context, callback) {
  console.log('ping1');
  console.log(process.env.REACT_APP_MJ_APIKEY_PUBLIC)

  
  let connectedMailjet = mailjet.connect(
    process.env.REACT_APP_MJ_APIKEY_PUBLIC,
    process.env.REACT_APP_MJ_APIKEY_PRIVATE
  );
  console.log('ping2');
  connectedMailjet.post("send", { version: "v3.1" }).request(template)
    .then(result => {
      console.log(result.body);
      callback(null, {
        statusCode: 200,
        body: "Ok"
      });
    })
    .catch(err => {
      console.log(err.statusCode);
      callback(err);
    });
};
