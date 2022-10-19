import dotenv from "dotenv";

dotenv.config();

const config = {
  db: {
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_DBNAME,
  },
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    expiresIn: "1h",
  },
};

export default config;
