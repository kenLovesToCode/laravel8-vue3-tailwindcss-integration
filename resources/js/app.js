require('./bootstrap');
import { createApp } from 'vue'

import Home from './Home'

const app = createApp({
    components: {
        Home
    }
});

app.mount('#app');