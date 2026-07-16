import pg from "pg";
const Pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "connect",
  password: "admin",
  port: 5432,
});

export default Pool;
