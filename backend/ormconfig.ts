module.exports = {
  type: 'sqlite',
  database: 'data/dev.sqlite',
  entities: ['dist/src/entities/**/*.entity.js'],
  migrations: ['dist/src/migrations/**/*.js'],
  logging: true,
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
