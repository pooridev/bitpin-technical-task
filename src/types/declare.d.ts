type ApiVersion = `v${number}`

interface ImportMetaEnv {
  VITE_BITPIN_ORIGIN: string
  VITE_FALLBACK_BITPIN_ORIGIN: string
  VITE_API_VERSION: ApiVersion
}
