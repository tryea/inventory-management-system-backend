require("dotenv").config();

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/contexts/**/*.model.ts"], // adjusted entities path
  migrations: ["src/migration/**/*.ts"],
  //   subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/contexts", // adjusted entitiesDir path
    migrationsDir: "src/migration",
    // subscribersDir: "src/subscriber",
  },
};
