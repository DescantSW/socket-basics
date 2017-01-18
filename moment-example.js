var moment = require('moment');
var now = moment();
var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.format('MMM Do YYYY, h:mm a'));
console.log(timestampMoment.local().format('h:mm a'));