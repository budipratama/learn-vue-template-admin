import { createApp } from "vue";
import { createPinia } from "pinia";

// import App from "./App.vue";
import App from "./app/app.vue";
import router from "./router";
import store from "./stores";

// import "./assets/main.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/plugins/jqvmap/jqvmap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.css";
import "admin-lte/plugins/summernote/summernote-bs4.min.css";

import "./index.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(store);

app.mount("#app");
