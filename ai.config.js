module.exports = {
  apps: [
    {
      name: "ai-web-tz",
      script: "npm",
      args: "start",
      instances: "1",
      autorestart: true,
      watch: false,
      max_memory_restart: "2G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
