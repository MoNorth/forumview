<template>
  <div class="uploadFile">
    <input class="getFile" v-for="num in fileNum" type="file"/>
    <button class="addmore" @click="addFile">{{!fileNum ? '添加附件' : '添加更多'}}</button>
  </div>
</template>
<script>
  
  export default {
    name : 'uploadFile',
    data() {
      return {
        fileDoms: [],
        fileNum: 0
      }
    },
    methods : {
      addFile(){
        this.fileNum ++
      }
    }
  }
</script>
<style lang="less">
  .uploadFile{
    .getFile{
      margin-top: 10px;
    }
    .addmore{
      margin-top: 20px;
    }
  }
</style>