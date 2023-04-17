const sqlite3 = require("sqlite3").verbose();
/*Create the db with the users table and the admin user if it doesn't exist*/
let db = new sqlite3.Database(
  "./siggeDB.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the sigge DB!");
    }
  }
);

db.serialize(() => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS users
              (
                user_id INTEGER PRIMARY KEY,
                 password TEXT NOT NULL, 
                 username TEXT NOT NULL UNIQUE, 
                 token TEXT UNIQUE, 
                 logged_in BIT DEFAULT 0, 
                 admin BIT DEFAULT 0
              );`
  )
    .run()
    .finalize();
  db.prepare(
    "INSERT OR IGNORE INTO users (username, password, admin)VALUES ('admin', 'pass', 1)"
  )
    .run()
    .finalize();
});
/*Exported db functions*/
exports.run = (query, callback) => {
  /*The error callback is always returned even when things go right
If the err callback is null there is no error (duh!). Maybe a bit of a tacky solution
but hey as long as it works*/
  db.run(query, (err) => {
    callback(err);
  });
};

exports.each = (query, callback) => {
  db.all(query, (err, rows) => {
    if (err) {
      console.log(JSON.stringify(err));
      callback(err);
      return;
    }
    if (rows.length === 0) {
      console.log(JSON.stringify(rows));
      callback(null, 0);
    } else {
      for (let i = 0; i < rows.length; i++) {
        callback(rows[i]);
      }
    }
  });
};
