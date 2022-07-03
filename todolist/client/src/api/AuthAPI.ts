import { config } from "../config/config";
import axios from "axios";
import { accountType } from "../type/auth.interface";

export async function register(account: accountType) {
  const tempAccount = { id: "123", pw: "321" };
  const url = config.url.register;
  const data = JSON.stringify({ tempAccount });
  const response = await axios.post(url, data);

  return response;
}
