import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app"

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyAwpRSq7kDdK_HpoDouLdViRSBgRxWnU_Y",
  authDomain: "league-of-legends-login.firebaseapp.com",
  projectId: "league-of-legends-login",
  storageBucket: "league-of-legends-login.appspot.com",
  messagingSenderId: "576669137995",
  appId: "1:576669137995:web:f28775058a4cc001b821ce"
};

initializeApp(firebaseConfig);

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
