import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/users`;

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

function* fetchUsers(action) {
    try {
        const users = yield call(getApi);
        yield put({ type: 'GET_FETCH_SUCCESS', users: users });
    } catch (e) {
        yield put({ type: 'GET_FETCH_FAILED', message: e.message });
    }
}

function* userSaga() {
    yield takeEvery('GET_FETCH_REQUESTED', fetchUsers);
}

export default userSaga;