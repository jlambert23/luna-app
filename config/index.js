const env = process.env;

export const
  node_env = env.NODE_ENV,
  host = env.HOST,
  port = env.PORT,
  db_conn = env.DB_CONNECTION_STRING;

export default {
  node_env,
  host,
  port,
  db_conn,
}
