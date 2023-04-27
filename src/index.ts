import { CrossrefClient } from './gen'

export * from './gen'
export * from './utils'

const AGENT = 'CrossrefOpenapiClientTs/1.0' // unstable
const REPO = 'github.com/docmaps-project/crossref-openapi-client-ts'

type CreateClientConfig = {
  base: string
  politeMailto: string
  politePlatform: string
}

const ConfigDefaults: CreateClientConfig = {
  base: 'https://api.crossref.org',
  // to be polite; see https://api.crossref.org/swagger-ui/index.html#Etiquette
  politeMailto: 'not-provided',
  politePlatform: 'node',
}

export function CreateCrossrefClient(config: Partial<CreateClientConfig>): CrossrefClient {
  const c: CreateClientConfig = {
    ...ConfigDefaults,
    ...config,
  }

  return new CrossrefClient({
    BASE: c.base,
    HEADERS: {
      'User-Agent': `${AGENT} (${REPO}; mailto:${c.politeMailto}) ${c.politePlatform}`,
    },
  })
}
