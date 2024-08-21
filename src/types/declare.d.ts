type ApiVersion = `v${number}`

interface ImportMetaEnv {
  BITPIN_ORIGIN: string
  FALLBACK_BITPIN_ORIGIN: string
  API_VERSION: ApiVersion
}
