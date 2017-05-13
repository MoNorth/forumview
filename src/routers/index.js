/**
*	路由页，这个先把你们的目录结构确认了再说
*
**/
import Aboutme from '../components/user/index.vue'

import EditNew from '../components/user/editnew.vue'

import projectShow from '../components/project/index.vue'

import indexPage from '../components/index/index.vue'

import UserInfo from '../components/user/userinfo.vue'

import Label from '../components/label/index.vue'

import LabelPage from '../components/label/labelPage.vue'


export default [
  { path: '/aboutme', component: Aboutme, name: 'aboutme'},
  { path: '/project/:id', component: projectShow },

  { path: '/editnew', component: EditNew },

  { path: '/label', component: Label },

  { path: '/labelpage/:label', component: LabelPage },

  { path: '/', component: indexPage },
  { path: '/userinfo/:id', component: UserInfo }

]
