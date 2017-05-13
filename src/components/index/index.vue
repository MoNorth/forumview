<template>
  <div class="indexPage">
    <div class="indexPageProject">
      <project></project>
    </div>
    <div class="indexPageLabel">
      <labels></labels>
    </div>

    
  </div>
</template>
<script>
  
  export default {
    name : 'indexPage',
    methods : {
    },
    components: {
      "project": require("../user/projectList.vue"),
      "labels": require("../label/smLabel.vue")
    }
  }
</script>
<style lang="less">
.indexPage{
  overflow: hidden;
  .indexPageProject{
    width: 650px;
    float: left;
  }
  .indexPageLabel{
    width: 250px;
    float: right;
  }

}
  
</style>