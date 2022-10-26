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
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    storage: process.env.FIREBASE_STORAGE,
  },
};

export default config;
