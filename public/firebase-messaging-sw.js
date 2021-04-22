// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyBnprsWNdM7cG8tP1Dt3QFcZPILhPExaq8",
  authDomain: "react-notifications-def14.firebaseapp.com",
  projectId: "react-notifications-def14",
  storageBucket: "react-notifications-def14.appspot.com",
  messagingSenderId: "84444461225",
  appId: "1:84444461225:web:baac860cb486c995f391b8",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
