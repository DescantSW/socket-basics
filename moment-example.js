 var moment = require('moment');
// var now = moment();
// var timestamp = 1444247486704;
// var timestampMoment = moment.utc(timestamp);
// console.log(timestampMoment.format('MMM Do YYYY, h:mm a'));
// console.log(timestampMoment.local().format('h:mm a'));

//var momentTimestamp = moment.utc(moment());
var timestamp = moment.utc(moment()).local().format('h:mm : ');
 console.log(timestamp);