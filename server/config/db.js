import pg from "pg";
const Pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "ecom",
  password: "admin",
  port: 5432,
});

export default Pool;
