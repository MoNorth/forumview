import 'jquery'
import 'jquery.cookie'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './static/images/favicon.ico'


// import 'bootstrap-fileinput/css/fileinput.min.css'
// import 'bootstrap-fileinput/js/fileinput.min.js'
// import 'bootstrap-fileinput/img/loading-sm.gif'
// import 'bootstrap-fileinput/img/loading1.gif'


// import './static/lib/layer.css'
// import './static/lib/layer.js'

import routes from './routers/index'
import quillEditor from 'vue-quill-editor'



import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(quillEditor)



// import './static/lib/reset.css'
 
const router = new VueRouter({routes})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
