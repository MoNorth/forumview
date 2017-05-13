/**
* Created by northk
* 2016/12/7
**/

<template>
  <div class="my_header">
    <nav class="header_nav">
      <img :src="src">
      <search class="header_search"/>
      <ul>

        <li><a href="http://127.0.0.1:32000/login" @click="loginOut">{{isLogin}}</a></li>
        <li><router-link to="/aboutme">个人</router-link></li>

        <li><a href="">热门</a></li>
        <li><router-link to="/label">话题</router-link></li>
        <li><router-link to="/">首页</router-link></li>

      </ul>
      
      
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'myheader',
    data() {
      return {
        src: require("../../static/images/logo.png")
      }
    },
    methods: {
      loginOut() {
        if(this.isLogin == "Login out")
          $.cookie("forum_id","");
          $.cookie("forum_name","");
          $.cookie("forum_email","");
          $.cookie("forum_token","");
      }
      
    },
    computed: {
      isLogin() {
        if($.cookie("forum_id"))
          return "Login out"
        else return "Login in"
      }
    },
    components: {
      "search": require("./Search.vue")
    }
  }
</script>
<style lang="less">
  .header_nav{
    height: 50px;
    width: 960px;
    border-bottom: 2px solid #bbb;
    margin: 0 auto;
    margin-top: 30px;
    ul{
      height: 100%;
      li{
        list-style: none;
        float: right;
        line-height: 50px;
        margin-left: 40px;
        a{
          text-decoration: none;
          color: #bbb;
        }
        a:hover{
          color: #98D9F2;
        }
      }
    }
    img{
      height: 100%;
      float: left;
    }
    .header_search{
      float: left;
      margin-top: 15px;
      margin-left: 10px;
    }
  }

</style>