<template>
  <div class="search">
    <input type="text" placeholder="搜索感兴趣的话题或作者哦~"/>
    <button>go</button>  
  </div>
</template>
<script>
  
  export default {
    name : 'search',
    methods : {
    }
  }
</script>
<style lang="less">
  .search{
    input{
      width: 300px;
      border: 1px solid #D8DEE2;
      border-radius: 3px;
      padding-left: 5px;
    }
    button{
      width: 80px;
      border: 1px solid #D8DEE2;
      border-radius: 3px;
      background-color: #bbb;
      color: #fff;
    }
  }
</style>