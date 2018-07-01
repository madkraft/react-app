import { DATA_RECEIVED } from './types'

export default function data(state = {}, action = {}) {
  switch (action.type) {
    case DATA_RECEIVED:
      return action.data
    default:
      return state
  }
}
