<template>
  <div class="labelTem">
    <labelList v-for="item in data.data.result" :labelName="item.project_label" :labelCount="item.count"></labelList>

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
    name : 'label',
    data() {
      return {
        data: data
      }
    },
    methods : {
    },
    components: {
      'labelList': require("./labelList.vue")
    },
    beforeMount() {
      labelCGI(data)
    }
  }
</script>
<style lang="less">
  .labelTem{
    color: #333;
  }
</style>