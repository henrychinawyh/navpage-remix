module.exports = {
  apps: [
    {
      name: "nav-page",
      script: "./server.js",
      watch: true,
      ignore_watch: ["node_modules", "logs"],
    },
  ],
};
