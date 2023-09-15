import 'font-awesome/css/font-awesome.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';

import store from './config/store'
import router from './config/router'

// import './config/msgs'


const app = createApp(App)

app.use(store) 


// Temporario
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRpZWdvIEguIEdhbHbDo28iLCJlbWFpbCI6ImRpZWdvaGVucmlxdWVnYWx2YW9AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY5NDcxMjAxMCwiZXhwIjoxNjk0OTcxMjEwfQ.rY6_ZVXuinZ4UxVv_umUtVodQLV3tofxDRS149QL65M'
// Temporario

app.use(router)


app.mount('#app')