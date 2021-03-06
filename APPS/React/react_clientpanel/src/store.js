import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// import Reducers
// @todo:
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

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
const firestore = firebase.firestore();

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);


// 5. Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// 6. Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer,
});


// CHECK FOR SETTING IN LOCAL STORAGE
if (localStorage.getItem('settings') === null) {
  // Default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  }
  // Set to local storage
  localStorage.setItem(
    'settings',
    JSON.stringify(defaultSettings)
  );
}

// 7. Create  initial state
const initialState = {
  settings: JSON.parse(localStorage.getItem('settings'))
};
// 8. Create Store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


// 9. Export the store
export default store;