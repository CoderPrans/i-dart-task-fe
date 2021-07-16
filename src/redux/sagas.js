import {all, call, put, takeEvery} from 'redux-saga/effects';

const apiUrl = "http://localhost:7888";

function getApi() {
  console.log('getting api')
  return fetch(apiUrl)
    .then(res => res.json())
    .catch(err => {throw err});
}

function* fetchData(action) {
    try {
	const csvData = yield call(getApi);
	yield put({type: 'GET_DATA_SUCCESS', data: csvData})
    } catch (e) {
	yield put({type: 'GET_DATA_FAILED', message: e.message})
    }
}

function* dataSaga() {
    yield takeEvery('GET_DATA_REQUESTED', fetchData);
}

export default function* rootSaga() {
    yield all([
	dataSaga()
    ])
}
