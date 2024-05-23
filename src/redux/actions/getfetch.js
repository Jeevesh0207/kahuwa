import * as type from '../types'
export function getUsers() {
    return {
        type: type.GET_FETCH_REQUESTED,
    }
}