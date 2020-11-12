export interface StateInterface {
    gameTitle?: string,
    gameDate?: string,
    theme: string
}

export const InitialState:StateInterface = {
    gameTitle: '',
    gameDate: '',
    theme: 'light'
}

