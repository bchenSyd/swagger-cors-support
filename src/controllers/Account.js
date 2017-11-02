import * as AccountServ from './AccountService';

//handler ,must match the api name
const login = (req, res, next) => {
  AccountServ.login(req.swagger.params, res, next);
};


export { login };
