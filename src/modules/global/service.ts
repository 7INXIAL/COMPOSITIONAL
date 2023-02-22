import { AxiosRequestConfig } from "axios";
export const submit = (data: AxiosRequestConfig<{ id: string }>) => {
  return request.get("/submit", data);
};
