
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js'); 
  importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js'); 
  
  // Initialize the Firebase app in the service worker by passing in 
  // your app's Firebase config object. 
  // https://firebase.google.com/docs/web/setup#config-object 
  firebase.initializeApp({ 
    apiKey: "AIzaSyAN-X9u7n7QnM8RLrVV4YnXq2MmVz6WNfw",
    authDomain: "em-issyoo.firebaseapp.com",
    projectId: "em-issyoo",
    storageBucket: "em-issyoo.appspot.com",
    messagingSenderId: "33480809995",
    appId: "1:33480809995:web:74df1e056f7638d0b5310e",
    measurementId: "G-C64NWHRT0Y"
  }); 
  
  // Retrieve an instance of Firebase Messaging so that it can handle background 
  // messages. 
  const messaging = firebase.messaging(); 
  
  
  
 // If you would like to customize notifications that are received in the 
 // background (Web app is closed or not in browser focus) then you should 
 // implement this optional method. 
 // Keep in mind that FCM will still show notification messages automatically  
 // and you should use data messages for custom notifications. 
 // For more info see:  
 // https://firebase.google.com/docs/cloud-messaging/concept-options 
 messaging.onBackgroundMessage(function(payload) { 
   console.log( "[firebase-messaging-sw.js] Received background message ",  payload );
  const notificationTitle = 'payload.notification.title';
  const notificationOptions = { body: 'payload.notification.body', image: payload.notification.image };
  
   self.registration.showNotification(notificationTitle,  notificationOptions); 
 });
