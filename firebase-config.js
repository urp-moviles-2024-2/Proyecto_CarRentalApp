import {initializeApp} from 'firebase/app';
import {initializeAuth, inMemoryPersistence} from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDsFGpcnrvzAJRUMs-sJcMliCxDUIlMXEk',
  authDomain: 'loginappcar.firebaseapp.com',
  projectId: 'loginappcar',
  storageBucket: 'loginappcar.firebasestorage.app',
  messagingSenderId: '499695849448',
  appId: '1:499695849448:web:26762d96ffce761c1dde5d',
  measurementId: 'G-XQ6BX87H8E',
};
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: inMemoryPersistence,
});
