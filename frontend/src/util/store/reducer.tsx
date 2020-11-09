interface def {
    state?: any,
    action?: any
}

const reducer = ({state, action}: def) => {
    switch(action.type) {
        case "setTitle":
            return {
                ...state,
                gameTitle: action.gameTitle
            };
        case "setDate":
            return{
                ...state,
                gameDate: action.gameDate
            };
    }
}

export default reducer