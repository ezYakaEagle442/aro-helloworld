const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

// https://cloud.redhat.com/blog/run-your-nodejs-projects-on-openshift-in-two-simple-steps
// https://www.openshift.com/developers/node-js
// https://developers.redhat.com/articles/2022/01/13/get-started-nodejs-16-openshift#deploy_the_node_js_16_container_image_on_openshift
console.log(new Date() + ' process.env.OPENSHIFT_NODEJS_IP ' + process.env.OPENSHIFT_NODEJS_IP);
console.log(new Date() + ' process.env.OPENSHIFT_NODEJS_HOST ' + process.env.OPENSHIFT_NODEJS_HOST);
console.log(new Date() + ' process.env.OPENSHIFT_NODEJS_PORT ' + process.env.OPENSHIFT_NODEJS_PORT);
console.log(new Date() + ' process.env.PORT ' + process.env.PORT);
console.log(new Date() + ' process.env.HOSTNAME ' + process.env.HOSTNAME);

// Not to bind to 0.0.0.0 and get error OpenShift Node JS Error: listen EACCES: permission denied 0.0.0.0:80
// https://stackoverflow.com/questions/20974094/openshift-node-js-error-listen-eacces
var ipaddress = process.env.HOSTNAME || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var listener = app.listen(process.env.PORT || 8080, ipaddress,  function() {
console.log(new Date() + ' Server is listening on ipaddress' + listener.ipaddress + ' and port ' + listener.address().port);
});

