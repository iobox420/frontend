import tokenReducer from "./tokenReducer"

let store = {
    _state: {
        token: null
    },
    getState() {
        return this._state
    },
    getToken() {
      return ("Bearer " + this._state.token)
    },
    dispatch(action) {
        let test = tokenReducer(this._state.token, action)
        this._state.token = test
    }
}
export default store;
