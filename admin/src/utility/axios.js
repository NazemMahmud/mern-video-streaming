import axios from 'axios';
import {appConfig} from "../config/config";
import {getAccessToken} from "./utils";

const guestInstance = axios.create({
   baseURL: appConfig.apiBaseUrl,
   timeout: 1000,
   headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
   }
});

const authInstance = axios.create({
   baseURL: appConfig.apiBaseUrl,
   timeout: 1000,
   headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
   }
});


authInstance.interceptors.request.use(
    config => {
       // ** Get token from localStorage / state
       // ** If token is present add it to request's Authorization Header

       const accessToken = getAccessToken ; // if from store: store.getState().auth.accessToken
       if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${accessToken}`;
       }
       return config;
    },
    error => Promise.reject(error)
);

export {guestInstance, authInstance};
