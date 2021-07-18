import { nanoid } from "nanoid";
import * as cookieServices from "./cookie_services";

export const setUserId = () => {
  //First, check if cookie of "userId" exists in browser
  if (cookieServices.getCookie("userId") === null) {
    // if not, create a cookie
    cookieServices.setCookie("userId", nanoid(), 1);
  }
  //In all cases, userId is now set as a cookie to get
  return cookieServices.getCookie("userId");
};
