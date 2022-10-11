import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://hand-review-app.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'afjd43b2ifwejb8stb',
          'x-hasura-role': 'user',
        },
      },
    },
  ],
  documents: 'src/graphql/**/*.ts',
  generates: {
    'src/gql': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
