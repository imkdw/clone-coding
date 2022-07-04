import { config } from "../config/config";
import axios from "axios";
import { accountType } from "../type/auth.interface";

export async function register(account: accountType) {
  const url = config.url.register;

  try {
    const response = await axios.post(url, account);
    return response;
  } catch (error: any) {
    // 요청은 됬으나 200이외에 코드가 응답된 경우
    if (error.response) {
      return error.response;
    }
    // 요청은 됬으나 응답을 받지 못한경우
    if (error.request) {
      return error.request;
    }
  }
}
