export type StateInterface = {
  gameTitle: string
  gameDate: string
  headerAttr: boolean
  menuOpen: boolean
}

export const InitialState: StateInterface = {
  gameTitle: '',
  gameDate: '',
  headerAttr: false,
  menuOpen: false
}
