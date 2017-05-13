<template>
  <div class="projectList">
    <h3>帖子</h3>
    <div class="all">
      <project v-on:refreshDate="refreshDate" v-for="item in data.data.result" :num="item.count"
      :title="item.project_title" :label="item.project_label" :author="login_name || item.login_name" :times="item.project_date" :project_id="item.project_id" :login_id="login_id || item.login_id"></project>
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
  import getProjectList from '../../getCGI/user/getProjectList'

  export default {
    name : 'projectList',
    props: {
      login_id: 0,
      num: 100,
      login_name: ''
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
      let id = this.login_id
      getProjectList(data,id)
      // data.data = {err:false, result:[]}
    },

    components: {
      "project": require("./projectO.vue"),
      "loading": require("../public/loading.vue")
    },
  }
</script>
<style lang="less">
.all{
  min-height: 100px;
}
</style>