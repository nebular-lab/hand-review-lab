## 環境設定


```
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4 @apollo/client graphql @apollo/react-hooks cross-fetch
```

```
yarn add -D @graphql-codegen/cli
yarn graphql-codegen init
yarn
yarn add -D @graphql-codegen/typescript
```

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
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/types/generated/graphql.ts': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

export default config
