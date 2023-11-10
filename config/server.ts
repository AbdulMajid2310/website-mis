// File: config/server.js

export default ({ env }) => ({
  host: env("HOST", "admin.nihayatulamal.sch.id"), // Ganti dengan domain Anda
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  url: "https://admin.nihayatulamal.sch.id", // Ganti dengan URL Anda
});
