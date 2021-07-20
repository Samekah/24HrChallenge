const db = require("../dbConfig");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.username = data.username;
    this.body = data.body;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const postData = await db.query("SELECT * FROM post;");
        console.log(postData);
        const post = postData.rows.map((p) => new Post(p));
        resolve(post);
      } catch (err) {
        reject("Error retrieving posts!");
      }
    });
  }

  static create(title, username, body) {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query(
          `INSERT INTO post (title, username, body) VALUES ($1,$2,$3) RETURNING *`,
          [title, username, body]
        );
        let post = new Post(postData.rows[0]);
        resolve(post);
      } catch (err) {
        reject("Error creating post");
      }
    });
  }
}

module.exports = Post;
