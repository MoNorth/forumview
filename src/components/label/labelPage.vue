<template>
  <div class="labelPage">
    <h3>帖子</h3>
    <div class="all">
      <project v-on:refreshDate="refreshDate" v-for="item in data.data.result" :num="item.count"
      :title="item.project_title" :label="item.project_label" :author="item.login_name" :times="item.project_date" :project_id="item.project_id" :login_id="item.login_id"></project>
      <loading v-show="data.data.err || !data.data.result.length" :empty="!data.data.err && !data.data.result.length"></loading>
    </div>
  </div>
</template>
<script>
  let data = {
    data: {
      err: true,
      result: []
    }
  }
  import getProjectByLabel from '../../getCGI/label/getProjectByLabel'

  export default {
    name : 'labelPage',
    props: {
    },
    data () {
      return {
        data: data
      }
    },
    methods : {
      refreshDate() {
        let id = this.login_id
        getProjectList(data,id)
      }
    },
    beforeMount() {
      let label = this.$route.params.label || 0;
      getProjectByLabel(data,label)
      // data.data = {err:false, result:[]}
    },

    components: {
      "project": require("../user/projectO.vue"),
      "loading": require("../public/loading.vue")
    },
  }
</script>
<style lang="less">
.all{
  min-height: 100px;
}
</style>