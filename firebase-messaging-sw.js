
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyDpeefIv35fOaNFBuJfnqFPH-Xqck1ugsg",
    authDomain: "nilami-adda.firebaseapp.com",
    projectId: "nilami-adda",
    storageBucket: "nilami-adda.appspot.com",
    messagingSenderId: "1064605111508",
    appId: "1:1064605111508:web:04b8305492811f05b81741",
    measurementId: "G-WCK4080NMD"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo512.jpg",
        
        
    };
       
    // eslint-disable-next-line no-restricted-globals
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
        
    );
    
});
self.addEventListener('notificationclick', event => {
    console.log(event)
    return window.location = "https://nilamiadda.com/";
  });