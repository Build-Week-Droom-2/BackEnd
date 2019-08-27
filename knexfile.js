module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/droom.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },
};