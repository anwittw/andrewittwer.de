const mailjet = require("node-mailjet");

const {template} = require("./template");

exports.handler = function(event, context, callback) {
  
  let connectedMailjet = mailjet.connect(
    process.env.REACT_APP_MJ_APIKEY_PUBLIC,
    "324d716729b40dca0263462158deac4f"
  );

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
