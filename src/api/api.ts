import axios, { AxiosRequestConfig } from 'axios'

const { VITE_API_VERSION, VITE_FALLBACK_BITPIN_ORIGIN, VITE_BITPIN_ORIGIN } = import.meta.env

const baseURL = `${VITE_FALLBACK_BITPIN_ORIGIN}/${VITE_API_VERSION}`

export class API {
  static request<TResponse>(config: AxiosRequestConfig) {
    return axios.request<TResponse>({ baseURL, ...config }).then(res => res.data)
  }
}
