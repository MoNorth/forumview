<template>
  <div class="aboutme">
  <!-- {{data}} -->
    <headers :img="data.data.result.info_img" 
    :name="data.data.result.login_name" :message="data.data.result.info_msg"
    :email="data.data.result.email" :fixshow="!!data.data.result.email" :login_id="login_id"></headers>
    <router-link to="/editnew" class="setnew" v-show="!!data.data.result.email">发布新题目</router-link>
    <projectlist :login_id="login_id" :login_name="data.data.result.login_name"></projectlist>
  </div>
</template>
<script>
  import getData from '../../getCGI/user/aboutme'

  let data = {data:{
    result:{}
  }};
  export default {
    name : 'aboutme',
    data() {
      return {
        data: data
      }
    },
    methods : {
    },
    computed: {
      login_id() {
        return this.$route.params.id || $.cookie('forum_id')
      }
    },
    components: {
      "headers": require("./header.vue"),
      "projectlist": require("./projectList.vue")
    },
    beforeMount() {
      getData(data, this.$route.params.id)
    }
  }

  
</script>
<style lang="less">
 .aboutme{
  .setnew{
    text-decoration: none;
    text-align: center;
    display: block;
  }
 }
</style>