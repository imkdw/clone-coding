import mysql from "mysql";
import { dbConfig } from "./config";

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
});

export default connection;
