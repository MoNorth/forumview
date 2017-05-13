<template>
  <div class="aboutme">
  <!-- {{data}} -->
    <headers :img="data.data.result.info_img" 
    :name="data.data.result.login_name" :message="data.data.result.info_msg"></headers>
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
        return this.$route.params.id
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