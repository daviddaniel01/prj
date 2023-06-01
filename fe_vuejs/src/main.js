import { createApp } from 'vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import {
    List,
    Drawer,
    Button,
    Menu,
    message
} from 'ant-design-vue';
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.rtl.min.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Button);
app.use(Menu);
app.use(List);
app.use(Drawer);
app.mount('#app');

app.config.globalProperties.$message = message;