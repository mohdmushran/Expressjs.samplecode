module.exports = {
  development: {
    // dialect: "sqlite",
    // storage: "./db.development.sqlite"
    username: 'root',
    password: '',
    database: 'mushranlaravel',
    host: 'localhost',
    dialect: 'mysql',
    secret_key: 'hgfcjhgdkhgfkfkjfljhfghjgghfkghfhkffjhfjh'
    // use_env_variable: 'DATABASE_URL'
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
    secret_key: 'hgfcjhgdkhgfkfkjfljhfghjgghfkghfhkffjhfjh'
  }
};
