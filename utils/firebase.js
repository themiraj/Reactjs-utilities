
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getMessaging, getToken, isSupported } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
// if (!firebase.getApps.length) {
//     firebase.initializeApp(firebaseConfig)
// }

export const getFirebaseMessageToken = async () => {
    const messaging = getMessaging(app);
    if (isSupported()) {
        try {
            let tokenId = await getToken(messaging, { vapidKey: "", })
            return { tokenId }
        } catch (error) {
            return { error }
        }
    } else {
        return { error: " Notification Not Supported" }
    }
}

export const onMessageListener = () => {
    const messaging = getMessaging(app);
    return new Promise((resolve, reject) => {
        if (messaging) {
            messaging.onMessage((payload) => {
                resolve(payload)
            })
        } else {
            reject(null)
        }
    })
}
