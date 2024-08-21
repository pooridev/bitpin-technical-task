import axios from 'axios'

const { BITPIN_ORIGIN, API_VERSION } = import.meta.env

const baseURL = `${BITPIN_ORIGIN}/${API_VERSION}`

export const axiosInstance = axios.create({
  baseURL,
})
