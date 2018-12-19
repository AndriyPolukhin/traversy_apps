import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// import Reducers
// @todo:


// 1. Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBmLzuognXcsekh1lVW1z-0Az59cvYTcvs",
  authDomain: "reactclientpanel-dab35.firebaseapp.com",
  databaseURL: "https://reactclientpanel-dab35.firebaseio.com",
  projectId: "reactclientpanel-dab35",
  storageBucket: "reactclientpanel-dab35.appspot.com",
  messagingSenderId: "790719035163"
};

// 2. react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

// 3. Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// 4. Initialize the firestore
// const firestore = firebase.firestore();

// 5. Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// 6. Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// 7. Create  initial state
const initialState = {};
// 8. Create Store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


// 9. Export the store
export default store;