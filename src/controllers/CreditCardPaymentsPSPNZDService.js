'use strict';

exports.createPspNzdPspApplication = function (args, res, next) {
  /**
   * parameters expected in the args:
  * application (PspNzdApplication)
  **/
  var examples = {};
  examples['application/json'] = {
    "updated_on": "2000-01-23T04:56:07.000+00:00",
    "created_on": "2000-01-23T04:56:07.000+00:00",
    "state": "aeiou",
    "pending_issues": [{
      "reason": "aeiou",
      "name": "aeiou",
      "message": "aeiou"
    }]
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Location', '/workflows/psp-nzd/applications/123');
    res.setHeader('Access-Control-Expose-Headers', 'Location');
    
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.getPspNzdApplication = function (args, res, next) {
  /**
   * parameters expected in the args:
  * applicationId (String)
  **/
  var examples = {};
  examples['application/json'] = {
    "business": {
      "services_description": "aeiou",
      "address": "",
      "average_monthly_sale": 1.3579000000000001069366817318950779736042022705078125,
      "business_number": "aeiou",
      "owners": [{
        "address": "",
        "documents": [""],
        "date_of_birth": "2000-01-23T04:56:07.000+00:00",
        "business_role": "aeiou",
        "last_name": "aeiou",
        "phone_number": "aeiou",
        "first_name": "aeiou"
      }],
      "merchant_category": "aeiou",
      "business_industry": "aeiou",
      "entity_type": "aeiou",
      "website_url": "aeiou",
      "company_name": "aeiou",
      "annual_sales": 1.3579000000000001069366817318950779736042022705078125,
      "legal_name": "aeiou",
      "start_date": "2000-01-23T04:56:07.000+00:00",
      "bank_account": {
        "bsb": "aeiou",
        "account_number": "aeiou",
        "owner_name": "aeiou",
        "currency": "aeiou"
      }
    },
    "id": 123,
    "merchant_id": "",
    "status": {
      "updated_on": "2000-01-23T04:56:07.000+00:00",
      "created_on": "2000-01-23T04:56:07.000+00:00",
      "state": "aeiou",
      "pending_issues": [{
        "reason": "aeiou",
        "name": "aeiou",
        "message": "aeiou"
      }]
    },
    "applicant": {
      "agreement": {
        "name": "aeiou",
        "version": "aeiou",
        "timestamp": "2000-01-23T04:56:07.000+00:00"
      },
      "address": {
        "country": "aeiou",
        "address_line2": "aeiou",
        "address_line1": "aeiou",
        "city": "aeiou",
        "region": "aeiou",
        "postal_code": "aeiou"
      },
      "date_of_birth": "2000-01-23T04:56:07.000+00:00",
      "document": {
        "notes": "aeiou",
        "name": "aeiou",
        "base64": "aeiou",
        "type": "aeiou",
        "uri": "aeiou"
      },
      "last_name": "aeiou",
      "phone_number": "aeiou",
      "title": "aeiou",
      "first_name": "aeiou",
      "email": "aeiou"
    }
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.getPspNzdApplications = function (args, res, next) {
  /**
   * parameters expected in the args:
  **/
  var examples = {};
  examples['application/json'] = [{
    "business": {
      "services_description": "aeiou",
      "address": "",
      "average_monthly_sale": 1.3579000000000001069366817318950779736042022705078125,
      "business_number": "aeiou",
      "owners": [{
        "address": "",
        "documents": [""],
        "date_of_birth": "2000-01-23T04:56:07.000+00:00",
        "business_role": "aeiou",
        "last_name": "aeiou",
        "phone_number": "aeiou",
        "first_name": "aeiou"
      }],
      "merchant_category": "aeiou",
      "business_industry": "aeiou",
      "entity_type": "aeiou",
      "website_url": "aeiou",
      "company_name": "aeiou",
      "annual_sales": 1.3579000000000001069366817318950779736042022705078125,
      "legal_name": "aeiou",
      "start_date": "2000-01-23T04:56:07.000+00:00",
      "bank_account": {
        "bsb": "aeiou",
        "account_number": "aeiou",
        "owner_name": "aeiou",
        "currency": "aeiou"
      }
    },
    "id": 123,
    "merchant_id": "",
    "status": {
      "updated_on": "2000-01-23T04:56:07.000+00:00",
      "created_on": "2000-01-23T04:56:07.000+00:00",
      "state": "aeiou",
      "pending_issues": [{
        "reason": "aeiou",
        "name": "aeiou",
        "message": "aeiou"
      }]
    },
    "applicant": {
      "agreement": {
        "name": "aeiou",
        "version": "aeiou",
        "timestamp": "2000-01-23T04:56:07.000+00:00"
      },
      "address": {
        "country": "aeiou",
        "address_line2": "aeiou",
        "address_line1": "aeiou",
        "city": "aeiou",
        "region": "aeiou",
        "postal_code": "aeiou"
      },
      "date_of_birth": "2000-01-23T04:56:07.000+00:00",
      "document": {
        "notes": "aeiou",
        "name": "aeiou",
        "base64": "aeiou",
        "type": "aeiou",
        "uri": "aeiou"
      },
      "last_name": "aeiou",
      "phone_number": "aeiou",
      "title": "aeiou",
      "first_name": "aeiou",
      "email": "aeiou"
    }
  }];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.updatePspNzdApplication = function (args, res, next) {
  /**
   * parameters expected in the args:
  * applicationId (Integer)
  * document (PspNzdApplication)
  **/
  var examples = {};
  examples['application/json'] = {
    "updated_on": "2000-01-23T04:56:07.000+00:00",
    "created_on": "2000-01-23T04:56:07.000+00:00",
    "state": "aeiou",
    "pending_issues": [{
      "reason": "aeiou",
      "name": "aeiou",
      "message": "aeiou"
    }]
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

exports.updatePspNzdApplicationStatus = function (args, res, next) {
  /**
   * parameters expected in the args:
  * applicationId (Integer)
  * status (Status)
  **/
  var examples = {};
  examples['application/json'] = {
    "updated_on": "2000-01-23T04:56:07.000+00:00",
    "created_on": "2000-01-23T04:56:07.000+00:00",
    "state": "aeiou",
    "pending_issues": [{
      "reason": "aeiou",
      "name": "aeiou",
      "message": "aeiou"
    }]
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

