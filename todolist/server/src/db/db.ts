import mysql from "mysql";
import config from "../config/config";
import { registerType } from "../types/auth.interface";

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.username,
  password: config.db.password,
  database: config.db.dbName,
});

export async function insert(userDTO: registerType) {
  const insertQuery = `INSERT INTO \
    users(userId, password, nickname, email) \
    values("${userDTO.id}", "${userDTO.password}", "${userDTO.nickname}", "${userDTO.email}")`;

  return new Promise((res, rej) => {
    connection.query(insertQuery, (err: any, results) => {
      if (err) {
        rej(err);
      }

      res(userDTO);
    });
  });
}

export async function select(userDTO: string, attr: string) {
  const selectQuery = `SELECT FROM users WHERE ${attr}="${userDTO}"`;

  return new Promise((res, rej) => {
    connection.query(selectQuery, (err: any, results) => {
      if (err) {
        rej(err);
      }

      res(results);
    });
  });
}
