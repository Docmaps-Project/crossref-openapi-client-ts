import { CrossrefClient } from './gen'

export * from './gen'
export * from './utils'

const AGENT = 'CrossrefOpenapiClientTs/1.0' // unstable
const REPO = 'github.com/docmaps-project/crossref-openapi-client-ts'

/**
 * Configuration that can be overridden in the constructor of a CrossrefClient
 *
 * @param base : a base URL that hosts the crossref API to address. (Generally don't override this.)
 * @param politeMailto : your email address. Crossref will give you preferable load treatment if you supply.
 * @param politePlatform : the platform of your tool. Probably and default `node`.
 * @since 0.1.0
 */
export type CreateClientConfig = {
  base: string
  politeMailto: string
  politePlatform: string
}

export const ConfigDefaults: CreateClientConfig = {
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
