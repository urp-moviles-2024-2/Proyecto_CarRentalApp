import { initializeApp } from 'firebase/app';
import { initializeAuth, inMemoryPersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { API_KEY_CREDENTIAL, AUTH_DOMAIN_CREDENTIAL, DATABASE_URL_CREDENTIAL, PROJECT_ID_CREDENTIAL, STORAGE_BUCKET_CREDENTIAL, MESSAGING_SENDER_ID_CREDENTIAL, APP_ID_CREDENTIAL, MEASUREMENT_ID_CREDENTIAL } from '@env';

export const firebaseConfig = {
  apiKey: API_KEY_CREDENTIAL,
  authDomain: AUTH_DOMAIN_CREDENTIAL,
  databaseURL: DATABASE_URL_CREDENTIAL,
  projectId: PROJECT_ID_CREDENTIAL,
  storageBucket: STORAGE_BUCKET_CREDENTIAL,
  messagingSenderId: MESSAGING_SENDER_ID_CREDENTIAL,
  appId: APP_ID_CREDENTIAL,
  measurementId: MEASUREMENT_ID_CREDENTIAL
};
console.log(firebaseConfig)


export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: inMemoryPersistence,
});
const database = getDatabase(app);
export { database };


