'use strict';

exports.getPspNzdTerms = function(args, res, next) {
  /**
   * parameters expected in the args:
  * partner (String)
  * file_type (String)
  * version (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "X-Name" : "aeiou",
  "X-Version" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getPspNzdTermsVersion = function(args, res, next) {
  /**
   * parameters expected in the args:
  * partner (String)
  * file_type (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "version" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

