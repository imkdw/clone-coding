import { RowDataPacket, OkPacket } from "mysql2";
import { sendQuery } from "./promise";

interface registerParams {
  email: string;
  hashedPassword: string;
  nickname: string;
}

/**
 * users 테이블에 정보를 넣음
 * @param email {string} 이메일
 * @param hashedPassword {string} 암호화된 비밀번호
 * @param nickname {string} 닉네임
 * @returns OkPacket 배열을 반환
 */
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

/**
 * 이메일을 기준값으로 유저의 모든 정보를 가져옴
 * @param email {string} 이메일
 * @returns 이메일, 비밀번호, 닉네임을 반환
 */
export const getUser = async (email: string): Promise<loginReturns[]> => {
  const query = "SELECT * FROM users WHERE email=?";
  const queryResult = await sendQuery(query, email);
  return queryResult;
};
