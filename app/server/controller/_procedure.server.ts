import { middleware } from '@server/util/middleware.server';
import { _createUser, _verifyLogin } from '@server/controller/accounts.server';
import { _addSubscribers } from '@server/controller/institution.server';

export const procedure = {
  createUser: middleware(_createUser),
  verifyLogin: middleware(_verifyLogin),
  addSubscribers: middleware(_addSubscribers),
}
