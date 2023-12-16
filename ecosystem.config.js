module.exports = {
  apps: [
    {
      name: 'strapi-app',
      cwd: '/home/gabriel/gabrielmanfroi-back', // must have absolute path
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
