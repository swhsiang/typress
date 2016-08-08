export default {
  host: '',
  port: 3000,
  logLevel: 'warn',
  pg: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: '',
      password: '',
      database: '',
      charset: 'utf8',
      timezone: 'UTC',
      pool: {
        min: 0,
        max: 7
      }
    }
  }
};
