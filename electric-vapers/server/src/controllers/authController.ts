import { Request, Response, NextFunction } from "express";
import { insertUser, getUser } from "../models/authModel";
import { compareHash, createHash } from "../module/secure";
import { createToken, decodeToken } from "../module/jwt";

/** 회원가입 */
export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, rePassword, nickname } = req.body;

  /** 패스워드 일치여부 검사 */
  if (password !== rePassword) {
    res.status(400).json("");
    return;
  }

  /** 비밀번호 hash 암호화 */
  const hashedPassword = await createHash(password);
  if (!hashedPassword) {
    res.status(500).json("");
  }

  /** 유저 추가 에러 핸들링 */
  try {
    await insertUser({ email, hashedPassword, nickname });
    res.status(200).json("");
    return;
  } catch (err: any) {
    res.status(500).json("");
    throw new Error(err);
  }
};

/** 로그인 */
export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  /** 받은 값이 비어있는지 확인 */
  if (email.length === 0 || password.length === 0) {
    res.status(400).json("");
    return;
  }

  const userQuery = await getUser(email);

  /** 이메일로 데이터 조회 불가시 */
  if (userQuery.length === 0) {
    res.status(400).json("");
    return;
  }

  /** 이메일 조회는 성공이나 패스워드 불일치시 */
  const hashedPassword = userQuery[0].password;
  const isPasswordMatch = await compareHash(password, hashedPassword);
  if (!isPasswordMatch) {
    res.status(400).json("");
    return;
  }

  const nickname = userQuery[0].nickname;
  const accessToken = createToken(email, nickname);
  console.log(userQuery);

  res.json({
    email: userQuery[0].email,
    nickname: userQuery[0].nickname,
    accessToken,
  });
};

/** 사용자가 기존에 로그인한 유저인지 확인 */
export const checkLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
  const { accessToken } = req.body;

  /** 엑세스토큰을 못받음 */
  if (!accessToken) {
    res.status(400).json("");
  }

  const decodedToken = decodeToken(accessToken);

  /** 토큰만료 또는 변형됨 */
  if (decodedToken.email === "" && decodedToken.nickname === "") {
    res.status(400).json();
    return;
  }

  const email = decodedToken.email;
  const userQuery = await getUser(email);

  /** 유저 확인 불가 */
  if (userQuery.length === 0) {
    res.status(400).json({ message: "유저 확인 불가" });
    return;
  }

  res.json({ message: `인증성공` });
};
