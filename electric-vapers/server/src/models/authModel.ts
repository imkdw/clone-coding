import { RowDataPacket, OkPacket } from "mysql2";
import { sendQuery } from "./promise";

interface registerParams {
  email: string;
  hashedPassword: string;
  nickname: string;
}

export const insertUser = async ({ email, hashedPassword, nickname }: registerParams): Promise<OkPacket[]> => {
  const query = "INSERT INTO users VALUES(?, ?, ?)";
  const values = [email, hashedPassword, nickname];
  const queryResult = await sendQuery(query, values);
  console.log(queryResult);
  return queryResult;
};

interface loginReturns extends RowDataPacket {
  email: string;
  password: string;
  nickname: string;
}

export const getUser = async (email: string): Promise<loginReturns[]> => {
  const query = "SELECT * FROM users WHERE email=?";
  const queryResult = await sendQuery(query, email);
  return queryResult;
};
