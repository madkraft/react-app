import { DATA_RECEIVED } from './types'
import api from '../api'

export const dataReceived = data => ({
  type: DATA_RECEIVED,
  data
})

export const getData = () => dispatch =>
  api.data.get().then(data => dispatch(dataReceived(data)))
