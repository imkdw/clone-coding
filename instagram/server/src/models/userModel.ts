import connection from "../db";

class UserModel {
  static getUserProfile = async (email: string): Promise<any[]> => {
    return new Promise((res, rej) => {
      const query =
        "SELECT email, name, nickname, profile, introduce\
      FROM users\
      WHERE email = ?";
      connection.query(query, [email], (err, result) => {
        if (err) {
          rej(err);
        }

        res(result);
      });
    });
  };

  static searchUserWithNickname = async (nickname: string): Promise<any[]> => {
    return new Promise((res, rej) => {
      const query = `select nickname, profile, introduce from users where nickname like '%${nickname}%' or introduce like '%${nickname}%'`;
      connection.query(query, (err, result) => {
        if (err) {
          rej(err);
        }

        res(result);
      });
    });
  };
}

export default UserModel;
