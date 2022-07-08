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
  secure: {
    saltCount: 10,
    jwtSecretKey: "imkdw",
    jwtAlgorithm: process.env.JWT_ALGORITHM,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    jwtIssuer: process.env.JWT_ISSUER,
  },
};

export default config;
