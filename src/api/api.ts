import axios, { AxiosRequestConfig } from 'axios'

const { VITE_API_VERSION, VITE_FALLBACK_BITPIN_ORIGIN } = import.meta.env

const baseURL = `${VITE_FALLBACK_BITPIN_ORIGIN}/${VITE_API_VERSION}`

export const axiosInstance = axios.create({
  baseURL,
})

export class API {
  static async request<TResponse>(config: AxiosRequestConfig) {
    return axiosInstance.request<TResponse>(config).then(res => res.data)
  }
}
