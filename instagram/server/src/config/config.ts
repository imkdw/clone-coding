import dotenv from "dotenv";

dotenv.config();

const config = {
  db: {
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_DBNAME,
  },
};

export default config;
