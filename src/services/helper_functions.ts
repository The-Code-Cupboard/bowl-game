import { nanoid } from 'nanoid';
import * as cookieServices from './cookie_services';

export const setUserId = () => {
  let userId = cookieServices.getCookie('userId');
  //First, check if cookie of "userId" exists in browser
  if (userId === null) {
    // if not, create a cookie
    userId = nanoid();
    cookieServices.setCookie('userId', userId, 1);
  }
  return userId;
};
