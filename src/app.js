import loaders from './loaders';

export default async ({ app, config }) => {

  await loaders({ app, config });
  app
    .listen(config.port, () =>
      console.log(`Server is running on port: ${config.port}`)
    ).on('error', () => {
      process.exit(1);
    });
}
