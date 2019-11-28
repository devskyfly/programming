const _ = require('lodash');
const data = require('../lib/data');


_.forIn(data, function(key, value){
    console.log(key, value);
});