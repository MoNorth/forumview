<template>
  <div class="labelList">
    <labelTitle :labelName="labelName" :labelCount="labelCount"></labelTitle>
    <project v-on:refreshDate="refreshDate" v-for="item in data.data.result" :num="item.count"
      :title="item.project_title" :label="item.project_label" :author="item.login_name" :times="item.project_date" :project_id="item.project_id" :login_id="item.login_id"></project>
  </div>
</template>
<script>
  import labelCGI from "../../getCGI/label/getProjectByLabel" 

  
  export default {
    name : 'labelList',
    props: {
      labelName: "",
      labelCount: 0
    },
    data() {
      return {
        data: {
            data: {
              err: true,
              result: []
            }
          }
      }
    },
    methods : {
      refreshDate() {

      }
    },
    components: {
      'labelTitle': require("./labelTitle.vue"),
      'project': require("../user/projectO.vue")
    },
    beforeMount() {
      labelCGI(this.data, this.labelName, 3)
    }
  }
</script>
<style lang="less">
.labelList{
  border-bottom: 2px solid #aaa;
}

</style>