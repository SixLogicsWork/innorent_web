// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object


firebase.initializeApp({
          apiKey: 'AIzaSyC0LVf6OkNshMLWG_ho0nw6K7HccmBYHMQ',
          appId: '1:296149211463:web:5d97a1c70ca88e29581462',
          messagingSenderId: '296149211463',
          projectId: 'homehunter-cb832',
          authDomain: 'homehunter-cb832.firebaseapp.com',
          storageBucket: 'homehunter-cb832.appspot.com',
          measurementId: 'G-FRKLWB936L',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload.notification.body);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

// const channel = new BroadcastChannel('background-message-channel');

// messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload.notification.body);
//     channel.postMessage(payload.notification.body);
//     // self.registration.showNotification(payload.notification.title, {
//     //     body: payload.notification.body,
//     // });
// });




// self.addEventListener('notificationclick', function (event) {
//     event.notification.close();
//     console.log('notification clicked:',event);
//     // event.waitUntil(
//     //     clients.openWindow(event.notification.data.url)
//     // );
// });




// messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload.body);
//     const toastifyDiv = document.getElementById('toastify')
// console.log("element", toastifyDiv);
//     if (toastifyDiv) {
//         console.log("inside");
//         toastifyDiv.innerHTML = payload.body;
//     }
// });