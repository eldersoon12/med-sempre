import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = "";

export const request = async (
  endpoint: string,
  method: string,
  data: object = {}
) => {
  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return await axios({
    method,
    url: `${baseURL}/${endpoint}`,
    data,
  });
};
