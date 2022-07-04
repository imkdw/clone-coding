import dotenv from "dotenv";
dotenv.config();

const config = {
  db: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dbName: process.env.DATABASE_DBNAME,
  },
};

export default config;
