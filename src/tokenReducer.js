const SET_TOKEN = 'SET-TOKEN'

let initialState = {
    token:null
}

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN: {
/*            let token = {
                token: action.token
            }
            return {
                ...state,
                token: token
            }*/
            return action.token
        }
    }
}

export default tokenReducer