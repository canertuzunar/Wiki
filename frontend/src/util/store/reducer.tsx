import { StateInterface } from './initalState'

export interface ReducerInterface {
  type?: string
  value?: any
}

const reducer = (state: StateInterface, action: ReducerInterface) => {
  switch (action.type) {
    case 'setTitle':
      return {
        ...state,
        gameTitle: action.value
      }
    case 'setDate':
      return {
        ...state,
        gameDate: action.value
      }
    case 'setShadow':
      return {
        ...state,
        headerAttr: action.value
      }
    default:
      throw new Error()
  }
}

export default reducer
