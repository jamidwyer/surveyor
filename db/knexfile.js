import dotenv from "dotenv";
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const connection = {
  test: {
    client: "postgresql",
    connection:
      "postgres://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASSWORD +
      "@localhost:5432/ancestry",
  },

  development: {
    client: "postgresql",
    connection:
      "postgres://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASSWORD +
      "@localhost:5432/ancestry",
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
  },
};

export default connection;
