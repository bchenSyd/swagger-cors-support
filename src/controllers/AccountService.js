'use strict';

const login = (args, res, next) => {
  const { code: { value: auth_code } } = args;
  console.log(`request = ${JSON.stringify(auth_code)}`);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    AccessToken: 'access_token'
  }, null, 2));
}

export { login };
