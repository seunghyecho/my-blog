import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from 'modules/auth';
import loading from 'modules/loading';
import user, { userSaga } from 'modules/user';
import todos from 'modules/todos';
import write, { writeSaga } from 'modules/write';
import post, { postSaga } from 'modules/post';
import posts, { postsSaga } from 'modules/posts';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  todos
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;