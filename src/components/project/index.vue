<template>
  <div class="projectShow">
    <h2>{{project_data.data.result.project_title}}</h2>
    <p class="otherinfo">
      <span class="author"><router-link :to="'/userinfo/' + project_data.data.result.login_id">{{project_data.data.result.login_name}}</router-link></span>
      <span class="labels"><router-link to="/">{{project_data.data.result.project_label}}</router-link></span>
      <span class="time">{{convertDate(project_data.data.result.project_date)}}</span>
      <span class="assist" @click="assistHandle">{{haveAssist ? "已" : ""}}赞：{{assist_data.data.result.length}}</span>

    </p>
    <div class="context" v-html="decodeURI(project_data.data.result.project_context)"/>
    <ul class="assistList">
      <li>赞的贡献：</li>
      <li class="assistName" v-for="item in assist_data.data.result"><router-link :to="'/userinfo/' + item.login_id">{{item.login_name}}</router-link></li>

    </ul>
    <comment v-on:refreshDate="refreshDate" :project_id="this.$route.params.id" class="comment"></comment>
    <commentlist v-on:refreshDate="refreshDate" v-for="item in comment_data.data.result"
    :project_id="item.project_id" :comment_id="item.comment_id"
    :comment_date="convertDate(item.comment_date)" :login_name="item.login_name"
    :comment_context="decodeURI(item.comment_context)" :commentlist_tip="item.comment_name"></commentlist>
  </div>
</template>
<script>
  var project_data = {
    data: {
      err: true,
      result: {
        // project_title: "标题",
        // project_context: "内容",
        // project_date: "日期",
        // project_label: "话题",
        // login_name: "作者"
      }
    }
  }

  var comment_data = {
    data: {
      err: true,
      result: []
    }
  }

  var assist_data = {
    data: {
      err: true,
      result: []
    }
  }

  import getProject from '../../getCGI/project/getProject'
  import getCommentList from '../../getCGI/project/getCommentList'
  import assist from '../../getCGI/project/assist'


  export default {
    name : 'projectShow',
    data () {
      return {
        project_data: project_data,
        comment_data: comment_data,
        assist_data: assist_data
      }
    },
    methods : {
      convertDate(str) {
        let d = new Date(str)
        let m = d.getMonth() + 1
        let dd = d.getDate()
        return m + "月" + dd + "日"
      },
      refreshDate() {
        let id = this.$route.params.id || 0;
        getCommentList(comment_data, id)
      },
      assistHandle() {
        let id = this.$route.params.id || 0;
        assist.assist(id, function(err, result){
            if(err)
              return
            assist.getAll(assist_data, id)
        })
      }
    },
    computed: {
      haveAssist() {
        let login_id = $.cookie('forum_id') || 0;
        for(let i = 0; i < this.assist_data.data.result.length; i++)
        {
          if(this.assist_data.data.result[i].login_id == login_id)
            return true
        }
        return false
      }
    },
    beforeMount() {
      let id = this.$route.params.id || 0;
      getProject(project_data, id)
      getCommentList(comment_data, id)
      assist.getAll(assist_data, id)

    },
    components: {
      "comment": require("./comment.vue"),
      'commentlist': require("./commentlist.vue")
    }
  }
</script>
<style lang="less">
.projectShow{
  h2{
    text-align: center;
    color: #444;
  }
  .otherinfo{
    text-align: center;
    span{
      display: inline-block;
      margin: 0 20px;
      a{
        text-decoration: none;
        color: #666;
      }
      a:hover{
        color: #333;
      }
    }
    .assist{
      cursor: pointer;
    }
  }
  .context{
    overflow: hidden;
    padding-bottom: 30px;
    border-bottom: 1px solid #bbb;
    margin-bottom: 30px;
    img{
      max-width: 100%;
    }
  }
  .assistList{
    overflow: hidden;
    padding-left: 0;
    padding-bottom: 30px;
    border-bottom: 1px solid #bbb;

    li{
      list-style: none;
      float: left;
      margin: 0 10px;
    }
    .assistName{

    }

  }
  .comment{
    margin-bottom: 50px;
  }
}
</style>