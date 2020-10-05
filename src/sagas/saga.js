// This page watches the action
import { takeEvery, put, delay } from 'redux-saga/effects';

// Generator Function - does not move down the code until the code has been executed beforehand. E.g I have delayed the code by 4 seconds below before it will more onto the 'yield put'.
// - *** Once you catch one action so not dispatch this again as you will get an infinate loop *** - //
function* ageUpAsync() {
  yield delay(3000);
  yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}

export function* watchAgeUp() {
  yield takeEvery('AGE_UP', ageUpAsync);
}

// *** The benefit to Redux-Saga in comparison to Redux-Thunk is that you can avoid callback hell meaning that you can avoid passing in functions and calling them inside. Additionally, you can more easily test your asynchronous data flow. *** //
