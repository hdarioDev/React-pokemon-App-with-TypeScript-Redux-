
import { fromJS } from 'immutable'
import { SET_LOADING } from '../actions/types'

const initialState = fromJS({
    loading: false
})

export const uiReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case SET_LOADING:
            return state.setIn(['loading'], action.payload); //immutable
        default:
            return state
    }
}
