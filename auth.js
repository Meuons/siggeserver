const db = require("./db");
/*If the provided token exists in the same row as the provided username
grant access*/
exports.authorize = (token, username, admin, callback) => {
  db.each(
    "SELECT username, token, admin FROM users WHERE username = '" +
      username +
      "'",
    (row) => {
      /*All the callbacks look a bit silly.
      Due to the exported db function I could not use regular returns */
      if (row) {
        if (row.username === username && row.token === token) {
          if (admin) {
            /*Check if the user is authorized for admin privileges*/
            callback(row.admin === 1);
          } else {
            callback(true);
          }
        } else {
          callback(false);
        }
      } else {
        callback(false);
      }
    }
  );
};
