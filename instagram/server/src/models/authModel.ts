import connection from "./../db";

interface InsertUserParams {
  email: string;
  name: string;
  nickname: string;
  password: string;
}

class AuthModel {
  static insertUser = (userDTO: InsertUserParams) => {
    const { email, name, nickname, password } = userDTO;

    return new Promise((res, rej) => {
      const query = `INSERT INTO users(email, name, nickname, password)
      VALUES (?, ?, ?, ?)`;

      connection.query(query, [email, name, nickname, password], (err, result) => {
        if (err) {
          rej(err);
        }

        res(result);
      });
    });
  };

  static getPassword = async (email: string) => {
    return new Promise((res, rej) => {
      const query = `SELECT password FROM users WHERE email=?`;
      connection.query(query, [email], (err, result) => {
        if (err) {
          rej(err);
        }

        res(result);
      });
    });
  };
}

export default AuthModel;
