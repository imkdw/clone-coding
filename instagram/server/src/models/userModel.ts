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
}

export default UserModel;
