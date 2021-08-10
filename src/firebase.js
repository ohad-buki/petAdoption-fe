import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";

let firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_IP,
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
export const storage = getStorage(firebaseApp);
export const uploadAndGetImg = async (imgRef, file) => {
  try {
    await uploadBytes(imgRef, file);
    console.log("Uploaded a blob or file!");
    const url = await getDownloadURL(imgRef);
    return url;
  } catch (e) {
    console.log(e);
  }
};
// export
