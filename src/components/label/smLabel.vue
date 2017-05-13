<template>
  <div class="smLabel">
      <h3>话题</h3>
      <ul class="slabelList">
        <router-link :to="'/labelpage/' + item.project_label"  v-for="item in data.data.result"><li><p class="right">{{item.count}}</p><p>#{{item.project_label}}#</p></li></router-link>
      </ul>
  </div>
</template>
<script>
  import labelCGI from "../../getCGI/label/getLabelList" 
  let data = {
    data: {
      err: true,
      result: []
    }
  }
  export default {
    name : 'smLabel',
    data() {
      return {
        data: data
      }
    },
    methods : {
    },
    components: {
    },
    beforeMount() {
      labelCGI(data)
    }
  }
</script>
<style lang="less">
  .smLabel{
    width: 100%;
    color: #333;
    .slabelList{
      margin-top: 25px;
      padding: 0;
      a{
        text-decoration: none;
      }
      li{
        border-bottom: 1px solid #fff;
        list-style: none;
        margin-bottom: 5px;
        p{
          margin-bottom: 0;
        }
        .right{
          float: right;
        }

      }
      li:hover{
        border-bottom: 1px solid #ccc;
      }
    }
  }
</style>