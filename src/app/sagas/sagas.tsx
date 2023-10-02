// import { put, takeLatest, all } from 'redux-saga/effects';

// // Define the action types
// const FETCH_ARXIV_CONTENT = 'FETCH_ARXIV_CONTENT';
// const FETCH_ARXIV_CONTENT_SUCCESS = 'FETCH_ARXIV_CONTENT_SUCCESS';
// const FETCH_ARXIV_CONTENT_FAILURE = 'FETCH_ARXIV_CONTENT_FAILURE';

// // Define the action creators
// const fetchArxivContentAction = () => ({ type: FETCH_ARXIV_CONTENT });
// const fetchArxivContentSuccessAction = (data) => ({
//   type: FETCH_ARXIV_CONTENT_SUCCESS,
//   payload: data,
// });
// const fetchArxivContentFailureAction = (error) => ({
//   type: FETCH_ARXIV_CONTENT_FAILURE,
//   payload: error,
// });

// // Define the initial state
// const initialState = {
//   arxivContent: [],
//   loading: false,
//   error: null,
// };

// // Define the reducer
// const arxivReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_ARXIV_CONTENT:
//       return { ...state, loading: true, error: null };
//     case FETCH_ARXIV_CONTENT_SUCCESS:
//       return { ...state, arxivContent: action.payload, loading: false };
//     case FETCH_ARXIV_CONTENT_FAILURE:
//       return { ...state, error: action.payload, loading: false };
//     default:
//       return state;
//   }
// };

// // Define the saga
// function* fetchArxivContentSaga() {
//   try {
//     const response = yield fetchArxivContent();
//     const arxivContent = response.feed.entry.map((|) => ({
//       id: entry.id,
//       title: entry.title,
//       summary: entry.summary,
//       published: entry.published,
//       updated: entry.updated,
//       authors: entry.author,
//       link: entry.link,
//     }));
//     yield put(fetchArxivContentSuccessAction(arxivContent));
//   } catch (error) {
//     yield put(fetchArxivContentFailureAction(error));
//   }
// }

// // Define the watcher saga
// function* watchFetchArxivContent() {
//   yield takeLatest(FETCH_ARXIV_CONTENT, fetchArxivContentSaga);
// }

// // Define the root saga
// export function* rootSaga() {
//   yield all([watchFetchArxivContent()]);
// }
