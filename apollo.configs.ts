// apollo.config.ts
module.exports = {
    client: {
      service: {
        name: 'UseGQL',
        // URL to the GraphQL API
        url: 'http://localhost:4000',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.ts',
      ],
    },
  }