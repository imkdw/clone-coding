import connection from "../database";

type Data = string[] | number[] | string | number;
export const sendQuery = (query: string, data: Data): Promise<any[]> => {
  return new Promise((res, rej) => {
    if (Array.isArray(data)) {
      connection.query(query, [...data], (err, result) => {
        if (err) {
          console.error("DB Error", err);
          rej(err);
        }

        res(result);
      });
    } else {
      connection.query(query, data, (err, result) => {
        if (err) {
          console.error("DB Error", err);
          rej(err);
        }

        res(result);
      });
    }
  });
};
