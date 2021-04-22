import firebase from "firebase";
import "firebase/messaging";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBnprsWNdM7cG8tP1Dt3QFcZPILhPExaq8",
  authDomain: "react-notifications-def14.firebaseapp.com",
  projectId: "react-notifications-def14",
  storageBucket: "react-notifications-def14.appspot.com",
  messagingSenderId: "84444461225",
  appId: "1:84444461225:web:baac860cb486c995f391b8",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
firebase.analytics();

export const getToken = (setTokenFound) => {
  return messaging
    .getToken({
      vapidKey:
        "BJk86eE_8h4ffW434eRjdSBtMN0XKd-DVaCBZRPCTardC_ZD8dvq44Drr4l6eUnK9gKKZTKz3aOM3oPfUEljMQE",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
