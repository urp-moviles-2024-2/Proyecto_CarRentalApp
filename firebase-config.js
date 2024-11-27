import {initializeApp} from 'firebase/app';
import {initializeAuth, inMemoryPersistence} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
  apiKey: "API_KEY_CREDENTIAL",
  authDomain: "APP_ID_CREDENTIAL",
  projectId: "PROJECT_ID_CREDENTIAL",
  storageBucket: "STORAGE_BUCKET_CREDENTIAL",
  messagingSenderId: "MESSAGING_SENDER_ID_CREDENTIAL",
  appId: "APP_ID_CREDENTIAL",
  measurementId: "MEASUREMENT_ID_CREDENTIAL"
};
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: inMemoryPersistence,
});
const database=getDatabase(app);
export {database};
